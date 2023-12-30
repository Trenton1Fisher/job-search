export type Nullable<T> = T | null

export type JobData = {
  results: Array<{
    jobId: Nullable<number>
    employerId: Nullable<number>
    employerName: Nullable<string>
    employerProfileId: Nullable<number>
    employerProfileName: Nullable<string>
    jobTitle: Nullable<string>
    locationName: Nullable<string>
    minimumSalary: Nullable<number>
    maximumSalary: Nullable<number>
    currency: Nullable<string>
    expirationDate: Nullable<string>
    date: Nullable<string>
    jobDescription: Nullable<string>
    applications: Nullable<number>
    jobUrl: Nullable<string>
  }>
  ambiguousLocations: Nullable<Array<string>>
  totalResults: Nullable<number>
}

export interface JobCardProps {
  jobId: Nullable<number>
  employerId: Nullable<number>
  employerName: Nullable<string>
  employerProfileId: Nullable<number>
  employerProfileName: Nullable<string>
  jobTitle: Nullable<string>
  locationName: Nullable<string>
  minimumSalary: Nullable<number>
  maximumSalary: Nullable<number>
  currency: Nullable<string>
  expirationDate: Nullable<string>
  date: Nullable<string>
  jobDescription: Nullable<string>
  applications: Nullable<number>
  jobUrl: Nullable<string>
}

/*    <JobCard
                jobId={job.jobId}
                employerId={job.employerId}
                employerName={job.employerName}
                employerProfileId={job.employerProfileId}
                employerProfileName={job.employerProfileName}
                jobTitle={job.jobTitle}
                locationName={job.locationName}
                minimumSalary={job.minimumSalary}
                maximumSalary={job.maximumSalary}
                currency={job.currency}
                expirationDate={job.expirationDate}
                date={job.date}
                jobDescription={job.jobDescription}
                applications={job.applications}
                jobUrl={job.jobUrl}
              />*/
