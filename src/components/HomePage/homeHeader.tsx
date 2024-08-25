import Image from 'next/image'

export default function HomeHeader() {
  return (
    <header className="bg-primary text-white header-section md:py-16">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <p className="text-xl">130000+ Jobs listed</p>
          <h2 className="text-5xl font-bold">Find your Dream Job</h2>
          <p className="text-xl">
            Connect with top employers across the UK and find job opportunities
            tailored to your skills and career goals.
          </p>
          <a
            href="/search"
            className="inline-block bg-secondary hover:bg-opacity-90 text-white text-lg px-8 py-3 rounded"
          >
            Get Started
          </a>
        </div>
        <div className="hidden md:block">
          <Image
            src="/illustration.png"
            width={600}
            height={600}
            quality={100}
            unoptimized
            alt="Job Searching Website Home Image"
          />
        </div>
      </div>
    </header>
  )
}
