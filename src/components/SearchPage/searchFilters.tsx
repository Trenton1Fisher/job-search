'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Select from '../ui/Select'
import Input from '../ui/Input'
import Button from '../ui/button'
import {
  milesOptions,
  jobTypeOptions,
  minSalaryOptions,
} from '@/constants/selectOptions'

export default function SearchPageSearch() {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState({
    keywords: '',
    location: '',
    distance: 50,
    jobType: '',
    minimumSalary: 0,
  })

  function handleFormSubmission() {
    let url = '/search?'

    Object.entries(searchInput).forEach(([key, value]) => {
      if (key !== undefined && value !== '' && value !== 0) {
        url += `${key}=${encodeURIComponent(String(value))}&`
      }
    })
    // Remove the trailing '&' if it exists
    url = url.replace(/&$/, '')
    router.push(url)
  }

  return (
    <section className="custom:bg-white mx-auto customSearchFilters:w-full w-2/3 md:shadow-xl border rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-center">Filters</h2>
        <form className="max-w-md mx-auto" action={handleFormSubmission}>
          <div className="mb-4 flex flex-col w-full mx-auto">
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
          <div className="mb-4 flex flex-col w-full mx-auto">
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
          <div className="mb-4 flex flex-col w-full mx-auto">
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
          <div className="mb-4 flex flex-col w-full mx-auto">
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
          <div className="mb-4 flex flex-col w-full mx-auto">
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
          <div className="flex justify-center">
            <Button />
          </div>
        </form>
      </div>
    </section>
  )
}
