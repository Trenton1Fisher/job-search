import { jobSearchHandler } from '@/utils/jobSearch'
import JobFeed from '@/components/SearchPage/jobFeed'
import SearchPageSearch from '@/components/SearchPage/searchFilters'

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>
}) {
  const searchData = await jobSearchHandler(searchParams)

  return (
    <section className="min-h-screen mx-auto max-w-[1050px] pt-32">
      <div className="flex max-[1027px]:flex-col">
        <div className="w-full custom:w-1/4 lg:max-w-xl mr-2 mb-8 lg:mb-0">
          <SearchPageSearch />
        </div>
        <div className="w-3/4 mx-auto">
          <JobFeed jobResults={searchData} searchParams={searchParams} />
        </div>
      </div>
    </section>
  )
}
