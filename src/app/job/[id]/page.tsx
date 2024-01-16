import { getSingleJob } from '@/utils/jobSearch'
import HiglightedJobComponent from '@/components/highlightedJob'

export default async function Home({ params }: { params: { id: string } }) {
  const job = await getSingleJob(params.id)
  return (
    <section className="mt-16 flex flex-col items-center justify-center mb-2">
      {job ? (
        <HiglightedJobComponent highlightedJob={job} />
      ) : (
        <div>Error Retrieving Job Data, Refresh Page</div>
      )}
    </section>
  )
}
