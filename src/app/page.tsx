import FilteredInput from '@/components/filteredInput'
import { jobSearchHandler } from '@/utils/jobSearch'
import JobCard from '@/components/jobCard'
import type { JobCardProps, JobData } from '../../types/apiFetchingTypes'

export default async function Home({
  searchParams,
}: {
  [key: string]: string | string[] | undefined
}) {
  const SearchJobResults = await jobSearchHandler(searchParams)

  return (
    <section
      className="flex flex-col h-screen m-0"
      style={{ maxHeight: 'calc(100vh - 68px)' }}
    >
      <div className="w-full border">
        <FilteredInput />
      </div>
      <div className="flex">
        <div
          className="w-1/4 border-r h-screen overflow-auto"
          style={{ maxHeight: 'calc(100vh - 158px)' }}
        >
          {typeof SearchJobResults === 'object' &&
            SearchJobResults !== null &&
            'results' in SearchJobResults &&
            'ambiguousLocations' in SearchJobResults &&
            'totalResults' in SearchJobResults &&
            SearchJobResults.results.map((job: JobCardProps, idx) => (
              <div key={idx} className="w-full">
                <JobCard
                  jobId={job.jobId}
                  employerId={job.employerId}
                  employerName={job.employerName}
                  employerProfileId={job.employerProfileId}
                  employerProfileName={job.employerProfileName}
                  jobTitle={job.jobTitle}
                  locationName={job.locationName}
                  minimumSalary={job.minimumSalary}
                  maximumSalary={job.maximumSalary}
                  currency={job.currency}
                  expirationDate={job.expirationDate}
                  date={job.date}
                  jobDescription={job.jobDescription}
                  applications={job.applications}
                  jobUrl={job.jobUrl}
                />
              </div>
            ))}
        </div>
        <div
          className="w-3/4 p-4 h-screen"
          style={{ maxHeight: 'calc(100vh - 158px)' }}
        >
          3
        </div>
      </div>
    </section>
  )
}
