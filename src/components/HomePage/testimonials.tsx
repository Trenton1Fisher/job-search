import Image from 'next/image'

export default function Testimonials() {
  return (
    <div className="container mx-auto px-4 py-16 my-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Testimonial
      </h2>
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
        <div className="md:w-1/3 mb-8 md:mb-0 relative">
          <Image
            src={'/mark-stock.jpg'}
            width={250}
            height={250}
            alt=" User Mark Lee Image"
            className="rounded-full aspect-square object-cover"
          />
          <div className="absolute -bottom-4 -right-4 bg-green-500 rounded-full w-16 h-16 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </div>
        </div>
        <div className="md:w-2/3 md:pl-12">
          <blockquote className=" text-gray-700 mb-4">
            &quot;UK Jobble made my job search incredibly straightforward and
            rewarding. The platform&apos;s intuitive design and extensive
            listings helped me find a position that perfectly matched my skills
            and career aspirations. Thanks to UK Jobble, I’m now thriving in a
            role that I’m truly passionate about. Their support and
            user-friendly interface have been invaluable in my journey towards a
            fulfilling career.&quot;
          </blockquote>
          <cite className="text-gray-600"> - Mark</cite>
        </div>
      </div>
    </div>
  )
}
