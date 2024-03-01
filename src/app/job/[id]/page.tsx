import { getSingleJob } from '@/utils/jobSearch'
import HiglightedJobComponent from '@/components/JobPage/highlightedJob'
import { Claims, getSession } from '@auth0/nextjs-auth0'
import { getIsJobSaved } from '@/utils/getJobSaved'

const getUserProfileData = async (): Promise<Claims | undefined | null> => {
  const session = await getSession()

  if (!session) {
    return null
  }
  const { user } = session
  return user
}

export default async function Home({ params }: { params: { id: string } }) {
  const job = await getSingleJob(params.id)
  const user = await getUserProfileData()
  const saved = user && job ? await getIsJobSaved(user.sub, job.jobId) : false

  return (
    <section className="lg:pt-24 py-24 pb-4 flex flex-col items-center justify-center mb-2">
      {job ? (
        <HiglightedJobComponent
          highlightedJob={job}
          user={user}
          saved={saved}
        />
      ) : (
        <div>Error Retrieving Job Data, Refresh Page</div>
      )}
    </section>
  )
}
