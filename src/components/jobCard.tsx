'use client'
import { JobCardType } from '../../types/apiFetchingTypes'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  isJobInLocalStorage,
  DeleteLocalStorage,
  SaveLocalStorage,
} from '@/utils/localStorage'

interface JobCardProps {
  job: JobCardType
}

export default function JobCard({ job }: JobCardProps) {
  const [isSaved, setIsSaved] = useState(isJobInLocalStorage(job.jobId))
  const initialSearchParams = useSearchParams()
  const newSearchParams = new URLSearchParams(initialSearchParams)
  newSearchParams.delete('jobId')
  const router = useRouter()

  useEffect(() => {
    const isJobSaved = isJobInLocalStorage(job.jobId)
    setIsSaved(isJobSaved)
  }, [job.jobId])

  function handleSavingJob() {
    if (!job.jobId) {
      return
    }
    if (!isSaved) {
      SaveLocalStorage(job.jobId)
    } else {
      DeleteLocalStorage(job.jobId)
    }
    setIsSaved(!isSaved)
  }

  return (
    <div className="bg-white border-b p-2 mb-4 relative cursor-pointer">
      <Image
        src={isSaved ? '/filledbook.png' : '/unfilledbook.png'}
        height={25}
        width={25}
        alt="BookMark Job"
        className="absolute top-0 right-2 cursor-pointer transform transition-transform duration-300
        hover:scale-110"
        onClick={handleSavingJob}
      />
      <div
        onClick={() => router.push(`/?${newSearchParams}&jobId=${job.jobId}`)}
      >
        <h2 className="text-xl font-semibold">{job.jobTitle}</h2>
        <p className="text-sm mb-3">
          {job.employerName} • {job.locationName}
        </p>
        <div className="flex justify-between items-center">
          <div>
            {job.minimumSalary && job.maximumSalary ? (
              <p className="text-gray-700 text-sm mb-1">
                Salary: ${job.minimumSalary} - ${job.maximumSalary}
              </p>
            ) : (
              <p className="text-sm">Pay Not Given</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
