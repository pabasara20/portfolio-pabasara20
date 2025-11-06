import React from 'react'

export default function Experience() {
  const workHistory = [
    {
      id: 1,
      position: 'Lead Product Designer',
      company: 'Rapido',
      duration: 'Feb 2025 - Present',
      logo: '/logos/rapido.png',
    },
    {
      id: 2,
      position: 'Senior Product Designer',
      company: 'PhonePe India Pvt. Ltd',
      duration: 'Dec 2023 - Feb 2025',
      logo: '/logos/phonepe.png',
    },
    {
      id: 3,
      position: 'Lead Product Designer',
      company: 'Flipkart Internet Pvt. Ltd.',
      duration: 'May 2018 - Dec 2023',
      logo: '/logos/flipkart.png',
    },
    {
      id: 4,
      position: 'Senior Visual Designer',
      company: 'Parutti Clothing Studio',
      duration: 'May 2016 - Apr 2018',
      logo: '/logos/parutti.png',
    },
    {
      id: 5,
      position: 'Visual Designer',
      company: 'Crazy Hippos',
      duration: 'Mar 2015 - May 2016',
      logo: '/logos/crazyhippos.png',
    },
  ]

  return (
    <section className="w-full py-14 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-[550] text-center mb-10">
          Work history
        </h2>

        {/* Work list */}
        <div className="divide-y divide-gray-200">
          {workHistory.map((job) => (
            <div
              key={job.id}
              className="flex flex-col md:flex-row md:items-center justify-between py-5 md:py-6"
            >
              {/* Position */}
              <div className="text-lg md:text-xl font-[500] text-gray-900 mb-2 md:mb-0">
                {job.position}
              </div>

              {/* Logo + Company + Duration */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl overflow-hidden flex items-center justify-center bg-gray-100 shadow-sm flex-shrink-0">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-lg md:text-xl font-[500] text-gray-900 leading-tight">
                    {job.company}
                  </h4>
                  <p className="text-gray-500 text-base font-[400] leading-tight">
                    {job.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Resume Button */}
        <div className="text-center mt-10">
          <button className="bg-black text-white px-8 py-2.5 rounded-full font-[500] text-base hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  )
}
