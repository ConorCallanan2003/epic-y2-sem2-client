"use client";
import { Drawer } from "@/components/ui/drawer";
import NavBarDialog from "../../components/NavBar/NavBarDialog";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBarMobile from "@/app/components/NavBar/NavBarMobile";
import NavBar from "@/app/components/NavBar/NavBar";
import NavBarMobileDialog from "@/app/components/NavBar/NavBarMobileDialog";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    setLoggedIn(window.sessionStorage.getItem("user") ? true : false);
    setAdmin(window.sessionStorage.getItem("admin") == "true" ? true : false);
  }, []);

  function signOut() {
    window.sessionStorage.setItem("user", "");
    window.sessionStorage.setItem("admin", "");
    setLoggedIn(false);
  }
  return (
    <DropdownMenu>
      <Drawer>
        <div className="hidden sm:block">
          <NavBar loggedIn={loggedIn} signOut={signOut} />
        </div>
        <div className="sm:hidden">
          <NavBarMobile />
        </div>
        <div className="lg:px-8">{children}</div>
        <NavBarMobileDialog loggedIn={loggedIn} signOut={signOut} />
      </Drawer>
    </DropdownMenu>
  );
}
