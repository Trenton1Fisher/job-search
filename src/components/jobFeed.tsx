import JobCard from './jobCard'
import React from 'react'
import DOMPurify from 'isomorphic-dompurify'
import type {
  JobData,
  JobCardType,
  HiglightedJob,
} from '../../types/apiFetchingTypes'

interface JobFeedProps {
  SearchJobResults: string | JobData | undefined
  highlightedJob: undefined | HiglightedJob
}

export default function JobFeed({
  SearchJobResults,
  highlightedJob,
}: JobFeedProps) {
  const sanitizedDescription = DOMPurify.sanitize(
    highlightedJob?.jobDescription as string
  )

  return (
    <>
      <div className="flex">
        <div
          className="w-1/4 border-r h-screen overflow-auto"
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
                {SearchJobResults.results.map((job: JobCardType, idx) => (
                  <div key={idx} className="w-full">
                    <JobCard job={job} />
                  </div>
                ))}
              </>
            )}
        </div>
        <div
          className="w-3/4 p-4 h-screen overflow-auto"
          style={{ maxHeight: 'calc(100vh - 158px)' }}
        >
          {highlightedJob ? (
            // Content to display when the state is updated
            <div>
              <p>Employer: {highlightedJob.employerName}</p>
              <p>Job Title: {highlightedJob.jobTitle}</p>
              <p>Location: {highlightedJob.locationName}</p>
              <p>Salary: {highlightedJob.salary}</p>
              <p>Date Posted: {highlightedJob.datePosted}</p>
              <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
            </div>
          ) : (
            // Content to display when the state is not updated
            <div>
              <p>Click View Details View Specific Job Infomation</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
