import FilteredInput from '@/components/filteredInput'
import { jobSearchHandler, getSingleJob } from '@/utils/jobSearch'
import JobFeed from '@/components/jobFeed'

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const SearchJobResults = await jobSearchHandler(searchParams)
  const job = await getSingleJob(searchParams['jobId'] as string)
  console.log(job)

  return (
    <section
      className="flex flex-col h-screen m-0"
      style={{ maxHeight: 'calc(100vh - 68px)' }}
    >
      <div className="w-full border">
        <FilteredInput />
      </div>
      <JobFeed SearchJobResults={SearchJobResults} highlightedJob={job} />
    </section>
  )
}
