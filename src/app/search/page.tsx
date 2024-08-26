import { jobSearchHandler } from '@/utils/jobSearch'
import JobFeed from '@/components/SearchPage/jobFeed'
import SearchPageSearch from '@/components/SearchPage/searchFilters'
import Image from 'next/image'

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>
}) {
  const searchData = await jobSearchHandler(searchParams)

  return (
    <section className="min-h-screen mx-auto">
      <div className="relative w-full hidden md:block md:mb-12 py-12">
        <img
          src="/bradcam.png"
          alt="job title banner"
          className="w-full h-auto object-cover"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white p-4">
          {searchData.totalResults} Jobs Found
        </h1>
      </div>
      <div className="max-w-[1024px] mx-auto">
        <div className="flex max-[1027px]:flex-col">
          <div className="w-full custom:w-1/4 lg:max-w-xl mr-2 mb-8 lg:mb-0">
            <SearchPageSearch />
          </div>
          <div className="w-3/4 mx-auto">
            <JobFeed jobResults={searchData} searchParams={searchParams} />
          </div>
        </div>
      </div>
    </section>
  )
}
