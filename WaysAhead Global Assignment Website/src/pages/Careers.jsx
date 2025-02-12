import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Upload } from 'react-feather'; // Assuming you're using react-feather for icons

function Careers() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]); // Make sure to set this with the actual jobs data

  return (
    <div>
      {/* Filters */}
      <section className="mb-8 space-y-4">
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Positions
          </button>
          <button
            onClick={() => setSelectedCategory('Internship')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'Internship'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Internships
          </button>
          <button
            onClick={() => setSelectedCategory('Graduate')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'Graduate'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Graduate Roles
          </button>
          <button
            onClick={() => setSelectedCategory('Experienced')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'Experienced'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Experienced
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search positions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </section>

      {/* Job Cards */}
      <section className="space-y-6">
        {filteredJobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.type}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {job.salary}
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <Upload className="h-4 w-4 mr-2" />
                Apply Now
              </button>
            </div>

            <p className="text-gray-600 mb-4">{job.description}</p>

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Requirements:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Application Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Application Process
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Submit Application</h3>
                <p className="text-gray-600">
                  Upload your resume and fill out the application form. Make sure to include a cover letter
                  that highlights your relevant experience and why you want to join our team.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Initial Review</h3>
                <p className="text-gray-600">
                  Our hiring team will review your application and assess your qualifications against
                  the role requirements. We aim to respond within 5 business days.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Interviews</h3>
                <p className="text-gray-600">
                  Selected candidates will go through a series of interviews, including technical
                  assessments and team fit conversations.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Offer</h3>
                <p className="text-gray-600">
                  Successful candidates will receive a competitive offer package, including details
                  about compensation, benefits, and start date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
