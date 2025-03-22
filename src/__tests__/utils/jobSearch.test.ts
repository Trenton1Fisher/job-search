import { getSingleJob } from '@/utils/jobSearch'
import { expect, jest, test } from '@jest/globals'

test('single job id is undefined', async () => {
  const result = await getSingleJob(undefined)
  expect(result).toBe(undefined)
})
