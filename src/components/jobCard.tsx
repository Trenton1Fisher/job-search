import { JobCardProps } from '../../types/apiFetchingTypes'

export default function JobCard(props: JobCardProps) {
  return (
    <div className="bg-white border-b p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">{props.jobTitle}</h2>
      <p className="text-gray-600">{props.employerName}</p>
      <p className="text-gray-600 mb-2">{props.locationName}</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-700 mb-1">
            Salary: ${props.minimumSalary} - ${props.maximumSalary}
          </p>
          <p className="text-gray-700 mb-1">
            Applications: {props.applications}
          </p>
        </div>
        <a
          href={props.jobUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Details
        </a>
      </div>
    </div>
  )
}
