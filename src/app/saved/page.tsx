import { Claims, getSession } from '@auth0/nextjs-auth0'
import { getSavedJobs } from '@/utils/savedJobsHelper'
import { redirect } from 'next/navigation'
import SavedJobs from '@/components/SavedPage/savedJobs'

const getUserProfileData = async (): Promise<Claims | undefined | null> => {
  const session = await getSession()

  if (!session) {
    return null
  }
  const { user } = session
  return user
}

export default async function Home() {
  const user = await getUserProfileData()
  if (!user) {
    redirect('/')
  }
  const jobData = await getSavedJobs(user.sub)

  return (
    <section className="h-screen py-32">
      <SavedJobs jobData={jobData} user={user} />
    </section>
  )
}
