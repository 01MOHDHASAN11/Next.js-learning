"use server"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "@/foodies/node_modules/next/cache"
import { redirect } from "@/foodies/node_modules/next/navigation"
export async function createSnippet(prevState:{message:string},formData:FormData) {
    const title=formData.get("title")
    const code=formData.get("code") 
    if(!title){
        return {message:"Title is required"}
    }
    if(typeof(title)!="string"){
        return {message:"Title must be string type"}
    }
    if(title.length<5){
        return {message:"Title length must be greater than or equal to five"}
    }
    
    if(!code){
        return {message:"Code is required"}
    }
    if(typeof(code)!="string"){
        return {message:"Code must be string type"}
    }
    if(code.length<5){
        return {message:"Code length must be greater than or equal to five"}
    }
    
    const snippet = await prisma.snippet.create({
        data:{
            title,
            code
        }
    })
    revalidatePath("/")
    redirect("/")
}