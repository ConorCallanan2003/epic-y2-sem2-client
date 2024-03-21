"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Assignment } from "../page";
import { useRouter } from "next/navigation";

function getUsers(window: Window) {
  const users: string[] = JSON.parse(
    window.sessionStorage.getItem("users") as string
  );
  return users ? users : [];
}
export default function AddStudent() {
  const router = useRouter();

  const [name, setName] = useState("");

  function addUser(user: string, window: Window) {
    let users: string[] = JSON.parse(
      window.sessionStorage.getItem("users") as string
    );
    if (!users) {
      users = [];
    }
    if (users.includes(user)) {
      return;
    }
    users.push(user);
    window.sessionStorage.setItem("users", JSON.stringify(users));
  }

  const [modules, setModules] = useState<string[]>([]);
  const [students, setStudents] = useState<string[]>([]);

  useEffect(() => {
    const students = getUsers(window);
    setStudents(students);
  }, []);

  return (
    <div className="sm:p-12 w-full h-full flex flex-col justify-start sm:justify-center sm:pt-4 pt-10 align-center items-center">
      <Card className="w-full sm:w-[400px] bg-grey-700 border-none sm:border-red-500">
        <CardHeader>
          <h1 className="text-white text-4xl sm:text-2xl font-bold">
            Add student
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
                  className="text-white  sm:text-sm text-lg"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="name"
                  placeholder="Name"
                ></Input>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 w-full justify-between">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              addUser(name, window);
              router.push("/admin-dashboard");
            }}
          >
            Add
          </Button>
          <Button
            className="w-full"
            onClick={() => router.push("/admin-dashboard")}
          >
            Cancel
          </Button>
        </CardFooter>
      </Card>
      <form></form>
    </div>
  );
}
