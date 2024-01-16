'use client'

import { getSavedJobs } from '@/utils/savedJobsHelper'
import { useEffect, useState } from 'react'
import { HighlightedJob } from '../../../types/apiFetchingTypes'
import Link from 'next/link'
import Image from 'next/image'
import { DeleteLocalStorage } from '@/utils/localStorage'
import { SpinnerCircularFixed } from 'spinners-react'

export default function Home() {
  const [savedJobs, setSavedJobs] = useState<HighlightedJob[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobs = await getSavedJobs()

        if (jobs) {
          const jobData = jobs
            .filter(result => result.status === 'fulfilled')
            .map(result => result.value)

          setSavedJobs(jobData)
        }
      } catch (error) {
        console.error('Error fetching saved jobs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  function handleRemoveSavedJob(id: number | null) {
    if (!id) {
      return
    }
    DeleteLocalStorage(id)
  }

  return (
    <section className="h-screen mt-16">
      <h1 className="text-4xl mt-12 font-bold">Your Saved Jobs</h1>
      <h2 className="text-lg text-gray-500">{savedJobs.length} Jobs</h2>
      {loading ? (
        <div className="flex items-center justify-center mt-[60px]">
          <SpinnerCircularFixed
            size={150}
            thickness={100}
            color="black"
            speed={300}
          />
        </div>
      ) : (
        <div className="container mx-auto mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {savedJobs && savedJobs.length > 0 ? (
            <>
              {savedJobs.map((job, idx) => (
                <div
                  className="bg-white border-b p-2 mb-4 relative cursor-pointer rounded-md shadow-md"
                  key={idx}
                >
                  <Image
                    src={'/filledbook.png'}
                    height={25}
                    width={25}
                    alt="Bookmarked Job"
                    className="absolute top-0 right-2 cursor-pointer transform transition-transform duration-300 hover:scale-110"
                    onClick={() => handleRemoveSavedJob(job.jobId)}
                  />
                  <Link href={`/job/${job.jobId}`}>
                    <div>
                      <h2 className="text-xl font-semibold">{job.jobTitle}</h2>
                      <p className="text-sm mb-3">
                        {job.employerName} • {job.locationName}
                      </p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-gray-700 text-sm mb-1">
                            Application Deadline: {job.expirationDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          ) : (
            <div className="text-center">No Saved Jobs Found</div>
          )}
        </div>
      )}
    </section>
  )
}
