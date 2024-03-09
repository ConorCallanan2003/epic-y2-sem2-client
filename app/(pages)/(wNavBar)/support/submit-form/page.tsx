"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SubmitForm() {
  const [details, setDetails] = useState<Record<string, any>>({
    admin: false,
  });
  const [error, setError] = useState("");

  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col justify-start sm:justify-center sm:pt-0  align-center items-center">
      <Card className="w-full sm:w-[400px] bg-grey-700 border-none sm:border-red-500">
        <CardHeader>
          <h1 className="text-white text-4xl sm:text-2xl font-bold">
            Submit feedback
          </h1>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="text-white sm:text-sm text-lg" htmlFor="name">
                  Name
                </Label>
                <Input
                  onChange={(e) => {
                    setDetails((previous) => ({
                      ...previous,
                      name: e.target.value,
                    }));
                  }}
                  className="text-white  sm:text-sm text-lg"
                  id="name"
                  placeholder="Name"
                ></Input>
              </div>
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
                  htmlFor="message"
                >
                  Message
                </Label>
                <Textarea
                  onChange={(e) => {
                    setDetails((previous) => ({
                      ...previous,
                      message: e.target.value,
                    }));
                  }}
                  className="text-white flex h-10 w-full rounded-md border-input bg-transparent ring-offset-background focus-visible:ring-ring "
                  id="message"
                  placeholder="Message"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="text-white sm:text-sm text-lg" htmlFor="file">
                  File (optional)
                </Label>
                <Input
                  className="bg-white sm:text-sm text-lg"
                  id="file"
                  placeholder="File"
                  type="file"
                />
              </div>

              <div className="flex text-white gap-0">
                <p className="text-sm text-red-500">{error}</p>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 w-full justify-between">
          <Button
            variant="outline"
            className="w-full sm:text-md text-lg"
            onClick={() => {}}
          >
            Submit
          </Button>
          <Button
            variant="destructive"
            className="w-full sm:text-md text-lg"
            onClick={() => {
              router.back();
            }}
          >
            Cancel
          </Button>
        </CardFooter>
      </Card>
      <form></form>
    </div>
  );
}
