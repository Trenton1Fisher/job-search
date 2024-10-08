'use server'

import type { HighlightedJob, JobData } from '../types/apiFetchingTypes'

export async function jobSearchHandler(
  params: Record<string, string | string[] | undefined>
): Promise<JobData | string | undefined> {
  if (!params) {
    return 'error'
  }

  if (params === undefined) {
    return 'error'
  }

  if (
    !params ||
    (Object.keys(params).length === 1 &&
      'distance' in params &&
      params['distance'] === '50')
  ) {
    return 'error'
  }

  let url = 'https://www.reed.co.uk/api/1.0/search?'

  Object.entries(params).forEach(([key, value]) => {
    if (key !== undefined && value !== undefined && value !== null) {
      if (key === 'page') {
        return
      }
      if (key === 'jobType') {
        url += `${String(value)}=${encodeURIComponent(String(true))}&`
      } else {
        url += `${key}=${encodeURIComponent(String(value))}&`
      }
    }
  })
  url += `resultsToTake=8`
  if (params['page']) {
    const pageValue = parseInt(params['page'] as string)
    const skip = (pageValue - 1) * 8
    url += `&resultsToSkip=${encodeURIComponent(String(skip))}`
  }

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

export async function getSingleJob(
  id: string | undefined
): Promise<HighlightedJob | undefined> {
  if (id === undefined) {
    console.log('id failed')
    return
  }
  try {
    const jobResponse = await fetch(
      `https://www.reed.co.uk/api/1.0/jobs/${id}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Basic ${btoa(`${process.env.SEARCH_API_KEY}:`)}`,
        },
      }
    )

    const jobData = await jobResponse.json()
    return jobData as HighlightedJob
  } catch (error) {
    console.error('Error fetching job data:', error)
    return undefined
  }
}
