'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Input from './ui/Input'
import Select from './ui/Select'
import {
  milesOptions,
  minSalaryOptions,
  jobTypeOptions,
} from '../../constants/selectOptions'

export default function FilteredInput() {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState({
    keywords: '',
    location: '',
    distance: 0,
    jobType: '',
    minimumSalary: 0,
  })

  function handleFormSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    let url = '/?'

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
    <form
      className="max-w-md mx-auto mt-8 p-6 flex flex-col"
      onSubmit={e => handleFormSubmission(e)}
    >
      <Input
        id="keywords"
        name="keywords"
        placeholder="Enter job title, keywords, or company name"
        searchInput={searchInput.keywords || ''}
        setSearchInput={setSearchInput}
      />
      <Input
        id="location"
        name="location"
        placeholder="Enter Location"
        searchInput={searchInput.location || ''}
        setSearchInput={setSearchInput}
      />
      <Select
        id="distance"
        name="distance"
        label="Distance From Location"
        placeholder="Select Distance"
        value={searchInput.distance || ''}
        options={milesOptions}
        setSearchInput={setSearchInput}
      />
      <Select
        id="jobType"
        name="jobType"
        label="Job Type"
        placeholder="Select Job Type"
        value={searchInput.jobType || ''}
        options={jobTypeOptions}
        setSearchInput={setSearchInput}
      />
      <Select
        id="minimumSalary"
        name="minimumSalary"
        label="Pay"
        placeholder="Select Pay Range"
        value={searchInput.minimumSalary || ''}
        options={minSalaryOptions}
        setSearchInput={setSearchInput}
      />
      <button
        type="submit"
        className="bg-black text-white rounded-lg font-extrabold uppercase p-3 transition-transform hover:scale-105 hover:bg-gray-800 hover:text-gray-200"
      >
        Search
      </button>
    </form>
  )
}
