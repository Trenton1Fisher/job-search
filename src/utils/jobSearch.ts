'use server'

import type { JobData } from '../../types/apiFetchingTypes'

export async function jobSearchHandler(
  params: Record<string, string | string[] | undefined>
): Promise<JobData | string | undefined> {
  if (!params) {
    return 'error'
  }

  let url = 'https://www.reed.co.uk/api/1.0/search?'

  Object.entries(params).forEach(([key, value]) => {
    if (key !== undefined && value !== undefined && value !== null) {
      if(key === 'page'){
        return
      }
      if (key === 'jobType') {
        url += `${String(value)}=${encodeURIComponent(String(true))}&`
      }
      else {
        url += `${key}=${encodeURIComponent(String(value))}&`
      }
    }
  })
  url += `resultsToTake=20`
  if(params['page']){
    const pageValue = parseInt(params['page'] as string)
    const skip = (pageValue - 1) * 20
    url+= `&resultsToSkip=${encodeURIComponent(String(skip))}`
  }

 console.log(url)

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

export async function getSingleJob(id: string | undefined) {
  if (id === undefined) {
    return
  }
  try {
    const job = await fetch(`https://www.reed.co.uk/api/1.0/jobs/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${btoa(`${process.env.SEARCH_API_KEY}:`)}`,
      },
    })

    return job.json()
  } catch (error) {
    return 'error'
  }
}
