'use client'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useActionState } from "react"
import * as actions from "@/actions"

const Page = () => {

  const [ShowFormErrorMessage,formFieldRequiredMessage] = useActionState(actions.createSnippet,{message:""})

  return (
    <form action={formFieldRequiredMessage}>
      <div>
        <div>
          <h1 className="text-3xl font-bold">Create new snippet</h1>
        </div>
        <div className="mt-4">
        <Label>Title:</Label>
        </div>
        <Input type="text" name="title" id="title"/>
      </div>
      <div className="mt-4">
        <Label>Code:</Label>
        <Textarea name="code" id="code"/>
      </div>
      <div className="mt-4">
      {ShowFormErrorMessage.message && <div className="bg-red-400 p-2 rounded font-medium text-xl text-center text-lime-50 mb-2 border-2 border-red-600">{ShowFormErrorMessage.message}**</div>}
      <Button type="submit">New</Button>
      <Link href={"/"} className="mx-3"><Button>Back</Button></Link>
      </div>
    </form>
  )
}

export default Page
