'use client'
import JobCard from './jobCard'
import React from 'react'
import type {
  JobData,
  JobCardType,
  HighlightedJob,
} from '../../types/apiFetchingTypes'
import HiglightedJobComponent from './highlightedJob'
import { useRouter, useSearchParams } from 'next/navigation'
import Pagination from './pagination'

interface JobFeedProps {
  SearchJobResults: string | JobData | undefined
  highlightedJob: undefined | HighlightedJob
  page: string | undefined
}

export default function JobFeed({
  SearchJobResults,
  highlightedJob,
  page,
}: JobFeedProps) {
  const router = useRouter()
  const firstPagOption = page !== undefined ? Number(page) - 1 : undefined
  const currentPagoption = page !== undefined ? Number(page) : undefined
  const secondPagOption = page !== undefined ? Number(page) + 1 : undefined
  const initialSearchParams = useSearchParams()
  const newSearchParams = new URLSearchParams(initialSearchParams)

  function handlePaginationButtonClick(option: number | undefined) {
    if (option === undefined) {
      return
    }
    newSearchParams.delete('page')
    newSearchParams.append('page', option.toString())
    router.push(`?${newSearchParams}`)
  }

  return (
    <>
      <div className="flex w-full">
        <div className=" h-screen w-full md:w-1/3 lg:w-1/5 border-r overflow-auto">
          {typeof SearchJobResults === 'object' &&
            SearchJobResults !== null &&
            'results' in SearchJobResults &&
            'ambiguousLocations' in SearchJobResults &&
            'totalResults' in SearchJobResults && (
              <>
                <h1 className="text-center font-semibold">
                  Showing {SearchJobResults.totalResults} Results
                </h1>
                <h1 className="text-center">
                  Showing {SearchJobResults.results.length}
                </h1>
                {SearchJobResults.results.map((job: JobCardType, idx) => (
                  <div key={idx} className="w-full">
                    <JobCard job={job} />
                  </div>
                ))}
              </>
            )}
          <Pagination
            currentPagOption={currentPagoption}
            firstPagOption={firstPagOption}
            secondPagOption={secondPagOption}
            handlePaginationButtonClick={handlePaginationButtonClick}
            page={page}
          />
        </div>
        <div className="h-screen w-full max-md:hidden md:w-2/3 lg:w-3/4 p-4 overflow-auto flex justify-center">
          {highlightedJob ? (
            <HiglightedJobComponent highlightedJob={highlightedJob} />
          ) : (
            <div>
              <p className="text-center">
                Click View Details View Specific Job Infomation
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
