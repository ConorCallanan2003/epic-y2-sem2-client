"use client";
import { Drawer } from "@/components/ui/drawer";
import NavBarDialog from "../components/NavBar/NavBarDialog";
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
  return (
    <div className="flex h-screen flex-col">
      <div className="grow">{children}</div>
    </div>
  );
}
