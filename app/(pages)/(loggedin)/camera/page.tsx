import { Button } from "@/components/ui/button";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import S3, { ObjectList } from "aws-sdk/clients/s3";
import { useEffect, useState } from "react";

export default function Camera() {
  return (
    <div className="flex flex-col grow justify-evenly">
      <h1 className="text-3xl pt-2 pb-2 font-bold text-center">History</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Location</TableHead>
            <TableHead className="text-center">Time</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-center">College</TableCell>
            <TableCell className="text-center">3h ago</TableCell>
            <TableCell>
              <div className="flex justify-center">
                <Button className="w-[50px] h-[30px]">View</Button>
                <Button className="w-[50px] h-[30px] ml-2">Share</Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-center">Home</TableCell>
            <TableCell className="text-center">1d ago</TableCell>
            <TableCell>
              <div className="flex justify-center">
                <Button className="w-[50px] h-[30px]">View</Button>
                <Button className="w-[50px] h-[30px] ml-2">Share</Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="py-6 px-6">
        <Button className="w-full">Capture Image</Button>
      </div>
    </div>
  );
}
