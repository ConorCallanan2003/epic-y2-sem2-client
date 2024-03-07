"use client";
import { DrawerContent, DrawerClose } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NavBarMobileDialog({
  loggedIn,
  signOut,
}: {
  loggedIn: boolean;
  signOut: () => void;
}) {
  const [accountExpanded, setAccountExpanded] = useState(false);
  return (
    <>
      <DrawerContent className="pb-3 bg-gray-900">
        <div className="flex flex-col pt-6 pb-2 px-6 gap-4 duration-500 transition-all">
          <DrawerItem path={"/"} label={"Home"} />
          <Separator />
          <DrawerItem path={"/product"} label={"Product"} />
          <Separator />
          <DrawerItem path={"/about-us"} label={"About Us"} />
          <Separator />
          <DrawerItem path={"/support"} label={"Support"} />
          <Separator />
          {loggedIn ? (
            <>
              <div
                onClick={() => setAccountExpanded((previous) => !previous)}
                className="flex flex-col justify-center items-center gap-3"
              >
                <h1 className="text-3xl font-medium text-center">My Account</h1>
                {accountExpanded ? (
                  <>
                    <Separator />

                    <motion.div
                      className="flex flex-col justify-center items-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.1 }}
                    >
                      <Link href={"/dashboard"}>
                        <DrawerClose asChild>
                          <h1 className="text-3xl text-center">Dashboard</h1>
                        </DrawerClose>
                      </Link>
                    </motion.div>

                    <motion.div
                      className="flex flex-col justify-center items-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link href={"/account-details"}>
                        <DrawerClose asChild>
                          <h1 className="text-3xl text-center">
                            Account Details
                          </h1>
                        </DrawerClose>
                      </Link>
                    </motion.div>
                    <motion.div
                      className="flex flex-col justify-center items-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => {
                        signOut();
                      }}
                    >
                      <DrawerClose asChild>
                        <h1 className="text-3xl text-center">Sign out</h1>
                      </DrawerClose>
                    </motion.div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </>
          ) : (
            <DrawerItem path={"/sign-in"} label={"Sign in"} />
          )}
        </div>
      </DrawerContent>
    </>
  );
}

function DrawerItem({ path, label }: { path: string; label: string }) {
  return (
    <DrawerClose asChild>
      <Link href={path}>
        <div className="flex justify-center items-center gap-3">
          <h1 className="text-3xl font-medium text-center">{label}</h1>
        </div>
      </Link>
    </DrawerClose>
  );
}
