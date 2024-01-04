export function SaveLocalStorage(id: number) {
  const jobIdKey: string = 'savedJobIds'
  const existingJobIds: number[] = getSavedJobIdsFromLocalStorage()

  existingJobIds.push(id)
  localStorage.setItem(jobIdKey, JSON.stringify(existingJobIds))
}

export function DeleteLocalStorage(id: number) {
  const jobIdKey: string = 'savedJobIds'
  const existingJobIds: number[] = getSavedJobIdsFromLocalStorage()
  const index = existingJobIds.indexOf(id)

  if (index !== -1) {
    existingJobIds.splice(index, 1)
    localStorage.setItem(jobIdKey, JSON.stringify(existingJobIds))
  }
}

export function getSavedJobIdsFromLocalStorage(): number[] {
  const jobIdKey: string = 'savedJobIds'
  const storedData: string | null = localStorage.getItem(jobIdKey)

  if (storedData !== null) {
    return JSON.parse(storedData)
  }

  return []
}

export function isJobInLocalStorage(id: number | null): boolean {
  if (!id) {
    return false
  }
  const existingJobIds: number[] = getSavedJobIdsFromLocalStorage()
  return existingJobIds.includes(id)
}
