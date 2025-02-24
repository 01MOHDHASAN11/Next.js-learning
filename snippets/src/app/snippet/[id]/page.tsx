import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"
// import Loading from "./loading"

function snippetDelay(delay:number){
  return new Promise((resolve)=>{setTimeout(resolve,delay)})
}

export default async function SnippetDetails({params}:{params:{id:string}}){
    const snippetUser = await prisma.snippet.findUnique({
        where:{id:parseInt(params.id)}
    })

    if(!snippetUser){
      notFound()
    }

    await snippetDelay(3000)
    
    async function deleteSnippet(){
      "use server"
      if(typeof(snippetUser?.id)==="number"){
      await prisma.snippet.delete({
        where:{
          id:snippetUser.id
        }
      })
      redirect("/")
      }
    }

    async function editSnippet(){
      "use server"
      redirect(`/snippet/${snippetUser?.id}/update`)
    }
    
  return (
    <div>
        <div className="flex justify-between my-2">
        <h1 className="text-3xl font-sans font-bold">Snippet id: {snippetUser?.id}</h1>
        <Button className="px-6 text-lg"><Link href={"/"}>Back</Link></Button>
        </div>
        <h1 className="text-xl font-serif font-semibold">Title: {snippetUser?.title}</h1>
        <div className="rounded-2xl bg-lime-600 font-semibold text-white p-6 my-4 relative">
          <div className="">
            <pre>{snippetUser?.code}</pre>
        </div>
        <div className="absolute top-2 right-2 p-2">
          <div className="flex">
          <form action={editSnippet}>
            <Button className="mx-2 bg-white text-black hover:bg-white hover:text-black" type="submit">Edit</Button>
          </form>
          <form action={deleteSnippet}>
           <Button className="bg-white text-black hover:bg-white hover:text-black" type="submit">Delete</Button>
          </form>
          </div>
        </div>
        </div>
    </div>
  )
}
