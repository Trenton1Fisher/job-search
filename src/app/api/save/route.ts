import { sql } from "@vercel/postgres";

//vercel db for some reason only accepts get requests at the time of creation
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('user')
  const jobId = searchParams.get('job')

  if (!userId || !jobId) {
    return new Response(JSON.stringify({ added: false }))
  }

  try {
    await sql`INSERT INTO job_accounts (Account_id, Job_id) VALUES (${userId}, ${jobId});`;
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ added: false }))
  }

  return new Response(JSON.stringify({ added: true }));
}
