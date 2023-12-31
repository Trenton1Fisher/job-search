'use client'
import { init } from 'next/dist/compiled/webpack/webpack'
import { JobCardType } from '../../types/apiFetchingTypes'
import { useSearchParams, useRouter } from 'next/navigation'

interface JobCardProps {
  job: JobCardType
}

export default function JobCard({ job }: JobCardProps) {
  const initialSearchParams = useSearchParams()
  const newSearchParams = new URLSearchParams(initialSearchParams)
  newSearchParams.delete('jobId')
  const router = useRouter()

  return (
    <div className="bg-white border-b p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">{job.jobTitle}</h2>
      <p className="text-gray-600">{job.employerName}</p>
      <p className="text-gray-600 mb-2">{job.locationName}</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-700 mb-1">
            Salary: ${job.minimumSalary} - ${job.maximumSalary}
          </p>
          <p className="text-gray-700 mb-1">Applications: {job.applications}</p>
        </div>
        <button
          onClick={() => router.push(`/?${newSearchParams}&jobId=${job.jobId}`)}
          className="text-blue-500 hover:underline"
        >
          View Details
        </button>
      </div>
    </div>
  )
}
