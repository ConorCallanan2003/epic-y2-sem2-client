"use client";
import { Drawer } from "@/components/ui/drawer";
import NavBarDialog from "../../components/NavBar/NavBarDialog";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import NavBarMobile from "@/app/components/NavBar/NavBarMobile";
import NavBar from "@/app/components/NavBar/NavBar";
import NavBarMobileDialog from "@/app/components/NavBar/NavBarMobileDialog";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import userPool from "@/lib/userPool";

type AuthContextType = {
  loggedIn: boolean;
  email: string;
};

export const AuthContext = React.createContext<AuthContextType>({
  loggedIn: false,
  email: "",
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [authContext, setAuthContext] = useState<AuthContextType>({
    loggedIn: false,
    email: "",
  });

  useEffect(() => {
    const user = userPool.getCurrentUser();
    if (user) {
      setAuthContext({
        loggedIn: true,
        email: user.getUsername(),
      });
    } else {
      setAuthContext({
        loggedIn: false,
        email: "",
      });
    }
  }, []);

  function signOut() {
    const user = userPool.getCurrentUser();
    user?.signOut();
    setAuthContext({
      loggedIn: false,
      email: "",
    });
  }
  return (
    <DropdownMenu>
      <Drawer>
        <div className="hidden sm:block">
          <NavBar loggedIn={authContext.loggedIn} signOut={signOut} />
        </div>
        <div className="sm:hidden">
          <NavBarMobile />
        </div>
        <AuthContext.Provider value={authContext}>
          <div>{children}</div>
        </AuthContext.Provider>
        <NavBarMobileDialog loggedIn={authContext.loggedIn} signOut={signOut} />
      </Drawer>
    </DropdownMenu>
  );
}
