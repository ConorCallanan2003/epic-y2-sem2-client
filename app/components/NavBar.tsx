import { DrawerTrigger } from "@/components/ui/drawer";
import { Bike, Menu } from "lucide-react";

export default function NavBar() {
  return (
    <div className="w-full h-[100px] px-8 flex justify-between align-center items-center">
      {/* <div className="w-[50px] h-[50px]"></div> */}
      <div className="flex items-center gap-2">
        <Bike size={40} />
        <h1 className="text-2xl font-medium">CycleSentry</h1>
      </div>
      <DrawerTrigger>
        <Menu size={40} />
      </DrawerTrigger>
    </div>
  );
}
