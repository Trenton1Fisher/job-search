import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import Navbar from '@/components/shared/navbar'
import Footer from '@/components/shared/footer'
import Head from 'next/head'

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
      <Head>
        <link rel="icon" href="/app_icon.png" sizes="any" />
      </Head>
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
