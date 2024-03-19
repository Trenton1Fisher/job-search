'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { JobData } from '../../types/apiFetchingTypes'
import Link from 'next/link'
import { DollarSignIcon, Map } from '@/components/ui/svgs'
import { Pagination } from '@nextui-org/react'

interface JobFeedProps {
  jobResults: string | JobData | undefined
  searchParams: Record<string, string | undefined>
}

export default function JobFeed({ jobResults, searchParams }: JobFeedProps) {
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams['page'] ?? '1', 10)
  )
  const router = useRouter()

  function handlePaginationClick(page: number) {
    let url = '/search?'

    Object.entries(searchParams).forEach(([key, value]) => {
      if (key !== undefined && value !== '' && key !== 'page') {
        url += `${key}=${encodeURIComponent(String(value))}&`
      }
    })

    url += `page=${encodeURIComponent(String(page))}`
    router.push(url)
  }

  return (
    <>
      {typeof jobResults === 'string' ? (
        <p>{jobResults}</p>
      ) : jobResults === undefined ? (
        <p>No search results found. Please try again.</p>
      ) : (
        <div className="">
          <p className="font-bold text-2xl text-center mb-2">
            {jobResults.totalResults} Jobs Found
          </p>
          {jobResults.results.map(result => (
            <div
              key={result.jobId}
              className="w-full bg-white shadow-md rounded-lg border mx-auto mb-4 relative"
            >
              {/* Position total applicants count in the top right */}
              <span className="absolute max-[540px]:hidden top-0 right-0 bg-gray-200 px-2 py-1 text-xs">
                {result.applications} Applicants
              </span>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {result.jobTitle}
                </h3>
                <p className="text-gray-600 text-sm">
                  Posted {result.date} by {result.employerName}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  Expires {result.expirationDate}
                </p>
                <div className="flex items-center text-gray-600 mb-1">
                  <Map />
                  <span className="ml-2">{result.locationName}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <DollarSignIcon />
                  <span className="ml-2">
                    {result.minimumSalary} - {result.maximumSalary}{' '}
                    {result.currency}
                  </span>
                </div>
              </div>
              <div className="customSmall:absolute bottom-0 right-0 p-2 customSmall:p-4">
                <Link
                  href={`/job/${result.jobId}`}
                  className="text-blue-600 hover:underline"
                >
                  View Full Job Details -&gt;
                </Link>
              </div>
            </div>
          ))}
          {jobResults.totalResults && (
            <div className="flex items-center justify-center">
              <Pagination
                key={1}
                total={Math.ceil(jobResults.totalResults / 12)}
                initialPage={currentPage}
                size={'md'}
                className="mb-4"
                onChange={value => handlePaginationClick(value)}
              />
            </div>
          )}
        </div>
      )}
    </>
  )
}
