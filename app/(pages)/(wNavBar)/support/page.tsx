import { MessagesSquare, Send } from "lucide-react";
import Link from "next/link";

export default function Support() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">Have a problem?</h1>
      <h2 className="text-3xl font-light">We&apos;re sorry to hear it</h2>
      <div className="w-full xl:w-2/3 h-full grid gap-8 place-items-center md:grid-cols-2 pt-8">
        <div className="h-[400px] lg:w-[400px] w-[300px] rounded-lg border-2 border-white flex flex-col items-center">
          <h1 className="pt-6 text-3xl font-bold">Submit form</h1>
          <Send className="h-full" size={160} />
          <Link href={"/support/submit-form"}>
            <button className="border-2 border-white font-medium duration-200 hover:scale-105 hover:bg-white hover:text-black rounded-lg px-4 py-2 mb-6">
              Submit now
            </button>
          </Link>
        </div>

        <div className="h-[400px] lg:w-[400px] w-[300px] rounded-lg border-2 border-white flex flex-col items-center">
          <h1 className="pt-6 text-3xl font-bold">Chat with an agent</h1>
          <MessagesSquare className="h-full" size={160} />
          <Link href={"/support/chat"}>
            <button className="border-2 border-white font-medium duration-200 hover:scale-105 hover:bg-white hover:text-black rounded-lg px-4 py-2 mb-6">
              Chat now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
