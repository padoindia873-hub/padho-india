import React from 'react'
import { Card } from 'antd'

const educationSections = [
  {
    title: 'Higher Education Scholarship',
    points: [
      'Registration Form',
      'About All Degrees',
      'Scholarship Record',
      'Event Live Streaming',
    ],
    mode: 'Online Info',
  },
]

const EducationOverview = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3 capitalize leading-snug">
        Education Portal Overview
      </h2>

      {/* Subtitle */}
      <p className="text-center text-sm sm:text-base text-gray-600 mb-10 italic max-w-2xl">
        <span className="font-semibold text-blue-600">Scholarships</span>,{' '}
        <span className="font-semibold text-blue-600">Records</span>, and{' '}
        <span className="font-semibold text-blue-600">Live Streaming</span> — All
        in one place for student empowerment.
      </p>

      {/* Card Section */}
      <div className="w-full max-w-3xl grid gap-10">
        {educationSections.map((section, index) => (
          <Card
            key={index}
            bordered={false}
            className="bg-transparent shadow-lg rounded-2xl"
            bodyStyle={{ padding: '1.5rem' }}
          >
            {/* Section Title */}
            <div className="text-center mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                {section.title}
              </h3>
              <p className="text-sm font-medium text-blue-600 mt-1">
                {section.mode}
              </p>
            </div>

            {/* Points List */}
            <div className="flex flex-col gap-3 items-center">
              {section.points.map((point, i) => (
                <div
                  key={i}
                  className="w-full text-center px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-200 text-base sm:text-lg"
                >
                  {point}
                </div>
              ))}
            </div>

            {/* YouTube Embed (Responsive) */}
            <div className="flex flex-col justify-center items-center mt-10 w-full">
              <div className="relative w-full pb-[56.25%] sm:pb-[50%] md:pb-[45%] h-0 overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/yopSxfaegsQ"
                  title="YouTube video player"
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default EducationOverview
