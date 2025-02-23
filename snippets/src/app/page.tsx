import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany()
  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex items-center justify-between mt-6">
        <p className="font-semibold text-lg">Snippets</p>
        <Link href={"./snippet/new"}>
          <Button>New</Button>
        </Link>
      </div>
      <div className="mt-8">
        {
          snippets.map((snippet)=>(
            <div key={snippet.id} className="flex justify-between items-center bg-slate-200 my-2 p-4 rounded-lg">
              <h1 className="text-md font-bold">{snippet.title}</h1>
              <Link href={`/snippet/${snippet.id}`}>
                <Button>View</Button>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
