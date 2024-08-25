export default function BannerFeatures() {
  return (
    <section className=" w-full md:mt-32 bg-blue-500 text-white banner-features">
      <div className=" py-16 container mx-auto px-4">
        <div className="gap-y-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:w-1/3 text-center">
            <h3 className="text-2xl font-bold mb-2">Filtered Searches</h3>
            <p className="text-lg">
              Easily find the jobs that match your skills and preferences.
            </p>
          </div>
          <div className="flex flex-col items-center md:w-1/3 text-center">
            <h3 className="text-2xl font-bold mb-2">Real-Time Jobs</h3>
            <p className="text-lg">
              Access the latest job postings as soon as they become available.
            </p>
          </div>
          <div className="flex flex-col items-center md:w-1/3 text-center">
            <h3 className="text-2xl font-bold mb-2">
              Direct Access to Companies
            </h3>
            <p className="text-lg">
              Apply directly through the company’s job page with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
