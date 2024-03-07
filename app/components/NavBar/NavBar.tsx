"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import React from "react";

export default function NavBar({
  loggedIn,
  signOut,
}: {
  loggedIn: boolean;
  signOut: () => void;
}) {
  return (
    <div className="w-full h-[120px] flex items-center">
      <div className="p-8 w-1/5 font-medium text-lg flex items-center">
        <Link className="flex" href={"/"}>
          <img
            className="object-scale-down h-[50px]"
            src={"logo.png"}
            alt={"CycleSentry Logo"}
          />
        </Link>
      </div>
      <div className="p-8 w-4/5 justify-end flex font-medium text-lg">
        <ListItem text={"Home"} path={"/"}></ListItem>
        <ListItem text={"Product"} path={"/product"}></ListItem>
        <ListItem text={"About Us"} path={"/about-us"}></ListItem>
        <ListItem text={"Support"} path={"/support"}></ListItem>
        {loggedIn ? (
          <>
            <DropdownMenuTrigger asChild>
              <div className=" px-4 py-2 ml-4 rounded-md transition-colors duration-150 ease-in-out hover:bg-white hover:text-black">
                My Account
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-30">
              <DropdownMenuItem className="text-center w-30">
                <Link href={"/dashboard"}>Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-center w-30">
                <Link href={"/account-details"}>Account details</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-center w-30"
                onClick={() => {
                  signOut();
                }}
              >
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </>
        ) : (
          <ListItem text={"Sign in"} path={"/sign-in"}></ListItem>
        )}
      </div>
    </div>
  );
}

function ListItem({ text, path }: { text: string; path: string }) {
  return (
    <Link href={path}>
      <div className=" px-4 py-2 ml-4 rounded-md transition-colors duration-150 ease-in-out hover:bg-white hover:text-black">
        {text}
      </div>
    </Link>
  );
}
