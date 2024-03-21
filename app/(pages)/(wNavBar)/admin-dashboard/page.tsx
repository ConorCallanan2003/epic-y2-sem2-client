"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../layout";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export type Assignment = {
  id: string;
  title: string;
  module: string;
  student: string;
};

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
function getAssignments(window: Window) {
  const assignments: Assignment[] = JSON.parse(
    window.sessionStorage.getItem("assignments") as string
  );
  return assignments ? assignments : [];
}

export default function AdminDashboard() {
  const context = useContext(AuthContext);

  const [filter, setFilter] = useState<string>();
  const [studentsFilter, setStudentsFilter] = useState<string>();
  const [modulesFilter, setModulesFilter] = useState<string>();

  const [data, setData] = useState<Assignment[]>();
  const [students, setStudents] = useState<string[]>([]);
  const [modules, setModules] = useState<string[]>([]);

  useEffect(() => {
    const students = getUsers(window);
    const modules = getModules(window);
    const assignments = getAssignments(window);
    setStudents(students);
    setModules(modules);
    setData(assignments);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-8 pb-20 ">
      <div className="w-full flex flex-col md:px-0 px-8 pb-8 md:pb-0 md:flex-row justify-between items-center ">
        <h1 className="pb-6 text-4xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-6">
          <Button variant={"secondary"}>
            <Link href={"/admin-dashboard/add-assignment"}>Add assignment</Link>
          </Button>
          <Button variant={"secondary"}>
            <Link href={"/admin-dashboard/add-student"}>Add student</Link>
          </Button>
          <Button variant={"secondary"}>
            <Link href={"/admin-dashboard/add-module"}>Add module</Link>
          </Button>
        </div>
      </div>
      <div className="w-full">
        <>
          <h1 className="pb-2 text-2xl font-bold">Assignments</h1>
          <div className="flex items-center py-4">
            <Input
              placeholder="Filter titles..."
              onChange={(e) => setFilter(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">ID</TableHead>
                  <TableHead className="text-center">Title</TableHead>
                  <TableHead className="text-center">Module</TableHead>
                  <TableHead className="text-center">Student</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data ? (
                  data
                    .filter(
                      (datum) =>
                        !filter ||
                        datum.title.toUpperCase().includes(filter.toUpperCase())
                    )
                    .map((assignment) => (
                      <TableRow key={assignment.id}>
                        <TableCell className="text-center">
                          {assignment.id}
                        </TableCell>
                        <TableCell className="text-center">
                          {assignment.title}
                        </TableCell>
                        <TableCell className="text-center">
                          {assignment.module}
                        </TableCell>
                        <TableCell className="text-center">
                          {assignment.student}
                        </TableCell>
                      </TableRow>
                    ))
                ) : (
                  <></>
                )}
              </TableBody>
            </Table>
          </div>
        </>
        <>
          <h1 className="pb-2 pt-10 text-2xl font-bold">Students</h1>
          <div className="flex items-center py-4">
            <Input
              placeholder="Filter names..."
              onChange={(e) => setStudentsFilter(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students!
                  .filter(
                    (student) =>
                      !studentsFilter ||
                      student
                        .toUpperCase()
                        .includes(studentsFilter!.toUpperCase())
                  )
                  .map((student) => (
                    <TableRow key={student}>
                      <TableCell className="text-center">{student}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </>
        <>
          <h1 className="pb-2 pt-10 text-2xl font-bold">Modules</h1>
          <div className="flex items-center py-4">
            <Input
              placeholder="Filter module names..."
              onChange={(e) => setModulesFilter(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Module Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {modules!
                  .filter(
                    (module) =>
                      !modulesFilter ||
                      module
                        .toUpperCase()
                        .includes(modulesFilter!.toUpperCase())
                  )
                  .map((module) => (
                    <TableRow key={module}>
                      <TableCell className="text-center">{module}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </>
      </div>
    </div>
  );
}
