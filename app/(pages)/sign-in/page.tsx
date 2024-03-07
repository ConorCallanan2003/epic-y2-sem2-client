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

function validateUser(email: string, password: string) {
  let users: { email: string; password: string; admin: boolean }[] = JSON.parse(
    window.sessionStorage.getItem("users") as string
  );
  if (!users) {
    return false;
  }
  let verified = false;
  users.map((user) => {
    if (user.email == email && user.password == password) {
      window.sessionStorage.setItem("user", email);
      if (user.admin) {
        window.sessionStorage.setItem("admin", "true");
      }
      verified = true;
    }
  });
  return verified;
}

export default function SignIn() {
  const [details, setDetails] = useState<Record<string, any>>({ admin: false });
  const [error, setError] = useState("");

  const router = useRouter();
  return (
    <div className="sm:p-12 w-full h-full flex flex-col justify-start sm:justify-center sm:pt-0 pt-10 align-center items-center">
      <Card className="w-full sm:w-[400px] bg-grey-700 border-none sm:border-red-500">
        <CardHeader>
          <img className="pb-4 sm:my-0 mb-14" src="logo.png" />
          <h1 className="text-white text-4xl sm:text-2xl font-bold">Sign in</h1>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label
                  className="text-white sm:text-sm text-lg"
                  htmlFor="email"
                >
                  Email
                </Label>
                <Input
                  onChange={(e) => {
                    setDetails((previous) => ({
                      ...previous,
                      email: e.target.value,
                    }));
                  }}
                  className="text-white sm:text-sm text-lg"
                  id="email"
                  placeholder="Email address"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  className="text-white sm:text-sm text-lg"
                  htmlFor="password"
                >
                  Password
                </Label>
                <Input
                  onChange={(e) => {
                    setDetails((previous) => ({
                      ...previous,
                      password: e.target.value,
                    }));
                  }}
                  className="text-white  sm:text-sm text-lg"
                  id="password"
                  placeholder="Password"
                  type="password"
                ></Input>
              </div>
              <div className="flex text-white gap-0">
                <p className="text-sm text-red-500">{error}</p>
              </div>
              <div className="pt-1 flex text-white gap-2">
                <p className="text-md">I don't have an account.</p>
                <a href="/sign-up" className="font-bold">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 w-full justify-between">
          <Button
            className="w-full"
            variant="outline"
            onClick={() => router.push("/")}
          >
            Cancel
          </Button>
          <Button
            className="w-full"
            onClick={() => {
              if (validateUser(details["email"], details["password"])) {
                router.push("/");
              } else {
                setError("Email or password is incorrect");
              }
            }}
          >
            Sign in
          </Button>
        </CardFooter>
      </Card>
      <form></form>
    </div>
  );
}
