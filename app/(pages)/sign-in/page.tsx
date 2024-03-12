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
import userPool from "@/lib/userPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
  const [details, setDetails] = useState<Record<string, any>>({ admin: false });
  const [error, setError] = useState("");

  const [needsToVerify, setNeedsToVerify] = useState(false);

  var params = {
    GroupName: "STRING_VALUE" /* required */,
    UserPoolId: "STRING_VALUE" /* required */,
    Limit: "NUMBER_VALUE",
    NextToken: "STRING_VALUE",
  };

  function authenticateUser(email: string, password: string) {
    const user = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("Logged in successfully");
        router.push("/");
      },
      onFailure: (err) => {
        if (err.name == "UserNotConfirmedException") {
          setNeedsToVerify(true);
        }
        if (err.name == "NotAuthorizedException") {
          setError("Incorrect username or password");
        }
      },
      newPasswordRequired: (err) => console.log("New password required: ", err),
    });
  }

  function verifyEmail(email: string, password: string, code: string) {
    const user = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    user.confirmRegistration(code, false, (data, err) => {
      console.log(err);
      if (err) {
        setError(err);
      } else {
        router.push("/");
      }
    });
  }

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
              {needsToVerify ? (
                <div className="flex flex-col space-y-1.5">
                  <Label
                    className="text-white sm:text-sm text-lg"
                    htmlFor="code"
                  >
                    Code
                  </Label>
                  <Input
                    key={"code"}
                    onChange={(e) => {
                      setDetails((previous) => ({
                        ...previous,
                        code: e.target.value,
                      }));
                    }}
                    value={details["code"]}
                    className="text-white sm:text-sm text-lg"
                    id="code"
                    placeholder="Confirmation Code"
                  />
                </div>
              ) : (
                <>
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
                    <p className="text-md">I don&apos;t have an account.</p>
                    <a href="/sign-up" className="font-bold">
                      Sign up
                    </a>
                  </div>
                </>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 w-full justify-between">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              needsToVerify
                ? verifyEmail(
                    details["email"],
                    details["password"],
                    details["code"]
                  )
                : authenticateUser(details["email"], details["password"]);
              // if (validateUser(details["email"], details["password"])) {
              //   router.push("/");
              // } else {
              //   setError("Email or password is incorrect");
              // }
            }}
          >
            {needsToVerify ? "Verify" : "Sign in"}
          </Button>
          <Button className="w-full" onClick={() => setNeedsToVerify(false)}>
            Cancel
          </Button>
        </CardFooter>
      </Card>
      <form></form>
    </div>
  );
}
