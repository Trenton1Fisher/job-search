import { Dispatch, SetStateAction, useState } from 'react'
import Select from '../ui/Select'
import Input from '../ui/Input'
import Button from '../ui/button'
import { IoIosSettings } from 'react-icons/io'
import {
  milesOptions,
  minSalaryOptions,
  jobTypeOptions,
} from '@/constants/selectOptions'

interface MobileSearchFiltersProps {
  searchInput: {
    keywords: string
    location: string
    distance: number
    jobType: string
    minimumSalary: number
  }
  setSearchInput: Dispatch<
    SetStateAction<{
      keywords: string
      location: string
      distance: number
      jobType: string
      minimumSalary: number
    }>
  >
  handleFormSubmission: () => void
}

export default function MobileSearchFilters({
  searchInput,
  setSearchInput,
  handleFormSubmission,
}: MobileSearchFiltersProps) {
  const [openFiltersModal, setOpenFiltersModal] = useState(false)

  return (
    <div className="custom:hidden w-3/5 mx-auto">
      <form
        action={handleFormSubmission}
        className="flex flex-col justify-between max-w-[478px] mx-auto"
      >
        <div className="mt-2">
          {openFiltersModal ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white relative p-8 rounded-lg w-11/12 max-w-lg h-80vh overflow-y-auto">
                <h3 className="text-center text-xl font-semibold mb-2">
                  Filters
                </h3>
                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                  onClick={() => setOpenFiltersModal(false)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="mb-4 flex flex-col w-3/4 mx-auto">
                  <label
                    htmlFor="keywords"
                    className="text-gray-600 font-semibold block mb-1"
                  >
                    Keywords
                  </label>
                  <Input
                    id="keywords"
                    name="keywords"
                    placeholder="Enter job title or keywords"
                    searchInput={searchInput.keywords || ''}
                    setSearchInput={setSearchInput}
                  />
                </div>
                <div className="mb-4 flex flex-col w-3/4 mx-auto">
                  <label
                    htmlFor="location"
                    className="text-gray-600 font-semibold block mb-1"
                  >
                    Location
                  </label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="Enter location"
                    searchInput={searchInput.location || ''}
                    setSearchInput={setSearchInput}
                  />
                </div>
                <div className="mb-4 flex flex-col w-3/4 mx-auto">
                  <label
                    htmlFor="distance"
                    className="text-gray-600 font-semibold block mb-1"
                  >
                    Distance
                  </label>
                  <Select
                    id="distance"
                    name="distance"
                    placeholder="Select distance"
                    value={searchInput.distance || ''}
                    options={milesOptions}
                    setSearchInput={setSearchInput}
                  />
                </div>
                <div className="mb-4 flex flex-col w-3/4 mx-auto">
                  <label
                    htmlFor="jobType"
                    className="text-gray-600 font-semibold block mb-1"
                  >
                    Job Type
                  </label>
                  <Select
                    id="jobType"
                    name="jobType"
                    placeholder="Select job type"
                    value={searchInput.jobType || ''}
                    options={jobTypeOptions}
                    setSearchInput={setSearchInput}
                  />
                </div>
                <div className="mb-4 flex flex-col w-3/4 mx-auto">
                  <label
                    htmlFor="minimumSalary"
                    className="text-gray-600 font-semibold block mb-1"
                  >
                    Minimum Salary
                  </label>
                  <Select
                    id="minimumSalary"
                    name="minimumSalary"
                    placeholder="Select pay range"
                    value={searchInput.minimumSalary || ''}
                    options={minSalaryOptions}
                    setSearchInput={setSearchInput}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center justify-between">
              <button
                className="flex items-center font-semibold text-black space-x-4 bg-white px-4 py-2 rounded cursor-pointer border shadow-lg mb-4 md:mb-0"
                onClick={() => setOpenFiltersModal(true)}
              >
                Search Filters
                <IoIosSettings color="black" size={25} className="mx-2" />
              </button>
              <div>
                <Button />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
