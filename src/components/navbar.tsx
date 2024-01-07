export default function Navbar() {
  return (
    <nav className=" p-4 text-gray-800">
      <div className="container flex items-center">
        <span className="text-3xl font-bold">UK Job Search</span>
        <a href="/saved" className="ml-4 hover:underline font-bold">
          Saved Jobs
        </a>
      </div>
    </nav>
  )
}
