"use client";
import { useEffect, useState } from "react";

export default function AccountDetails() {
  let users: { email: string; password: string; admin: string }[];
  let email = "";
  let password = "";
  useEffect(() => {
    email = window.sessionStorage.getItem("user")!;
    users = JSON.parse(window.sessionStorage.getItem("users") as string);
    password = users.filter((user) => user.email == email)[0].password;
  }, []);
  const unlockPattern = [3, 5, 1];

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="w-1/3 flex flex-col gap-1">
        <h1 className="text-3xl pb-10 text-center font-bold">
          Account Details
        </h1>
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">Email address</h1>
          <h1 className="text-2xl font-light">{email}</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">Unlock pattern</h1>
          <h1 className="text-2xl font-light">
            {JSON.stringify(unlockPattern)}
          </h1>
        </div>
        <div
          onMouseEnter={() => setShowPassword(true)}
          onMouseLeave={() => setShowPassword(false)}
          className="flex justify-between"
        >
          <h1 className="text-2xl font-medium">Password</h1>
          <h1 className="text-2xl font-light">
            {showPassword ? password : "●".repeat(password.length)}
          </h1>
        </div>
      </div>
    </div>
  );
}
