import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import Link from "next/link"

const page = () => {

    async function createSnippet(formData:FormData) {
        "use server"
        const title=formData.get("title") as string
        const code=formData.get("code") as string

        const snippet = await prisma.snippet.create({
            data:{
                title,
                code
            }
        })
        console.log("My snippet is: ",snippet)
        redirect("/")
    }

  return (
    <form action={createSnippet}>
      <div>
        <div>
          <h1 className="text-3xl font-bold">Create new snippet</h1>
        </div>
        <div className="mt-4">
        <Label>Title:</Label>
        </div>
        <Input type="text" name="title" id="title" required/>
      </div>
      <div className="mt-4">
        <Label>Code:</Label>
        <Textarea name="code" id="code" required/>
      </div>
      <div className="mt-4">
      <Button type="submit">New</Button>
      <Link href={"/"} className="mx-3"><Button>Back</Button></Link>
      </div>
    </form>
  )
}

export default page
