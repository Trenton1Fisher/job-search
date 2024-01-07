'use client'

import { getSavedJobs } from '@/utils/savedJobsHelper'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobs = await getSavedJobs()
        // Assuming getSavedJobs returns an array of job data

        if (jobs) {
          // Handle the jobs data, e.g., set it to state
          console.log(jobs)
        }
      } catch (error) {
        console.error('Error fetching saved jobs:', error)
      } finally {
        // Whether the promise is fulfilled or rejected, update the loading state
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return <div>{loading && <Skeleton count={5} />}</div>
}
