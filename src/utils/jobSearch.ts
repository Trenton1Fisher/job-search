'use server'

import type { JobData } from '../../types/apiFetchingTypes'

export async function jobSearchHandler(
  params: string | string[] | undefined
): Promise<JobData | string | undefined> {
  if (!params) {
    return 'error'
  }
  let url = 'https://www.reed.co.uk/api/1.0/search?'

  Object.entries(params).forEach(([key, value]) => {
    if (key !== undefined && value !== undefined && value !== null) {
      if (key === 'jobType') {
        url += `${String(value)}=${encodeURIComponent(String(true))}&`
      } else {
        url += `${key}=${encodeURIComponent(String(value))}&`
      }
    }
  })
  url += `resultsToTake=10`

  try {
    const jobs = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${btoa(`${process.env.SEARCH_API_KEY}:`)}`,
      },
    })

    return jobs.json()
  } catch (error) {
    return 'error'
  }
}
