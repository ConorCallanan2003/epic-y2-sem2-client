"use client";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RegisterSuccess() {
  const [id, setID] = useState("");
  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    setID(queryParameters.get("id") || "");
  }, []);
  return (
    <div className="h-[600px] flex flex-col align-center justify-center items-center">
      <Check className="pb-4" size={200} />
      <h1 className="text-5xl font-bold pt-4 pb-6">Success</h1>
      <p className="text-2xl font-medium pb-6">
        Your have registered your device with ID {id}!
      </p>
      <Link href={"/dashboard"}>
        <Button>Go to Dashboard</Button>
      </Link>
    </div>
  );
}
