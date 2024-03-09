"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const loadingContainer = {
  width: "2rem",
  height: "1rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "end",
  paddingBottom: "2px",
};

const loadingCircle = {
  display: "block",
  width: "0.5rem",
  height: "0.5rem",
  backgroundColor: "white",
  borderRadius: "0.25rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "1%",
  },
  end: {
    y: "-80%",
  },
};

const loadingCircleTransition = {
  duration: 1,
  repeat: Infinity,
  yoyo: Infinity,
  ease: "easeInOut",
};

export default function ChatPage() {
  const [messages, setMessages] = useState<
    { sender: string; message: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [responding, setResponding] = useState(false);

  async function addMessage(message: string) {
    setMessages((previous) => {
      return [...previous, { sender: "user", message: message }];
    });

    setResponding(true);

    setTimeout(() => {
      setResponding(false);
      setMessages((previous) => {
        return [...previous, { sender: "agent", message: "response" }];
      });
    }, 3000);
  }

  return (
    <div className="h-full w-full px-6 flex flex-col align-center items-center">
      <h1 className="md:text-5xl text-2xl pb-6 font-bold">CycleSentry Chat</h1>
      <div className="px-6 md:h-[580px] overflow-auto h-[500px] border py-6 rounded-lg border-2 w-full flex flex-col">
        {messages.map((message, index) => (
          <Message
            key={message.sender + index.toString()}
            system={message.sender == "agent"}
            message={message.message}
          />
        ))}
        {responding ? (
          <div className={"w-full py-2 flex justify-start"}>
            <div className="flex flex-col justify-start">
              <div className={"px-4 py-2 border rounded-lg"}>
                <motion.div
                  style={loadingContainer}
                  variants={loadingContainerVariants}
                  initial="start"
                  animate="end"
                >
                  <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                  />
                  <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                  />
                  <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="w-full flex justify-between h-[50px] bg-white rounded-lg">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Message"
          className="bg-transparent px-4 text-lg h-full w-full text-black justify-center items-center"
        ></input>
        <button
          onClick={() => {
            addMessage(input);
            setInput("");
          }}
          className="px-4 h-full bg-black w-[140px] rounded-lg text-lg font-medium"
        >
          Send
        </button>
      </div>
    </div>
  );
}

function Message({ system, message }: { system: boolean; message: string }) {
  return (
    <div
      className={
        system
          ? "w-full py-2 flex justify-start"
          : "w-full py-2 flex justify-end"
      }
    >
      <div className="flex flex-col justify-start">
        <div
          className={
            system
              ? "px-4 py-1 border rounded-lg"
              : "px-4 py-1 border bg-white text-black rounded-lg"
          }
        >
          {message}
        </div>
      </div>
    </div>
  );
}
