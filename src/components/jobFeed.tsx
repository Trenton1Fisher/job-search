"use client"
import JobCard from './jobCard'
import React from 'react'
import type {
  JobData,
  JobCardType,
  HighlightedJob,
} from '../../types/apiFetchingTypes'
import HiglightedJobComponent from './highlightedJob'
import { useRouter, useSearchParams } from 'next/navigation'

interface JobFeedProps {
  SearchJobResults: string | JobData | undefined
  highlightedJob: undefined | HighlightedJob
  page: string | undefined
}

export default function JobFeed({
  SearchJobResults,
  highlightedJob,
  page
}: JobFeedProps) {
  const router = useRouter()
  const firstPagOption = page !== undefined ? (Number(page) - 1) : undefined;
  const currentPagoption = page !== undefined ? (Number(page)) : undefined
  const secondPagOption = page !== undefined ? (Number(page) + 1) : undefined;
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
        <div
          className=" w-full md:w-1/3 lg:w-1/5 border-r h-screen overflow-auto"
          style={{ maxHeight: 'calc(100vh - 158px)' }}
        >
          {typeof SearchJobResults === 'object' &&
            SearchJobResults !== null &&
            'results' in SearchJobResults &&
            'ambiguousLocations' in SearchJobResults &&
            'totalResults' in SearchJobResults && (
              <>
                <h1 className="text-center font-semibold">
                  Showing {SearchJobResults.totalResults} Results
                </h1>
                <h1 className='text-center'>Showing {SearchJobResults.results.length}</h1>
                {SearchJobResults.results.map((job: JobCardType, idx) => (
                  <div key={idx} className="w-full">
                    <JobCard job={job} />
                  </div>
                ))}
              </>
            )}
          <div className='flex justify-center'>
            {page !== undefined ? (
              <div>
                <button onClick={() => handlePaginationButtonClick(firstPagOption)}>{firstPagOption}</button>
                <button >{currentPagoption}</button>
                <button onClick={() => handlePaginationButtonClick(secondPagOption)}>{secondPagOption}</button>
              </div>
            ) : (
              <div>
                <button >1</button>
                <button onClick={() => handlePaginationButtonClick(2)}>2</button>
                <button onClick={() => handlePaginationButtonClick(3)}>3</button>
              </div>
            )}
          </div>
        </div>
        <div
          className=" w-full max-md:hidden md:w-2/3 lg:w-3/4 p-4 h-screen overflow-auto flex justify-center"
          style={{ maxHeight: 'calc(100vh - 158px)' }}
        >
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
