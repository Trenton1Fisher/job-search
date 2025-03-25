import { getIsJobSaved } from '@/utils/getJobSaved'
import { expect, jest, test } from '@jest/globals'

test('(User_id undefined) Get saved Job should return false', async () => {
  const result = await getIsJobSaved('', 0)
  expect(result).toBe(false)
})

test('(Job_id not in range) Get saved Job should return false', async () => {
  const result = await getIsJobSaved('user_id', -1)
  expect(result).toBe(false)
})
