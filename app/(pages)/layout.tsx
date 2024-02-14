"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import NavBar from "../components/NavBar";
import NavBarDialog from "../components/NavBarDialog";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Drawer>
        <NavBarDialog />
        <NavBar />
      </Drawer>
      {children}
    </>
  );
}
