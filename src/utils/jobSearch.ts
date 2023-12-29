'use server'

export type JobSearchParams = {
  keywords?: string
  locationName?: string
  distanceFromLocation?: number
  permanent?: boolean
  contract?: boolean
  temp?: boolean
  partTime?: boolean
  fullTime?: boolean
  minimumSalary?: number
  resultsToTake?: number
  resultsToSkip?: number
}

export async function jobSearchHandler(params: JobSearchParams) {
  let url = 'https://www.reed.co.uk/api/1.0/search?'

  Object.entries(params).forEach(([key, value]) => {
    if (key !== undefined && value !== undefined && value !== null) {
      url += `${key}=${encodeURIComponent(String(value))}&`
    }
  })

  // Remove the trailing '&' if it exists
  url = url.replace(/&$/, '')

  try {
    console.log(url)
  } catch (error) {
    return 'error'
  }
}
