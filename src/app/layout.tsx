import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import Navbar from '@/components/shared/navbar'
import Footer from '@/components/shared/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Uk Jobble',
  description: 'Search For Your Desired Job in the UK',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/app_icon.png" sizes="any" />
      </head>
      <UserProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  )
}
