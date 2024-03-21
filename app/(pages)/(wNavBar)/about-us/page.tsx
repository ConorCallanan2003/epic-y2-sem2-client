"use client";

import {
  BarChartBig,
  DollarSign,
  Hammer,
  PencilRuler,
  Presentation,
} from "lucide-react";

export default function AboutUs() {
  return (
    <div className="h-full w-full md:px-8 px-16 pb-20 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold pb-8">Roadmap</h1>
      <div className="flex md:h-[450px] w-full md:flex-row flex-col justify-center items-center">
        <div className="p-3 h-[280px] w-full md:h-[300px] md:w-[250px] border-2 border-white rounded-lg flex flex-col justify-between items-center">
          <h1 className="w-full text-center text-4xl font-medium">Design</h1>
          <PencilRuler size={80} />
          <div className="w-full flex flex-col justify-center text-center">
            <p className="text-lg font-medium">Finalise design</p>
            <p className="text-lg font-medium">Assemble B.O.M</p>
          </div>
          <h1 className="w-full text-center text-4xl font-bold">Q1 2024</h1>
        </div>
        <div className="h-[50px] w-[3px] md:h-[3px] md:w-[50px] bg-white"></div>
        <div className="p-3 h-[280px] w-full md:h-[300px] md:w-[250px] border-2 border-white rounded-lg flex flex-col justify-between items-center">
          <h1 className="w-full text-center text-4xl font-medium">Build</h1>
          <Hammer size={80} />
          <div className="w-full flex flex-col justify-center text-center">
            <p className="text-lg font-medium">Choose manufacturer</p>
            <p className="text-lg font-medium">Quality assurance</p>
          </div>
          <h1 className="w-full text-center text-4xl font-bold">Q2 2024</h1>
        </div>
        <div className="h-[50px] w-[3px] md:h-[3px] md:w-[50px] bg-white"></div>
        <div className="p-3 h-[280px] w-full md:h-[300px] md:w-[250px] border-2 border-white rounded-lg flex flex-col justify-between items-center">
          <h1 className="w-full text-center text-4xl font-medium">Market</h1>
          <Presentation size={80} />
          <div className="w-full flex flex-col justify-center text-center">
            <p className="text-lg font-medium">Waitlist opens</p>
            <p className="text-lg font-medium">Influencer showcases</p>
          </div>
          <h1 className="w-full text-center text-4xl font-bold">Q3/4 2024</h1>
        </div>
        <div className="h-[50px] w-[3px] md:h-[3px] md:w-[50px] bg-white"></div>
        <div className="p-3 h-[280px] w-full md:h-[300px] md:w-[250px] border-2 border-white rounded-lg flex flex-col justify-between items-center">
          <h1 className="w-full text-center text-4xl font-medium">Sell</h1>
          <DollarSign size={80} />
          <div className="w-full flex flex-col justify-center text-center">
            <p className="text-lg font-medium">20,000 Units Y1</p>
            <p className="text-lg font-medium">Expand to EU/US</p>
          </div>
          <h1 className="w-full text-center text-4xl font-bold">Q1 2025</h1>
        </div>
      </div>
    </div>
  );
}
