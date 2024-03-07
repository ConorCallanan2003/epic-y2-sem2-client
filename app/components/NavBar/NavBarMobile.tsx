"use client";
import { DrawerTrigger } from "@/components/ui/drawer";
import { Bike, Menu, RocketIcon } from "lucide-react";
import Link from "next/link";

export default function NavBarMobile() {
  return (
    <div className="w-full h-[100px] px-8 flex justify-between align-center items-center">
      <div className="flex items-center gap-2">
        <Link className="flex" href={"/"}>
          <img
            className="object-scale-down h-[25px]"
            src={"logo.png"}
            alt={"ULAS HiPR Logo"}
          />
        </Link>
      </div>
      <DrawerTrigger>
        <Menu size={36} />
      </DrawerTrigger>
    </div>
  );
}
