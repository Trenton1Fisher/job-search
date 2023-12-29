import FilteredInput from '@/components/filteredInput'

export default function Home() {
  return (
    <section className="flex">
      {/* Form Section (1/4 of the screen) */}
      <div className="w-1/4 bg-white h-screen p-6 shadow-xl shadow-inner">
        <h2 className="text-2xl font-semibold mb-4">Search Jobs</h2>
        <FilteredInput />
      </div>

      {/* Results Section (3/4 of the screen) */}
      <div className="w-3/4 bg-gray-100 p-6">
        {/* Add your results UI here */}
        <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
        {/* Example result item */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Job Title</h3>
          <p>Company Name</p>
          <p>Location</p>
          {/* Add more details as needed */}
        </div>
        {/* Add more result items as needed */}
      </div>
    </section>
  )
}
