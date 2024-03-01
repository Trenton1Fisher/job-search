import { getSavedJobIdsFromLocalStorage } from "./localStorage";
import type { HighlightedJob } from "../types/apiFetchingTypes";
import { getSingleJob } from "./jobSearch";

export async function getSavedJobs(): Promise<any[] | undefined> {
  const jobIds = getSavedJobIdsFromLocalStorage();
  if (!jobIds) {
    return;
  }
  const fetchedJobs = jobIds.map((id) => getSingleJob(id.toString()));
  const results = await Promise.allSettled(fetchedJobs);
  return results;
}
