"use client";
import { useRouter } from "@/foodies/node_modules/next/navigation";
import { useEffect, useState } from "react";

const SnippetNotFound = () => {
  const router = useRouter();
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p className="text-red-600 text-4xl">404 Page not found</p>
      <p className="text-green-400 text-2xl mt-6">
        We are routing to home in {timer} seconds
      </p>
    </div>
  );
};

export default SnippetNotFound;
