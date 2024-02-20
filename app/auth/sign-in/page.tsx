"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bike, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { useState } from "react";

function Loader() {
  return (
    <div className="border-2 border-white border-t-0 border-l-0 rounded-full w-[15px] h-[15px] animate-spin"></div>
  );
}

async function signInWithID(id: string) {
  return "success";
}

const config = {
  pushKey:
    "BKdU2S8eVhdVjoHlNzumL91cPo_DblBU3B8iMmNdQfIPgD_VUVDnW63FPG9MmpuoNzALUUOl5PM4PJ2d_QUKjGQ",
};

async function subscribe(id: any) {
  const swReg = await navigator.serviceWorker.register("/sw.js");
  const subscription = await swReg.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlB64ToUint8Array(config.pushKey),
  });
}
function urlB64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  console.log(base64);
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default function SignIn() {
  const [id, setID] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = () => {
    setLoading(true);
    signInWithID(id).then((result) => {
      setTimeout(() => {
        window.sessionStorage.setItem("loggedIn", "true");
        subscribe(id);
        router.push("/");
      }, 1000);
    });
  };
  return (
    <div className="flex-col w-full h-screen flex justify-start items-center ">
      <div className="w-3/5 flex flex-col pt-16">
        <div className="flex justify-center pb-4 pt-24">
          <Bike size={130} />
        </div>
        <div
          style={{ fontSize: "24px" }}
          className="font-light leading-6 text-sm pb-6 text-center  "
        >
          Please enter your device ID
        </div>
        <Input
          onChange={(e) => {
            setError("");
            setID(e.target.value);
          }}
          placeholder="ID"
        ></Input>
        {error ? (
          <div style={{ fontSize: "12px" }} className="text-red-500">
            {error}
          </div>
        ) : null}
        <Button onClick={handleSignIn} className="mt-6" type="submit">
          {loading ? <Loader /> : "Submit"}
        </Button>
      </div>
    </div>
  );
}
