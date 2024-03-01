import { sql } from "@vercel/postgres";

interface RouteProps {
  job_id: string;
  account_id: string;
}

export async function POST(
  request: Request,
  { job_id, account_id }: RouteProps
) {
  const client = await sql.connect();
  console.log(job_id);
  if (!job_id || !account_id) {
    client.release();
    return new Response(JSON.stringify({ added: false }));
  }

  try {
    await sql`INSERT INTO job_accounts (account_id, job_id) VALUES (${account_id}, ${job_id});`;
  } catch (error) {
    client.release();
    console.log(error);
  }
  client.release();
  return new Response(JSON.stringify({ added: true }));
}
