"use client";
import { Card } from "@tremor/react";
export default function Home() {
  return (
    <>
      <div className="absolute z-0">
        <img className="h-[650px] pb-10 object-cover" src="render2.png"></img>
      </div>
      <div className="relative px-8 py-4 w-full h-[500px] flex flex-col align-center justify-center items-center z-10">
        <h1
          style={{ textShadow: "0px 2px 20px #3139c6;" }}
          className="text-8xl drop-shadow-2xl  font-bold select-none"
        >
          PEACE OF MIND
        </h1>
        <h1 className="text-4xl font-light select-none">STARTING AT $300</h1>
      </div>
    </>
  );
}
