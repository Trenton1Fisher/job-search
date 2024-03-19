'use client'

import { useState } from 'react'
import { DollarSignIcon } from '../ui/svgs'
import { HighlightedJob } from '@/types/apiFetchingTypes'
import { useRouter } from 'next/navigation'
import { Claims } from '@auth0/nextjs-auth0'

interface SavedJobsProps {
  jobData: PromiseSettledResult<HighlightedJob | undefined>[] | null | undefined
  user: Claims
}

export default function SavedJobs({ jobData, user }: SavedJobsProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleJobDelete(jobId: number) {
    setLoading(true)
    try {
      const res = await fetch(`api/delete?user=${user.sub}&job=${jobId}`, {
        //Vercel db only updates on get requests at the time of creating, current error that needs resolved on their end
        method: 'GET',
        headers: {
          'Content-type': 'application/json;',
        },
      })
      if (res.ok) {
        setLoading(false)
        router.refresh()
      }
    } catch (error) {
      setLoading(false)
      return
    }
    setLoading(false)
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      {jobData ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <h1 className="font-semibold text-3xl text-center col-span-full">
            Your Saved Jobs
          </h1>
          {jobData.map((job, index) => {
            if (job.status === 'fulfilled' && job.value) {
              const jobData = job.value
              return (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg border relative p-4"
                >
                  <span className="absolute top-0 right-0 bg-gray-200 px-2 py-1 text-xs">
                    {jobData.applicationCount} Applicants
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {jobData.jobTitle}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Posted {jobData.datePosted} by {jobData.employerName}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      Expires {jobData.expirationDate}
                    </p>
                    <div className="flex items-center text-gray-500">
                      <DollarSignIcon />
                      <span className="ml-2">
                        {jobData.minimumSalary} - {jobData.maximumSalary}{' '}
                        {jobData.currency}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => handleJobDelete(jobData.jobId)}
                      className="text-red-600 hover:underline"
                      disabled={loading}
                    >
                      {loading ? 'Deleting...' : 'Delete'}
                    </button>
                    <span className="mx-2">|</span>
                    <a
                      className="text-blue-600 hover:underline"
                      href={`/job/${jobData.jobId}`}
                    >
                      View Full Job Details
                    </a>
                  </div>
                </div>
              )
            } else {
              return null
            }
          })}
        </div>
      ) : (
        <div>No Saved Jobs Found</div>
      )}
    </div>
  )
}
