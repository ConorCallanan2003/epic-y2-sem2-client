"use client";
import { Drawer } from "@/components/ui/drawer";
import NavBar from "../../components/NavBar";
import NavBarDialog from "../../components/NavBarDialog";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  useEffect(() => {
    window.sessionStorage.getItem("loggedIn") === "true"
      ? null
      : router.push("auth/sign-in");
  }, [router]);
  return (
    <div className="flex h-screen flex-col">
      <div className="max-h-20 grow">
        <Drawer>
          <NavBarDialog />
          <NavBar />
        </Drawer>
      </div>
      <div className="grow">{children}</div>
    </div>
  );
}
