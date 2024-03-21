"use client";
import { Drawer } from "@/components/ui/drawer";
import { createContext, useEffect, useState } from "react";
import NavBarMobile from "@/app/components/NavBar/NavBarMobile";
import NavBar from "@/app/components/NavBar/NavBar";
import NavBarMobileDialog from "@/app/components/NavBar/NavBarMobileDialog";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import React from "react";
import cognitoPool from "@/lib/userPool";
import { jwtDecode } from "jwt-decode";

type AuthContextType = {
  email: string;
  admin: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  email: "",
  admin: false,
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [authContext, setAuthContext] = useState<AuthContextType>({
    email: "",
    admin: false,
  });

  function checkIsUserAdmin(email: string, window: Window) {
    const adminUsers: string[] = JSON.parse(
      window.sessionStorage.getItem("adminUsers") as string
    );
    if (adminUsers && adminUsers.includes(email)) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    const user = cognitoPool.getCurrentUser();
    user?.getSession((error: any, session: any) => {
      if (error) {
        console.error(error);
      } else {
        const email = (
          jwtDecode(session.idToken.jwtToken) as {
            aud: string;
            "cognito:username": string;
            email: string;
            email_verified: string;
          }
        ).email;
        const isAdmin = checkIsUserAdmin(email, window);
        setAuthContext({ email: email, admin: isAdmin });
      }
    });
  }, []);

  function signOut() {
    const user = cognitoPool.getCurrentUser();
    user?.signOut();
    setAuthContext({
      email: "",
      admin: false,
    });
  }
  return (
    <DropdownMenu>
      <Drawer>
        <div className="hidden sm:block">
          <AuthContext.Provider value={authContext}>
            <NavBar signOut={signOut} />
          </AuthContext.Provider>
        </div>
        <div className="sm:hidden">
          <NavBarMobile />
        </div>
        <AuthContext.Provider value={authContext}>
          <div>{children}</div>
        </AuthContext.Provider>
        <NavBarMobileDialog
          loggedIn={authContext.email != ""}
          signOut={signOut}
        />
      </Drawer>
    </DropdownMenu>
  );
}
