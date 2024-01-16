export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 p-4 bg-white text-gray-800 z-10">
      <div className="container flex items-center">
        <a href="/" className="text-3xl font-bold">
          UK Jobble
        </a>
        <a href="/" className="ml-4 hover:underline font-bold">
          Search
        </a>
        <a href="/saved" className="ml-4 hover:underline font-bold">
          Saved Jobs
        </a>
      </div>
    </nav>
  )
}
