import { sql } from '@vercel/postgres'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('user')
  const jobId = searchParams.get('job')

  if (!userId || !jobId) {
    return new Response(JSON.stringify({ added: false }))
  }

  try {
    await sql`DELETE FROM job_accounts WHERE Account_id =${userId} AND Job_id =${jobId};`
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ added: false }))
  }

  return new Response(JSON.stringify({ added: true }))
}
