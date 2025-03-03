import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "@/foodies/node_modules/next/navigation";

export default async function userUpdate({
  params,
}: {
  params: { id: string };
}) {
  const snippetUpdate = await prisma.snippet.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  async function updateUserData(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    await prisma.snippet.update({
      where: {
        id: parseInt(params.id),
      },
      data: {
        title,
        code,
      },
    });
    redirect(`/snippet/${snippetUpdate?.id}`);
  }

  return (
    <div>
      <p className="text-4xl font-bold text-gray-700">
        Update snippet with userId {snippetUpdate?.id}
      </p>
      <form action={updateUserData}>
        <div className="my-6">
          <Label className="text-xl">Title</Label>
          <Input
            defaultValue={snippetUpdate?.title}
            className="mt-2 font-semibold"
            name="title"
          />
        </div>
        <div className="">
          <Label className="text-xl">Code</Label>
          <Textarea
            defaultValue={snippetUpdate?.code}
            rows={6}
            className="mt-2 font-semibold"
            name="code"
          />
        </div>
        <div className="mt-4">
          <Button type="submit">Update</Button>
        </div>
      </form>
    </div>
  );
}
