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

function getModules(window: Window) {
  const modules: string[] = JSON.parse(
    window.sessionStorage.getItem("modules") as string
  );
  return modules ? modules : [];
}

function getUsers(window: Window) {
  const users: string[] = JSON.parse(
    window.sessionStorage.getItem("users") as string
  );
  return users ? users : [];
}

export default function AddAssignment() {
  const router = useRouter();

  const [details, setDetails] = useState<Assignment>({
    id: "",
    title: "",
    module: "",
    student: "",
  });

  function addAssignment(newAssignment: Assignment, window: Window) {
    let assignments: Assignment[] = JSON.parse(
      window.sessionStorage.getItem("assignments") as string
    );
    if (!assignments) {
      assignments = [];
    }
    if (
      assignments
        .map((assignment: Assignment) => assignment.id == newAssignment.id)
        .includes(true)
    ) {
      return;
    }
    assignments.push(newAssignment);
    window.sessionStorage.setItem("assignments", JSON.stringify(assignments));
  }

  const [modules, setModules] = useState<string[]>([]);
  const [students, setStudents] = useState<string[]>([]);

  useEffect(() => {
    const subs = getModules(window);
    const users = getUsers(window);
    setDetails((previous) => ({
      ...previous,
      module: subs[0],
      student: users[0],
    }));
    setModules(subs);
    setStudents(users);
  }, []);

  return (
    <div className="sm:p-12 w-full h-full flex flex-col justify-start sm:justify-center sm:pt-4 pt-10 align-center items-center">
      <Card className="w-full sm:w-[400px] bg-grey-700 border-none sm:border-red-500">
        <CardHeader>
          <h1 className="text-white text-4xl sm:text-2xl font-bold">
            Add assignment
          </h1>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="text-white sm:text-sm text-lg" htmlFor="id">
                  ID
                </Label>
                <Input
                  className="text-white sm:text-sm text-lg"
                  onChange={(e) => {
                    setDetails((previous) => ({
                      ...previous,
                      id: e.target.value,
                    }));
                  }}
                  id="id"
                  placeholder="ID"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  className="text-white sm:text-sm text-lg"
                  htmlFor="title"
                >
                  Title
                </Label>
                <Input
                  className="text-white  sm:text-sm text-lg"
                  onChange={(e) => {
                    setDetails((previous) => ({
                      ...previous,
                      title: e.target.value,
                    }));
                  }}
                  id="title"
                  placeholder="Title"
                ></Input>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  className="text-white sm:text-sm text-lg"
                  htmlFor="module"
                >
                  Module
                </Label>
                <select
                  className="text-white rounded-lg border-2 border-grey-800 bg-gray-900 px-2 py-2 sm:text-sm text-lg"
                  onChange={(e) => {
                    setDetails((previous) => ({
                      ...previous,
                      module: e.target.value,
                    }));
                  }}
                  value={details.module}
                  id="module"
                >
                  {modules.map((module) => (
                    <option key={module}>{module}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  className="text-white sm:text-sm text-lg"
                  htmlFor="module"
                >
                  Students
                </Label>
                <select
                  className="text-white rounded-lg border-2 border-grey-800 bg-gray-900 px-2 py-2 sm:text-sm text-lg"
                  onChange={(e) => {
                    setDetails((previous) => ({
                      ...previous,
                      student: e.target.value,
                    }));
                  }}
                  value={details.student}
                  id="student"
                >
                  {students.map((student) => (
                    <option key={student}>{student}</option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 w-full justify-between">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              addAssignment(details, window);
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
