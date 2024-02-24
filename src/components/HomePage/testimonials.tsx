import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10 justify-center">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Success Stories
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            See what our users have to say about finding their dream jobs with
            UK Jobble.
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl items-center gap-4 sm:grid-cols-2 sm:gap-10">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={"/stock-woman.jpg"}
              width={130}
              height={130}
              alt="User Sarah Johnson Image"
              className="rounded-full aspect-square object-cover"
            />
            <div className="space-y-2 text-center">
              <h3 className="font-bold">Sarah Johnson</h3>
              <p className="text-sm/relaxed md:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                "UK Jobble made it easy for me to find job openings that matched
                my skills. I got hired by my dream company thanks to UK Jobbles
                advanced filtering system"
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <Image
              src={"/mark-stock.jpg"}
              width={130}
              height={130}
              alt=" User Mark Lee Image"
              className="rounded-full aspect-square object-cover"
            />
            <div className="space-y-2 text-center">
              <h3 className="font-bold">Mark Lee</h3>
              <p className="text-sm/relaxed md:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                "UK Jobble's diverse range of job openings made it effortless
                for me to explore opportunities. Thanks to their platform, I
                secured my dream job with ease."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
