export default function Advantages() {
  return (
    <section className="w-full py-20 md:py-20 lg:py-30 relative">
      <div className="absolute inset-0 bg-[#A5F8D3] transform skew-y-3 "></div>
      <div className="container mx-auto flex flex-col items-center justify-center space-y-8 px-4 md:px-6 relative">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
            The UK Jobble Advantage
          </h2>
          <p className="max-w-[700px] text-black text-lg md:text-xl/relaxed">
            Personalized job recommendations, advanced search filters, and
            real-time job alerts. We help you find the perfect job faster.
          </p>
        </div>
        <div className="grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          <div className="flex flex-col items-center gap-4 py-6 bg-white rounded-lg shadow-md">
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
              className="w-16 h-16 text-black"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <polyline points="16 11 18 13 22 9"></polyline>
            </svg>
            <div className="flex flex-col items-center gap-2">
              <h3 className="font-semibold text-black">Personalized</h3>
              <p className="text-center text-sm/relaxed md:text-base/relaxed xl:text-lg/relaxed text-black">
                Get job recommendations tailored to your skills and experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 py-6 bg-white rounded-lg shadow-md">
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
              className="w-16 h-16 text-black"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            <div className="flex flex-col items-center gap-2">
              <h3 className="font-semibold text-black">Advanced Filters</h3>
              <p className="text-center text-sm/relaxed md:text-base/relaxed xl:text-lg/relaxed text-black">
                Refine your search with advanced filters for location, salary,
                and more.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 py-6 bg-white rounded-lg shadow-md">
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
              className="w-16 h-16 text-black"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <div className="flex flex-col items-center gap-2">
              <h3 className="font-semibold text-black">Real-time Alerts</h3>
              <p className="text-center text-sm/relaxed md:text-base/relaxed xl:text-lg/relaxed text-black">
                Get notified as soon as new job opportunities matching your
                profile are available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
