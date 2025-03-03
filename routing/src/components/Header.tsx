"use client";
import Link from "next/link";
import { useRouter } from "@/foodies/node_modules/next/navigation";
export default function Header() {
  const router = useRouter();
  return (
    <nav className="sm:text-red-400 md:text-green-400 lg:text-white text-gray-400 w-screen flex justify-between p-2 h-12 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <p className="font-bold text-lg">
        <Link href="/">Home</Link>
      </p>
      <div className="flex gap-x-2 font-semibold space-x-3">
        <p>
          <Link href="performance">Performance</Link>
        </p>
        <button type="button" onClick={() => router.push("/reliability")}>
          Reliability
        </button>
      </div>
    </nav>
  );
}
