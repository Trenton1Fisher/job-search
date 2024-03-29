'use client'
import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'
import MobileNav from './mobileNav'

export default function Navbar() {
  const user = useUser()
  return (
    <nav className="fixed top-0 left-0 right-0 p-4 bg-white text-gray-800 z-10 flex justify-between items-center">
      <Link className=" flex items-center justify-center p-1 text-xl" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
        </svg>
        <span className="text-black font-semibold ml-2">UK Jobble</span>
      </Link>
      <div className="max-md:hidden">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 ml-4"
          href="/search"
        >
          Search
        </Link>
        {!user.user ? (
          <a
            className="text-sm font-medium hover:underline underline-offset-4 ml-4"
            href="/api/auth/login"
          >
            Sign Up
          </a>
        ) : (
          <>
            <Link
              href={'/saved'}
              className="text-sm font-medium hover:underline underline-offset-4 ml-4"
            >
              Saved Jobs
            </Link>
            <a
              href="/api/auth/logout"
              className="text-sm font-medium hover:underline underline-offset-4 ml-4"
            >
              Log Out
            </a>
          </>
        )}
      </div>
      <MobileNav user={user} />
    </nav>
  )
}
