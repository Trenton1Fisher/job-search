import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const session = await getSession();
  return <section className="h-screen py-32"></section>;
}
