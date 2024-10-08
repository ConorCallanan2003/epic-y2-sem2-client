import { Button } from "@/components/ui/button";
import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { Camera, LayoutDashboard, LocateFixed, LogOut } from "lucide-react";
import Link from "next/link";

export default function NavBarDialog() {
  return (
    <>
      <DrawerContent className="pb-3 bg-gray-900">
        {/* <h1 className="text-center pt-4 text-4xl font-bold">CycleSentry</h1> */}
        <div className="flex flex-col pt-6 pb-2 px-6 gap-4">
          <DrawerClose asChild>
            <Link href={"/"}>
              <div className="flex justify-center items-center gap-3">
                <LayoutDashboard size={32} />
                <h1 className="text-2xl font-medium text-center">Dashboard</h1>
              </div>
            </Link>
          </DrawerClose>
          <Separator />
          <DrawerClose asChild>
            <Link href={"/location"}>
              <div className="flex justify-center items-center gap-3">
                <LocateFixed size={32} />
                <h1 className="text-2xl font-medium text-center">
                  Current Location
                </h1>
              </div>
            </Link>
          </DrawerClose>

          <Separator />
          <DrawerClose asChild>
            <Link href={"/camera"}>
              <div className="flex justify-center items-center gap-3">
                <Camera size={32} />
                <h1 className="text-2xl font-medium text-center">Camera</h1>
              </div>
            </Link>
          </DrawerClose>

          <Separator />
          <DrawerClose asChild>
            <Link href={"/auth/sign-in"}>
              <div
                onClick={() =>
                  window.sessionStorage.setItem("loggedIn", "false")
                }
                className="flex justify-center items-center gap-3"
              >
                <LogOut size={24} />
                <h1 className="text-lg font-light text-center">Sign Out</h1>
              </div>
            </Link>
          </DrawerClose>
        </div>
      </DrawerContent>
    </>
  );
}
