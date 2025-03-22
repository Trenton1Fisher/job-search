import { getSavedJobs } from '@/utils/savedJobsHelper'
import { expect, jest, test } from '@jest/globals'

test('(User_id undefined) getSavedJobs should return undefined', async () => {
  const result = await getSavedJobs('')
  expect(result).toBe(undefined)
})
