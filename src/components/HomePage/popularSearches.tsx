export default function PopularSearches() {
  const categories = [
    { name: 'Design & Creative', positions: '1000+', url: 'design' },
    { name: 'Marketing', positions: '5000+', url: 'marketing' },
    { name: 'Telemarketing', positions: '100+', url: 'telemarketing' },
    { name: 'Software & Web', positions: '1000+', url: 'software' },
    { name: 'Administration', positions: '15000+', url: 'administration' },
    { name: 'Teaching & Education', positions: '19000+', url: 'education' },
    { name: 'Engineering', positions: '15000+', url: 'engineering' },
    { name: 'Healthcare', positions: '7000+', url: 'healthcare' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Popular Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <a
            key={index}
            href={`/search?keywords=${encodeURIComponent(
              category.url
            )}&distance=50`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              {category.name}
            </h3>
            <div className="flex items-center">
              <span className="bg-blue-100 text-blue-800 font-medium px-2.5 py-0.5 rounded-full text-xs mr-2">
                {category.positions}
              </span>
              <span className="text-sm text-gray-500">Available positions</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
