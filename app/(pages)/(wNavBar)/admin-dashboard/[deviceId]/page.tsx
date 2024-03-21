"use client";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { useEffect, useState } from "react";
type Disturbance = {
  datetime: number;
  image: string;
};

type DeviceDetails = {
  id: string;
  code: string;
  disturbances: Disturbance[];
};

export default function DeviceDetails({
  params,
}: {
  params: { deviceId: string };
}) {
  const [deviceDetails, setDeviceDetails] = useState<DeviceDetails>();

  async function getDeviceDetails(id: string) {
    const response = await fetch(
      `https://0b0lfxgdu6.execute-api.eu-west-1.amazonaws.com/getDeviceDetails?id=${id}`,
      {
        method: "GET",
      }
    );
    const data: DeviceDetails = await response.json();
    data.disturbances.reverse();
    setDeviceDetails(data);
  }

  useEffect(() => {
    const id = params.deviceId;
    getDeviceDetails(id);
  }, []);
  return (
    <div className="w-full h-full flex flex-col md:px-20 py-8 gap-8">
      <h1 className="text-6xl font-bold text-center">
        {deviceDetails ? deviceDetails.id : ""}
      </h1>
      <h1 className="text-3xl font-medium text-center">
        Unlock code: {deviceDetails ? deviceDetails.code : ""}
      </h1>
      <h1 className="text-3xl font-medium text-center">Disturbances</h1>

      <Table>
        <TableHeader className=" hover:bg-white hover:text-black">
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deviceDetails?.disturbances.map((disturbance) => (
            <TableRow key={disturbance.datetime}>
              <TableCell className="font-medium">
                {new Date(disturbance.datetime).toDateString()}
              </TableCell>
              <TableCell>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button className="text-white" variant="link">
                      {disturbance.image.replace(
                        "https://cyclesentry.s3.amazonaws.com",
                        "https://d1cuumhcstgi8t.cloudfront.net"
                      )}
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <img
                        loading="eager"
                        src={disturbance.image.replace(
                          "https://cyclesentry.s3.amazonaws.com",
                          "https://d1cuumhcstgi8t.cloudfront.net"
                        )}
                      />
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </TableCell>
              <TableCell className="font-medium">
                <a
                  href={disturbance.image.replace(
                    "https://cyclesentry.s3.amazonaws.com",
                    "https://d1cuumhcstgi8t.cloudfront.net"
                  )}
                >
                  Download
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className="flex flex-col justify-center items-center">
        {deviceDetails?.disturbances.map((disturbance) => (
          <>
            <img
              className="h-[200px] w-[200px] object-cover"
              src={disturbance.image}
            />
            <p className="text-center text-xl">
              {new Date(disturbance.datetime).toDateString()}
            </p>
          </>
        ))}
      </div> */}
    </div>
  );
}
