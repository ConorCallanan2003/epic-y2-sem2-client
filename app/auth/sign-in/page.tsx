"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bike } from "lucide-react";
import { useRouter } from "next/navigation";
import { DeviceUUID } from "device-uuid";

import { useEffect, useState } from "react";

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
  if (sessionStorage.getItem("notifications") === "true") return;
  const swReg = await global.navigator.serviceWorker.register("/sw.js");
  console.log(swReg.active);
  const subscription = await swReg.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlB64ToUint8Array(config.pushKey),
  });
  console.log("Subscription registered");
  fetch(
    "https://rgi6vfa23saurzlxbmxq67gkti0hbepw.lambda-url.eu-west-1.on.aws/",
    {
      method: "POST",
      body: JSON.stringify({
        TableName: "Notifications",
        Item: {
          id: id,
          topic: id,
          subscription: JSON.stringify(subscription),
        },
      }),
    }
  );
  sessionStorage.setItem("notifications", "true");
}
function urlB64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

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
      <div className="w-3/5 sm:w-1/3 flex flex-col pt-16">
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
          className="text-lg"
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
