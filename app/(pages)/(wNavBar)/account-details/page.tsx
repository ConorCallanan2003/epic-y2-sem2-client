"use client";
import { use, useContext, useEffect, useState } from "react";
import { AuthContext } from "../layout";

export default function AccountDetails() {
  const context = useContext(AuthContext);

  const unlockPattern = [3, 5, 1];

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-full w-full px-8 flex flex-col justify-center items-center">
      <div className="w-full md:w-1/3 flex flex-col gap-1">
        <h1 className="text-4xl md:text-3xl pb-10 text-center font-bold">
          Account Details
        </h1>
        <div className="flex justify-between">
          <h1 className="text-xl md:text-2xl font-medium">Email address</h1>
          <h1 className="text-xl md:text-2xl font-light">{context.email}</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="text-xl md:text-2xl font-medium">Unlock pattern</h1>
          <h1 className="text-xl md:text-2xl font-light">
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
            {showPassword
              ? context.password
              : "●".repeat(context.password.length)}
          </h1>
        </div>
      </div>
    </div>
  );
}
