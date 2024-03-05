"use client";
import { GraduationCap, HomeIcon, LucideBike } from "lucide-react";
import { useEffect, useRef } from "react";
import Map, { NavigationControl, GeolocateControl, Marker } from "react-map-gl";

export default function LocationPage() {
  //   const ref = useRef(null);
  //   useEffect(() => {
  //     console.log(ref);
  //     const elements = document.getElementsByClassName(
  //       "mapboxgl-ctrl-bottom-right"
  //     );
  //     if (elements.length > 0) {
  //       elements[0].parentElement?.removeChild(elements[0]);
  //     }
  //   }, [ref.current]);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="h-full flex flex-col justify-between items-center">
      <h1 className="pb-6 pt-2 text-3xl font-bold">Current Location</h1>
      <div className="w-full h-full">
        <Map
          //   ref={ref}
          mapboxAccessToken={
            "pk.eyJ1IjoiY29ub3JjYWxsYW5hbiIsImEiOiJjbHNsczVpNTUwZ2JsMmtwNmM1NGhqdHZpIn0.YcG602PM42Ymx747UDXTSQ"
          }
          mapStyle="mapbox://styles/mapbox/streets-v12"
          //   style={classes.mapStyle}
          initialViewState={{
            latitude: 52.67355,
            longitude: -8.578,
            zoom: 17,
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
