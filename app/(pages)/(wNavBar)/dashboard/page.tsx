"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus, Radio } from "lucide-react";

export default function Dashboard() {
  const context = useContext(AuthContext);
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    setDevices(JSON.parse(window.sessionStorage.getItem("devices") || "[]"));
  }, []);
  function deleteDevice(id: string) {
    const devices: string[] = JSON.parse(
      window.sessionStorage.getItem("devices") || "[]"
    );
    window.sessionStorage.setItem(
      "devices",
      JSON.stringify(devices.filter((device) => device != id))
    );
    setDevices(JSON.parse(window.sessionStorage.getItem("devices") || "[]"));
  }
  return (
    <div className="flex flex-col items-center justify-center px-8">
      <h1 className="pb-6 text-4xl font-bold">Dashboard</h1>

      {devices.length == 0 ? (
        <>
          <div className="flex h-[80px] flex-col justify-evenly">
            <p className="text-lg font-medium">
              You haven&apos;t registered any devices!
            </p>
          </div>
          <Link href={"/register-device"}>
            <button className=" rounded-lg border-2 border-white bg-transparent px-6 py-2 font-medium text-white duration-300 hover:bg-white hover:text-black">
              Add now!
            </button>
          </Link>
        </>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {devices.map((device) => (
            <div
              key={device}
              className="flex h-[320px] w-[220px] flex-col items-center justify-between rounded-lg border-2 border-white p-6"
            >
              <h1 className="text-2xl font-bold">ID {device}</h1>
              <Radio size={120} />
              <button className="w-full boder-transparent rounded-lg border-2 bg-white px-3 py-2 font-medium text-black  duration-300 hover:scale-105">
                View details
              </button>
              <button
                onClick={() => deleteDevice(device)}
                className="w-full boder-transparent rounded-lg border-2 bg-red-500 px-3 py-2 font-medium text-white  duration-300 hover:scale-105"
              >
                Delete
              </button>
            </div>
          ))}
          <div className="flex h-[300px] w-[220px] flex-col items-center justify-between rounded-lg border-2 border-white p-6">
            <h1 className="text-2xl font-bold">Add device</h1>
            <Plus size={120} />
            <Link href={"/register-device"}>
              <button className="boder-transparent rounded-lg border-2 bg-white px-3 py-2 font-medium text-black  duration-300 hover:scale-105">
                Register now
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
