import { getSingleJob } from '@/utils/jobSearch'

test('single job id is undefined', async () => {
  const result = await getSingleJob(undefined)
  expect(result).toBe(undefined)
})
