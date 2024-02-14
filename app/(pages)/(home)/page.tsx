"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@radix-ui/react-separator";
import {
  Bike,
  Briefcase,
  GraduationCap,
  HomeIcon,
  LucideBike,
} from "lucide-react";
import Image from "next/image";
import Map, { NavigationControl, GeolocateControl, Marker } from "react-map-gl";

export default function Home() {
  return (
    <div className="px-4 flex flex-col">
      <h1 className="text-3xl font-bold text-center mt-1 pb-2">
        Recent Activity
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Time</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Event</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">11:32</TableCell>
            <TableCell>Office</TableCell>
            <TableCell>Disturbed</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">1d ago</TableCell>
            <TableCell>Home</TableCell>
            <TableCell>Moved</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">4d ago</TableCell>
            <TableCell>Office</TableCell>
            <TableCell>Disturbed</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">2w ago</TableCell>
            <TableCell>Office</TableCell>
            <TableCell>Moved</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h1 className="text-3xl font-bold text-center mt-8 pb-2">Locations</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Latitude</TableHead>
            <TableHead>Longitude</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>College</TableCell>
            <TableCell>52.67380289775</TableCell>
            <TableCell>-8.57788981026</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Home</TableCell>
            <TableCell>52.65963441271</TableCell>
            <TableCell>-8.57428751987</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="h-[300px] mb-8 mt-2">
        <Map
          //   ref={ref}
          mapboxAccessToken={
            "pk.eyJ1IjoiY29ub3JjYWxsYW5hbiIsImEiOiJjbHNsczVpNTUwZ2JsMmtwNmM1NGhqdHZpIn0.YcG602PM42Ymx747UDXTSQ"
          }
          mapStyle="mapbox://styles/mapbox/streets-v12"
          //   style={classes.mapStyle}
          initialViewState={{
            latitude: (52.67380289775 + 52.659634412712876) / 2,
            longitude: (-8.577889810266 + -8.577889810266) / 2,
            zoom: 12,
          }}
          maxZoom={20}
          minZoom={3}
        >
          <Marker
            latitude={52.67380289775}
            longitude={-8.577889810266}
            anchor="bottom"
          >
            <GraduationCap style={{ display: "block" }} />
          </Marker>
          <Marker latitude={52.67355} longitude={-8.578} anchor="bottom">
            <LucideBike color="blue" style={{ display: "block" }} />
          </Marker>
          <Marker
            latitude={52.659634412712876}
            longitude={-8.574287519871271}
            anchor="bottom"
          >
            <HomeIcon style={{ display: "block" }} />
          </Marker>
        </Map>
      </div>
    </div>
  );
}
