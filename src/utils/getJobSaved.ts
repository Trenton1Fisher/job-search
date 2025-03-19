'use server'

import { sql } from '@vercel/postgres'

export async function getIsJobSaved(user: string, jobId: number) {
  if (!user || !jobId) {
    return false
  }

  try {
    const { rows } =
      await sql`SELECT * FROM job_accounts WHERE Account_Id = ${user} AND Job_id = ${jobId};`
    return rows.length > 0
  } catch (error) {
    console.error('Error querying database:', error)
    return false
  }
}
