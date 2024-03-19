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

export default function HomeSearch() {
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
    console.log(url)
    router.push(url)
  }

  return (
    <section className="w-full py-20 lg:py-26 flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tighter lg:text-6xl/none">
            Your next job is waiting
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Find the perfect job with our powerful search engine and search over
            300,000 jobs in the UK
          </p>
        </div>
        <form
          className=" max-[380px]:w-full max-sm:w-3/4"
          action={handleFormSubmission}
        >
          <div className="flex flex-col gap-2 sm:flex-row justify-center mb-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="keywords" className="text-gray-600 font-semibold">
                Keywords
              </label>
              <Input
                id="keywords"
                name="keywords"
                placeholder="Enter job title or Keywords"
                searchInput={searchInput.keywords || ''}
                setSearchInput={setSearchInput}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="text-gray-600 font-semibold">
                Location
              </label>
              <Input
                id="location"
                name="location"
                placeholder="Enter Location"
                searchInput={searchInput.location || ''}
                setSearchInput={setSearchInput}
              />
            </div>
          </div>
          <div className=" flex flex-col gap-4 sm:flex-row justify-center">
            <div className="flex flex-col gap-2">
              <label htmlFor="distance" className="text-gray-600 font-semibold">
                Distance
              </label>
              <Select
                id="distance"
                name="distance"
                placeholder="Select Distance"
                value={searchInput.distance || ''}
                options={milesOptions}
                setSearchInput={setSearchInput}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="jobType" className="text-gray-600 font-semibold">
                Job Type
              </label>
              <Select
                id="jobType"
                name="jobType"
                placeholder="Select Job Type"
                value={searchInput.jobType || ''}
                options={jobTypeOptions}
                setSearchInput={setSearchInput}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="minimumSalary"
                className="text-gray-600 font-semibold"
              >
                Minimum Salary
              </label>
              <Select
                id="minimumSalary"
                name="minimumSalary"
                placeholder="Select Pay Range"
                value={searchInput.minimumSalary || ''}
                options={minSalaryOptions}
                setSearchInput={setSearchInput}
              />
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <Button />
          </div>
        </form>
      </div>
    </section>
  )
}
