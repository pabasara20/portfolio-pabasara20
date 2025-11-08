import React from 'react'
import Box3 from '../Assets/Box3.png' // temporary placeholder for all logos

export default function Experience() {
  const workHistory = [
    { id: 1, position: 'Lead Product Designer', company: 'Rapido', duration: 'Feb 2025 – Present', logo: Box3 },
    { id: 2, position: 'Senior Product Designer', company: 'PhonePe India Pvt. Ltd', duration: 'Dec 2023 – Feb 2025', logo: Box3 },
    { id: 3, position: 'Lead Product Designer', company: 'Flipkart Internet Pvt. Ltd.', duration: 'May 2018 – Dec 2023', logo: Box3 },
    { id: 4, position: 'Senior Visual Designer', company: 'Parutti Clothing Studio', duration: 'May 2016 – Apr 2018', logo: Box3 },
    { id: 5, position: 'Visual Designer', company: 'Crazy Hippos', duration: 'Mar 2015 – May 2016', logo: Box3 },
    { id: 6, position: 'Junior UX Designer', company: 'Design Studio Inc', duration: 'Jan 2014 – Feb 2015', logo: Box3 },
    { id: 7, position: 'Graphic Designer', company: 'Creative Agency', duration: 'Sep 2012 – Dec 2013', logo: Box3 },
    { id: 8, position: 'UI/UX Designer', company: 'Tech Startup', duration: 'Jun 2011 – Aug 2012', logo: Box3 },
    { id: 9, position: 'Freelance Designer', company: 'Various Clients', duration: 'Jan 2010 – May 2011', logo: Box3 },
    { id: 10, position: 'Design Intern', company: 'Digital Agency', duration: 'Jul 2009 – Dec 2009', logo: Box3 },
  ]

  return (
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-medium text-center mt-8 mb-16">
          Work History
        </h2>

        {/* Timeline Style List */}
        <div className="flex flex-col divide-y divide-gray-100">
          {workHistory.map((job) => (
            <div
              key={job.id}
              className="flex items-center justify-between py-5 transition-colors duration-200 rounded-xl px-0 md:px-4 group"
            >
              {/* Left: Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {job.position}
                </h3>
                <p className="text-sm text-gray-700">{job.company}</p>
                <p className="text-xs text-gray-500">{job.duration}</p>
              </div>

              {/* Right: Logo */}
              <div className="flex items-center gap-3 ml-4">
                <div className="w-max h-auto md:w-6 md:h-6 rounded-lg overflow-hiddenflex items-center justify-center">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
