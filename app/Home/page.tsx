import prisma from "../util/prisma";


export default async function Home() {
  const user = await prisma.user.findUnique({
    where: {
      name: "Fritz"
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Fritz</h1>
      <p>

        {JSON.stringify(user, null, 2)}

      </p>
    </main>
  );
}
