'use client'

import { UserContext } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'
import { useState } from 'react'
import { CgClose, CgMenuGridO } from 'react-icons/cg'

interface MobileNavProps {
  user: UserContext
}

export default function MobileNav({ user }: MobileNavProps) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  function mobileMenuHandler() {
    setOpenMobileMenu(!openMobileMenu)
  }

  return (
    <>
      <div
        className="md:hidden ml-auto cursor-pointer"
        onClick={mobileMenuHandler}
      >
        {openMobileMenu ? (
          <CgClose color="black" size={30} />
        ) : (
          <CgMenuGridO color="black" size={30} />
        )}
      </div>

      {openMobileMenu ? (
        <div
          onClick={() => setOpenMobileMenu(false)}
          className=" fixed w-full h-screen top-0 left-0 bg-black/25 z-50"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="absolute h-screen left-0 top-0 w-60 bg-white z-[999] px-5 pt-4 border-r overflow-y-hidden flex flex-col gap-10"
          >
            <Link
              className="flex items-center justify-center text-2xl"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="text-black font-semibold ml-2">UK Jobble</span>
            </Link>
            <hr />
            <div className="flex flex-col justify-center gap-y-4">
              <Link
                className=" font-medium hover:underline underline-offset-4 ml-4"
                href="/search"
              >
                Search
              </Link>
              {!user.user ? (
                <a
                  className="font-medium hover:underline underline-offset-4 ml-4"
                  href="/api/auth/login"
                >
                  Sign Up
                </a>
              ) : (
                <>
                  <Link
                    href={'/saved'}
                    className=" font-medium hover:underline underline-offset-4 ml-4"
                  >
                    Saved Jobs
                  </Link>
                  <a
                    href="/api/auth/logout"
                    className=" font-medium hover:underline underline-offset-4 ml-4"
                  >
                    Log Out
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
