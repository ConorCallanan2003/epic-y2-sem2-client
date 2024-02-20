"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bike, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { useState } from "react";

// const Loader = styled.div`
//   border: 3px solid #f3f3f3; /* Light grey */
//   border-top: 3px solid #3c3c3c; /* Blue */
//   border-radius: 50%;
//   width: 15px;
//   height: 15px;
//   animation: spin 0.5s linear infinite;

//   @keyframes spin {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;

function Loader() {
  return (
    <div className="border-2 border-white border-t-0 border-l-0 rounded-full w-[15px] h-[15px] animate-spin"></div>
  );
}

async function signInWithEmail(email: string, password: string) {
  // const { data, error } = await supabase.auth.signInWithPassword({
  //   email: email,
  //   password: password,
  // });

  // if (error) return error;
  return "success";
}

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = () => {
    setLoading(true);
    signInWithEmail(email, password).then((result) => {
      // if (result === "success") {
      setTimeout(() => {
        const options = [
          () => {
            setError("Incorrect password");
            setLoading(false);
          },
          () => {
            window.sessionStorage.setItem("loggedIn", "true");
            router.push("/");
          },
        ];
        var randomIndex = Math.floor(Math.random() * 2);
        // Step 3: Select the item
        options[randomIndex]();
      }, 1000);

      //   return;
      // }
      // setError(result.message);
    });
  };
  return (
    <div className="flex-col w-full h-screen flex justify-start items-center ">
      <div className="w-3/5 flex flex-col pt-16">
        <div className="flex justify-center pb-4 pt-24">
          <Bike size={130} />
        </div>
        <div
          style={{ fontSize: "24px" }}
          className="font-medium pb-6 text-center  "
        >
          Log in
        </div>
        <Input
          className="mb-2"
          onChange={(e) => {
            setError("");
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Email"
        ></Input>
        <Input
          onChange={(e) => {
            setError("");
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
        ></Input>
        {error ? (
          <div style={{ fontSize: "12px" }} className="text-red-500">
            {error}
          </div>
        ) : null}
        <Button onClick={handleSignIn} className="mt-6" type="submit">
          {loading ? <Loader /> : "Submit"}
        </Button>
      </div>
    </div>
  );
}
