"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Loader() {
  return (
    <div className="border-2 border-white border-t-0 border-l-0 rounded-full w-[15px] h-[15px] animate-spin"></div>
  );
}

const config = {
  pushKey:
    "BKdU2S8eVhdVjoHlNzumL91cPo_DblBU3B8iMmNdQfIPgD_VUVDnW63FPG9MmpuoNzALUUOl5PM4PJ2d_QUKjGQ",
};

async function subscribe(id: any) {
  const devices: string[] = JSON.parse(
    window.sessionStorage.getItem("devices") || "[]"
  );
  if (devices.find((device) => device == id)) return;
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
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    await subscribe(id);
    const devices: string[] = JSON.parse(
      window.sessionStorage.getItem("devices") || "[]"
    );
    window.sessionStorage.setItem(
      "devices",
      JSON.stringify(
        devices.find((device) => device == id) ? devices : devices.concat([id])
      )
    );
    router.push(`/register-device/success?id=${id}`);
  };

  const router = useRouter();
  return (
    <div className="sm:p-12 w-full h-full flex flex-col justify-start sm:justify-center sm:pt-0 pt-10 align-center items-center">
      <Card className="w-full sm:w-[400px] bg-grey-700 border-none sm:border-red-500">
        <CardHeader>
          <img className="pb-4 sm:my-0 mb-14" src="logo.png" />
          <h1 className="text-white text-4xl sm:text-2xl font-bold">
            Register Device
          </h1>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label
                  className="text-white sm:text-sm text-lg"
                  htmlFor="email"
                >
                  Device ID
                </Label>
                <Input
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                  className="text-white sm:text-sm text-lg"
                  placeholder="ID - e.g. 123456"
                />
              </div>
              <div className="flex text-white gap-0">
                <p className="text-sm text-red-500">{error}</p>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 w-full justify-between">
          <Button variant="outline" className="w-full" onClick={handleSignIn}>
            {loading ? <Loader /> : "Register Device"}
          </Button>
          <Button className="w-full" onClick={() => router.back()}>
            Cancel
          </Button>
        </CardFooter>
      </Card>
      <form></form>
    </div>
  );
}
