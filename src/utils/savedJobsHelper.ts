'use server'
import { sql } from '@vercel/postgres'
import { getSingleJob } from './jobSearch'

export async function getSavedJobs(user: string) {
  if (!user) {
    return undefined
  }

  try {
    const { rows } =
      await sql`SELECT Job_Id FROM job_accounts WHERE Account_Id = ${user}`
    const jobIds = rows.map(row => row.job_id)
    const jobPromises = jobIds.map(jobId => getSingleJob(jobId))
    const settledJobData = await Promise.allSettled(jobPromises)
    return settledJobData
  } catch (error) {
    return null
  }
}
