"use client";
import { Drawer } from "@/components/ui/drawer";
import NavBarDialog from "../../components/NavBar/NavBarDialog";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBarMobile from "@/app/components/NavBar/NavBarMobile";
import NavBar from "@/app/components/NavBar/NavBar";
import NavBarMobileDialog from "@/app/components/NavBar/NavBarMobileDialog";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import React from "react";

type AuthContextType = {
  loggedIn: boolean;
  email: string;
  password: string;
  admin: boolean;
};

export const AuthContext = React.createContext<AuthContextType>({
  loggedIn: false,
  email: "",
  password: "",
  admin: false,
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [authContext, setAuthContext] = useState<AuthContextType>({
    loggedIn: false,
    email: "",
    password: "",
    admin: false,
  });
  useEffect(() => {
    const email: string = window.sessionStorage.getItem("user") || "";
    const loggedIn = email ? true : false;
    const admin: boolean = window.sessionStorage.getItem("admin") == "true";
    const users: { email: string; password: string; admin: string }[] =
      JSON.parse(window.sessionStorage.getItem("users") || "[]");
    const user = users.filter((user) => user.email == email)[0];
    const password = user ? user.password : "";
    setAuthContext({
      loggedIn: loggedIn,
      email: email!,
      password,
      admin,
    });
  }, []);

  function signOut() {
    window.sessionStorage.setItem("user", "");
    window.sessionStorage.setItem("admin", "");
    setAuthContext({
      loggedIn: false,
      email: "",
      password: "",
      admin: false,
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
