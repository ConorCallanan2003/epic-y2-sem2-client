"use client";

export default function AboutUs() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold pb-16">Roadmap</h1>
      <div className="flex md:flex-row flex-col items-center">
        <div className="h-[100px] w-[200px] md:h-[150px] md:w-[150px] border-2 border-white rounded-lg flex flex-bold">
          <h1 className="text-4xl font-bold">2024</h1>
        </div>
        <div className="h-[50px] w-[3px] md:h-[3px] md:w-[50px] bg-white"></div>
        <div className="h-[100px] w-[200px] md:h-[150px] md:w-[150px] border-2 border-white rounded-lg"></div>
        <div className="h-[50px] w-[3px] md:h-[3px] md:w-[50px] bg-white"></div>
        <div className="h-[100px] w-[200px] md:h-[150px] md:w-[150px] border-2 border-white rounded-lg"></div>
        <div className="h-[50px] w-[3px] md:h-[3px] md:w-[50px] bg-white"></div>
        <div className="h-[100px] w-[200px] md:h-[150px] md:w-[150px] border-2 border-white rounded-lg"></div>
      </div>
    </div>
  );
}
