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

export interface HighlightedJob {
  employerId: Nullable<number>
  employerName: Nullable<string>
  jobId: number
  jobTitle: Nullable<string>
  locationName: Nullable<string>
  minimumSalary: Nullable<number>
  maximumSalary: Nullable<number>
  yearlyMinimumSalary: Nullable<number>
  yearlyMaximumSalary: Nullable<number>
  currency: Nullable<string>
  salaryType: Nullable<string>
  salary: Nullable<number>
  datePosted: Nullable<string>
  expirationDate: Nullable<string>
  externalUrl: Nullable<string>
  jobUrl: Nullable<string>
  partTime: Nullable<boolean>
  fullTime: Nullable<boolean>
  contractType: Nullable<string>
  jobDescription: Nullable<string>
  applicationCount: Nullable<number>
}

export interface JobCardType {
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
