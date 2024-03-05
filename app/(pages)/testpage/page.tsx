"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function TestPage() {
  const [messages, setMessages] = useState<
    { content: string; sender: string }[]
  >([]);
  const [inputOne, setInputOne] = useState<string>("");
  const [inputTwo, setInputTwo] = useState<string>("");

  console.log(messages);

  return (
    <div className="flex flex-col p-20 h-full w-full items-center">
      <h1 className="text-4xl font-bold ">Testing redux</h1>
      <div className="flex ">
        <div className="p-20 h-full w-full flex flex-col justify-center items-center">
          <div className="border h-[600px] w-[500px] w-full">
            {messages.map((message) => (
              <Message
                key={message.content + message.sender + "0"}
                sent={message.sender == "one"}
                content={message.content}
              ></Message>
            ))}
          </div>
          <div className="w-[500px] h-[50px] flex">
            <input
              value={inputOne}
              onChange={(value) => setInputOne(value.target.value)}
              id="one"
              className="w-[400px] h-[50px] px-4 border"
              type="text"
            ></input>
            <Button
              onClick={() => {
                setMessages((prevState) => [
                  ...prevState,
                  { content: inputOne, sender: "one" },
                ]);
                setInputOne("");
              }}
              className="w-[100px] h-[50px] px-4 text-md"
            >
              Send
            </Button>
          </div>
        </div>
        <div className="p-20 h-full w-full flex flex-col justify-center items-center">
          <div className="border h-[600px] w-[500px] w-full">
            {messages.map((message) => (
              <Message
                key={message.content + message.sender + "1"}
                sent={message.sender == "two"}
                content={message.content}
              ></Message>
            ))}
          </div>
          <div className="w-[500px] h-[50px] flex">
            <input
              value={inputTwo}
              onChange={(value) => setInputTwo(value.target.value)}
              id="two"
              className="w-[400px] h-[50px] px-4 border"
              type="text"
            ></input>
            <Button
              onClick={() => {
                setMessages((prevState) => [
                  ...prevState,
                  { content: inputTwo, sender: "two" },
                ]);
                setInputTwo("");
              }}
              className="w-[100px] h-[50px] px-4 text-md"
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Message({ sent, content }: { sent: boolean; content: string }) {
  if (sent) {
    return <div className="p-4 text-md font-medium">{content}</div>;
  } else {
    return <div className=" p-4 text-md font-medium text-right">{content}</div>;
  }
}
