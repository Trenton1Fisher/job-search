'use client'

import { useState } from 'react'
import type { HighlightedJob } from '../../types/apiFetchingTypes'
import DOMPurify from 'isomorphic-dompurify'
import { Claims } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/navigation'

interface HighlightedJobProps {
  highlightedJob: HighlightedJob
  user: Claims | null | undefined
  saved: boolean
}

export default function HiglightedJobComponent({
  highlightedJob,
  user,
  saved,
}: HighlightedJobProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [isSaved, setIsSaved] = useState(saved)
  const sanitizedDescription = DOMPurify.sanitize(
    highlightedJob?.jobDescription as string
  )

  async function handleJobSave() {
    setLoading(true)
    //Vercel db only updates on get requests at the time of creating, current error that needs resolved on their end
    if (user) {
      const res = await fetch(
        `/api/save?user=${user.sub}&job=${highlightedJob.jobId}`,
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json;',
          },
        }
      )
      if (res.ok) {
        setIsSaved(true)
        setLoading(false)
      }
    }
    setLoading(false)
  }

  async function handleJobDelete() {
    setLoading(true)
    if (user) {
      try {
        const res = await fetch(
          `/api/delete?user=${user.sub}&job=${highlightedJob.jobId}`,
          {
            //Vercel db only updates on get requests at the time of creating, current error that needs resolved on their end
            method: 'GET',
            headers: {
              'Content-type': 'application/json;',
            },
          }
        )
        if (res.ok) {
          setLoading(false)
          setIsSaved(false)
          router.refresh()
        }
      } catch (error) {
        console.log(error)
        setLoading(false)
        return
      }
    }
    setLoading(false)
  }

  return (
    <div className="job-details-container px-4 lg:px-0 lg:w-1/2 py-4 md:py-0 md:ml-0">
      <button className="text-xl" onClick={() => router.back()}>
        &lt;- Return
      </button>
      <p className="job-title font-bold text-3xl md:text-4xl lg:text-5xl mt-8">
        {highlightedJob.jobTitle}
      </p>
      <p className="job-meta text-sm text-gray-500 mt-2">
        {highlightedJob.employerName} • {highlightedJob.locationName}
      </p>
      <div className="apply-links flex flex-col sm:flex-row items-start mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
        {highlightedJob.jobUrl && (
          <a
            href={highlightedJob.jobUrl}
            target="_blank"
            className="apply-link border py-2 px-4 rounded-md text-center inline-block bg-gray-200 text-black hover:bg-gray-300"
          >
            Apply Through Reed.Uk
          </a>
        )}
        {highlightedJob.externalUrl && (
          <a
            href={highlightedJob.externalUrl}
            target="_blank"
            className="apply-link border py-2 px-4 rounded-md text-center inline-block bg-gray-200 text-black hover:bg-gray-300"
          >
            Apply Through Company
          </a>
        )}
        {user && (
          <button
            onClick={() => (isSaved ? handleJobDelete() : handleJobSave())} // Disable the button only when loading is true
            className={`border py-2 px-4 rounded-md text-center inline-block ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gray-200 hover:bg-gray-300'
            } flex items-center`}
          >
            {isSaved ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V2.5A1.5 1.5 0 0010.5 1h-1A1.5 1.5 0 008 2.5V4a8 8 0 018 8h1.5a1.5 1.5 0 000-3h-3a1.5 1.5 0 00-1.5 1.5V14a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5V9.5A3.5 3.5 0 0012.5 6h-1A3.5 3.5 0 008 9.5V11a8 8 0 01-4 6.928z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14.828V5a2 2 0 00-2-2H7a2 2 0 00-2 2v9.828l7 4.666 7-4.666z"
                />
              </svg>
            )}
            <span>
              {isSaved ? 'Unsave Job' : loading ? 'Saving...' : 'Save Job'}
            </span>
          </button>
        )}
      </div>
      <h2 className="section-title font-semibold text-2xl md:text-3xl mt-8">
        About The Role
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 my-4">
        <div className="info-item">
          <p className="font-bold">Date Posted</p>
          <p>{highlightedJob.datePosted}</p>
        </div>
        <div className="info-item">
          <p className="font-bold">Application Deadline</p>
          <p>{highlightedJob.expirationDate}</p>
        </div>
        <div className="info-item">
          <p className="font-bold">Expected Salary</p>
          {highlightedJob.salary !== null ? (
            <p>{highlightedJob.salary}</p>
          ) : (
            <p>Pay Not Provided</p>
          )}
        </div>
        <div className="info-item mt-2">
          <p className="font-bold">Job Type</p>
          <p>{highlightedJob.partTime ? 'Part Time' : 'Full Time'}</p>
        </div>
        <div className="info-item mt-2">
          <p className="font-bold">Contract Type</p>
          <p>{highlightedJob.contractType}</p>
        </div>
        <div className="info-item mt-2">
          <p className="font-bold">Total Applicants</p>
          <p>{highlightedJob.applicationCount}</p>
        </div>
      </div>

      <div
        className="jobInfo-Container text-left mt-4"
        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
      />
    </div>
  )
}
