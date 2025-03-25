import { getIsJobSaved } from '@/utils/getJobSaved'
import { describe, jest, expect, test, beforeAll } from '@jest/globals'
import { createPool, sql } from '@vercel/postgres'
import { beforeEach } from 'node:test'

describe('getIsJobSaved helper function', () => {
  test('(User_id undefined) Get saved Job should return false', async () => {
    const result = await getIsJobSaved('', 0)
    expect(result).toBe(false)
  })

  test('(Job_id not in range) Get saved Job should return false', async () => {
    const result = await getIsJobSaved('user_id', -1)
    expect(result).toBe(false)
  })
})
