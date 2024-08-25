'use client'

import { useState } from 'react'
import type { HighlightedJob } from '../../types/apiFetchingTypes'
import DOMPurify from 'isomorphic-dompurify'
import { Claims } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

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
    <>
      <div className="relative w-full hidden md:block md:mt-[-40px]">
        <img
          src="/bradcam.png"
          alt="job title banner"
          className="w-full h-auto object-cover"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white p-4">
          {highlightedJob.jobTitle}
        </h1>
      </div>
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-[1fr_350px] gap-6">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-xl border p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <button
                      className="text-xl mb-4"
                      onClick={() => router.back()}
                    >
                      &lt;- Return
                    </button>
                    {user && (
                      <button
                        aria-label={isSaved ? 'Unfavorite' : 'Favorite'}
                        className={`absolute top-5 right-5 ${
                          isSaved ? 'text-green-500' : 'text-gray-500'
                        }`}
                        onClick={isSaved ? handleJobDelete : handleJobSave}
                      >
                        <svg
                          className="w-6 h-6"
                          fill={isSaved ? 'currentColor' : 'none'}
                          stroke={isSaved ? 'currentColor' : 'gray'}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    )}
                    <h1 className="text-xl font-bold">
                      {highlightedJob.jobTitle}
                    </h1>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {highlightedJob.locationName}
                      <svg
                        className="w-4 h-4 ml-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {highlightedJob.fullTime && 'Full-time'}
                      {highlightedJob.fullTime && highlightedJob.partTime
                        ? ', '
                        : ''}
                      {highlightedJob.partTime && 'Part-time'}
                      {highlightedJob.fullTime || highlightedJob.partTime
                        ? highlightedJob.contractType
                          ? ', '
                          : ''
                        : ''}
                      {highlightedJob.contractType || 'No job type specified'}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="space-y-6"
                dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-xl border p-6">
              <h2 className="text-lg font-semibold mb-4">Job Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Published on:</span>
                  <span>{highlightedJob.datePosted}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Application Deadline:</span>
                  <span>{highlightedJob.expirationDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Applicants:</span>
                  {highlightedJob.applicationCount ? (
                    <span>{highlightedJob.applicationCount}</span>
                  ) : (
                    '0'
                  )}
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Salary:</span>
                  {highlightedJob.salary ? (
                    <span>{highlightedJob.salary}</span>
                  ) : (
                    'Salary Not Provided'
                  )}
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Location:</span>
                  <span>{highlightedJob.locationName}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl border p-6">
              <div className="">
                <h2 className="text-lg font-semibold mb-4">Apply</h2>
              </div>
              <div className="space-y-2">
                {highlightedJob.externalUrl && (
                  <a
                    href={highlightedJob.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-700"
                  >
                    <span className="mr-1">Apply Through Company Website</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="5px"
                      width="15"
                      height="30"
                      viewBox="0 15 30 30"
                    >
                      <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path>
                    </svg>
                  </a>
                )}
                {highlightedJob.jobUrl && (
                  <a
                    href={highlightedJob.jobUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-700"
                  >
                    <span className="mr-1">Apply Through Reed.Uk</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="5px"
                      width="15"
                      height="30"
                      viewBox="0 15 30 30"
                    >
                      <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
