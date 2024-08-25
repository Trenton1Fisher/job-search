'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import MobileNav from './mobileNav'
import Link from 'next/link'

export default function Navbar() {
  const user = useUser()
  return (
    <nav className=" fixed top-0 w-full bg-white z-[999] shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a href="/" className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-full">
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
              </div>
              <h1 className="text-2xl font-bold">Uk Jobble</h1>
            </a>
            <a
              href="/search"
              className="text-sm sm:block hover:underline max-md:hidden"
            >
              Browse Jobs
            </a>
          </div>
          <div className="flex items-center space-x-6 max-md:hidden">
            {!user.user ? (
              <a
                className="bg-secondary hover:bg-opacity-90 px-4 py-2 rounded text-white"
                href="/api/auth/login"
              >
                Sign Up
              </a>
            ) : (
              <>
                <Link
                  href="/saved"
                  className="text-sm font-medium hover:underline underline-offset-4 ml-4"
                >
                  Saved Jobs
                </Link>
                <a
                  href="/api/auth/logout"
                  className="bg-secondary hover:bg-opacity-90 px-4 py-2 rounded text-white"
                >
                  Log Out
                </a>
              </>
            )}
          </div>
          <MobileNav user={user} />
        </div>
      </div>
    </nav>
  )
}

// 'use client'
// import { useUser } from '@auth0/nextjs-auth0/client'
// import Link from 'next/link'
// import MobileNav from './mobileNav'

// export default function Navbar() {
//   const user = useUser()
//   return (
//     <nav className="fixed top-0 left-0 right-0 p-4 bg-white text-gray-800 z-10 flex justify-between items-center">
//       <Link className=" flex items-center justify-center p-1 text-xl" href="/">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="h-6 w-6"
//         >
//           <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
//         </svg>
//         <span className="text-black font-semibold ml-2">UK Jobble</span>
//       </Link>
//       <div className="max-md:hidden">
//         <Link
//           className="text-sm font-medium hover:underline underline-offset-4 ml-4"
//           href="/search"
//         >
//           Search
//         </Link>
//         {!user.user ? (
//           <a
//             className="text-sm font-medium hover:underline underline-offset-4 ml-4"
//             href="/api/auth/login"
//           >
//             Sign Up
//           </a>
//         ) : (
//           <>
//             <Link
//               href={'/saved'}
//               className="text-sm font-medium hover:underline underline-offset-4 ml-4"
//             >
//               Saved Jobs
//             </Link>
//             <a
//               href="/api/auth/logout"
//               className="text-sm font-medium hover:underline underline-offset-4 ml-4"
//             >
//               Log Out
//             </a>
//           </>
//         )}
//       </div>
//       <MobileNav user={user} />
//     </nav>
//   )
// }
