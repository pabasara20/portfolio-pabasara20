import React from 'react'
import Box3 from '../Assets/Box3.png'

export default function Experience() {
  const workHistory = [
    // ... (workHistory array remains the same)
    {
      id: 1,
      position: 'Lead Product Designer',
      company: 'Rapido',
      duration: 'Feb 2025 - Present',
      logo: Box3,
    },
    {
      id: 2,
      position: 'Senior Product Designer',
      company: 'PhonePe India Pvt. Ltd',
      duration: 'Dec 2023 - Feb 2025',
      logo: Box3,
    },
    {
      id: 3,
      position: 'Lead Product Designer',
      company: 'Flipkart Internet Pvt. Ltd.',
      duration: 'May 2018 - Dec 2023',
      logo: Box3,
    },
    {
      id: 4,
      position: 'Senior Visual Designer',
      company: 'Parutti Clothing Studio',
      duration: 'May 2016 - Apr 2018',
      logo: Box3,
    },
    {
      id: 5,
      position: 'Visual Designer',
      company: 'Crazy Hippos',
      duration: 'Mar 2015 - May 2016',
      logo: Box3,
    },
    {
      id: 6,
      position: 'Junior UX Designer',
      company: 'Design Studio Inc',
      duration: 'Jan 2014 - Feb 2015',
      logo: Box3,
    },
    {
      id: 7,
      position: 'Graphic Designer',
      company: 'Creative Agency',
      duration: 'Sep 2012 - Dec 2013',
      logo: Box3,
    },
  ]

  return (
    <section className="w-full py-6 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-[550] leading-tight">
            Work history
          </h2>
        </div>

        {/* Work Experience List - Centered container with full-width dividers */}
        <div className="max-w-4xl mx-auto space-y-0">
          {workHistory.map((job, index) => (
            <div key={job.id} className="relative">
              {/* Horizontal divider line - full width of container */}
              {index > 0 && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gray-200"></div>
              )}

              {/* Job Entry - Flexbox layout for better alignment */}
              <div className="flex items-center justify-between py-3 md:py-4">

                {/* Left section - Position titles */}
                <div className="flex-shrink-0 w-1/3">
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 leading-tight">
                    {job.position}
                  </h3>
                </div>

                {/* Right section - Company info + Box3 image, stretches to fill remaining space */}
                <div className="flex items-center justify-between flex-1 ml-8">
                  {/* Company info - takes up available space */}
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-medium text-gray-900 leading-tight">
                      {job.company}
                    </h4>
                    <p className="text-sm md:text-base text-gray-500 leading-tight">
                      {job.duration}
                    </p>
                  </div>

                  {/* Box3 image - aligned to the right edge */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden flex items-center justify-center bg-gray-50 shadow-sm flex-shrink-0 ml-4">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final bottom border - centered with content */}
        <div className="max-w-4xl mx-auto h-px bg-gray-200 mt-0"></div>
      </div>
    </section>
  )
}