'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function HomeSearch() {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState({
    keywords: '',
    location: '',
    distance: 50,
    jobType: '',
    minimumSalary: 0,
  })

  function handleFormSubmission(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    let url = '/search?'
    console.log('called')

    Object.entries(searchInput).forEach(([key, value]) => {
      if (key !== undefined && value !== '' && value !== 0) {
        url += `${key}=${encodeURIComponent(String(value))}&`
      }
    })
    url = url.replace(/&$/, '')
    router.push(url)
  }
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <form
          className="flex flex-wrap gap-4 "
          onSubmit={e => handleFormSubmission(e)}
        >
          <input
            type="text"
            placeholder="Search keyword"
            className="flex-grow p-2 border rounded"
            onChange={e =>
              setSearchInput(prev => ({ ...prev, keywords: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="Location"
            onChange={e =>
              setSearchInput(prev => ({ ...prev, location: e.target.value }))
            }
            className="p-2 border rounded"
          />
          <select
            className="p-2 border rounded"
            onChange={e =>
              setSearchInput(prev => ({ ...prev, jobType: e.target.value }))
            }
          >
            <option value="fullTime">Full Time</option>
            <option value="partTime">Part Time</option>
            <option value="temp">Temporary</option>
          </select>
          <button
            type="submit"
            className="bg-secondary hover:bg-opacity-90 text-white px-8 py-2 rounded"
          >
            Find Job
          </button>
        </form>
        <div className="mt-4">
          <span className="text-gray-600 mr-2">Popular Search:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            <a
              href="/search?keywords=software%20engineer&distance=50"
              className="text-primary border border-primary rounded px-3 py-1 text-sm hover:bg-primary hover:text-white"
            >
              Software Engineer
            </a>
            <a
              href="/search?keywords=cashier&distance=50"
              className="text-primary border border-primary rounded px-3 py-1 text-sm hover:bg-primary hover:text-white"
            >
              Cashier
            </a>
            <a
              href="/search?keywords=administrative%20assistant&distance=50"
              className="text-primary border border-primary rounded px-3 py-1 text-sm hover:bg-primary hover:text-white"
            >
              Administrative Assistant
            </a>
            <a
              href="/search?keywords=teacher&distance=50"
              className="text-primary border border-primary rounded px-3 py-1 text-sm hover:bg-primary hover:text-white"
            >
              Teacher
            </a>
            <a
              href="/search?keywords=mechanical%20engineer&distance=50"
              className="text-primary border border-primary rounded px-3 py-1 text-sm hover:bg-primary hover:text-white"
            >
              Mechanical Engineer
            </a>
            <a
              href="/search?keywords=web%20developer&distance=50"
              className="text-primary border border-primary rounded px-3 py-1 text-sm hover:bg-primary hover:text-white"
            >
              Web Developer
            </a>
            <a
              href="/search?keywords=customer%20service%20representative&distance=50"
              className="text-primary border border-primary rounded px-3 py-1 text-sm hover:bg-primary hover:text-white"
            >
              Customer Service Representative
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
