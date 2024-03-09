"use client";

import { BarChartBig, Hammer, PencilRuler, Presentation } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="h-full w-full md:px-8 px-16 pb-20 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold pb-8">Roadmap</h1>
      <div className="flex md:h-[450px] w-full md:flex-row flex-col justify-center items-center">
        <div className="p-3 h-[220px] w-full md:h-[250px] md:w-[250px] border-2 border-white rounded-lg flex flex-col justify-between items-center">
          <h1 className="w-full text-center text-4xl font-medium">Design</h1>
          <PencilRuler size={80} />
          <h1 className="w-full text-center text-4xl font-bold">2024</h1>
        </div>
        <div className="h-[50px] w-[3px] md:h-[3px] md:w-[50px] bg-white"></div>
        <div className="p-3 h-[220px] w-full md:h-[250px] md:w-[250px] border-2 border-white rounded-lg flex flex-col justify-between items-center">
          <h1 className="w-full text-center text-4xl font-medium">Build</h1>
          <Hammer size={80} />
          <h1 className="w-full text-center text-4xl font-bold">2025</h1>
        </div>
        <div className="h-[50px] w-[3px] md:h-[3px] md:w-[50px] bg-white"></div>
        <div className="p-3 h-[220px] w-full md:h-[250px] md:w-[250px] border-2 border-white rounded-lg flex flex-col justify-between items-center">
          <h1 className="w-full text-center text-4xl font-medium">Market</h1>
          <Presentation size={80} />
          <h1 className="w-full text-center text-4xl font-bold">2025</h1>
        </div>
        <div className="h-[50px] w-[3px] md:h-[3px] md:w-[50px] bg-white"></div>
        <div className="p-3 h-[220px] w-full md:h-[250px] md:w-[250px] border-2 border-white rounded-lg flex flex-col justify-between items-center">
          <h1 className="w-full text-center text-4xl font-medium">Grow</h1>
          <BarChartBig size={80} />
          <h1 className="w-full text-center text-4xl font-bold">2026</h1>
        </div>
      </div>
    </div>
  );
}
