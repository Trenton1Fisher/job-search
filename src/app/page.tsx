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
  const page = searchParams['page'] as string

  return (
    <section className="flex flex-col overflow-y-hidden m-0">
      <div className="w-full border">
        <FilteredInput />
      </div>
      <JobFeed
        SearchJobResults={SearchJobResults}
        highlightedJob={job}
        page={page}
      />
    </section>
  )
}
