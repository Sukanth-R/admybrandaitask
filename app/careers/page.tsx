'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/Footer'
import Button from '@/components/ui/Button'

interface JobPosition {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
}

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null)

  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Worldwide',
      type: 'Full-time',
      description: 'Join our AI team to develop cutting-edge marketing automation solutions using machine learning and deep learning technologies.',
      requirements: [
        'Masters/PhD in Computer Science, AI, or related field',
        '5+ years of experience in AI/ML development',
        'Strong Python programming skills',
        'Experience with TensorFlow or PyTorch',
        'Background in NLP and computer vision'
      ]
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Worldwide',
      type: 'Full-time',
      description: 'Build and maintain scalable web applications for our AI-powered marketing platform.',
      requirements: [
        '3+ years of experience with React/Next.js',
        'Strong TypeScript skills',
        'Experience with Node.js and RESTful APIs',
        'Understanding of cloud services (AWS/GCP)',
        'Knowledge of database systems'
      ]
    },
    {
      id: '3',
      title: 'Product Marketing Manager',
      department: 'Marketing',
      location: 'Remote / Worldwide',
      type: 'Full-time',
      description: 'Lead the product marketing strategy for our AI marketing solutions.',
      requirements: [
        '5+ years of B2B SaaS product marketing experience',
        'Strong analytical and strategic thinking skills',
        'Excellent communication and presentation abilities',
        'Experience with marketing automation tools',
        'Understanding of AI/ML concepts'
      ]
    }
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const handleApply = (job: JobPosition) => {
    setSelectedJob(job)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join Our Mission to Transform <br />
              <span className="text-indigo-600">Digital Marketing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Work with cutting-edge AI technology and help businesses worldwide achieve their marketing goals.
            </p>
            <a href="#openings" className="inline-block">
              <Button variant="primary" size="lg">
                View Open Positions
              </Button>
            </a>
          </motion.div>
        </section>

        {/* Culture Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://cdn.nishtyainfotech.com/content/jobaaj/assets/img/post_blog/67bd6e5b0f434.webp"
                  alt="Company Culture"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Innovation First',
                      description: 'We encourage creative thinking and welcome new ideas that challenge the status quo.'
                    },
                    {
                      title: 'Work-Life Balance',
                      description: 'Flexible working hours and remote-first environment to help you maintain a healthy balance.'
                    },
                    {
                      title: 'Growth Mindset',
                      description: 'Continuous learning opportunities and career development support.'
                    },
                    {
                      title: 'Inclusive Environment',
                      description: 'We celebrate diversity and create an inclusive space for everyone to thrive.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Benefits & Perks</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🌍',
                  title: 'Remote Work',
                  description: 'Work from anywhere in the world'
                },
                {
                  icon: '💰',
                  title: 'Competitive Salary',
                  description: 'Industry-leading compensation packages'
                },
                {
                  icon: '🏥',
                  title: 'Health Benefits',
                  description: 'Comprehensive health insurance coverage'
                },
                {
                  icon: '📚',
                  title: 'Learning Budget',
                  description: 'Annual budget for courses and conferences'
                },
                {
                  icon: '🏖️',
                  title: 'Unlimited PTO',
                  description: 'Flexible vacation policy'
                },
                {
                  icon: '💻',
                  title: 'Equipment',
                  description: 'Latest tech setup for your home office'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Open Positions Section */}
        <section id="openings" className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2>
            <div className="space-y-6">
              {jobPositions.map((job) => (
                <motion.div
                  key={job.id}
                  variants={fadeIn}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800">
                          {job.department}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                          {job.location}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleApply(job)}
                    >
                      Apply Now
                    </Button>
                  </div>
                  
                  {selectedJob?.id === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 border-t border-gray-200 pt-6"
                    >
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Email
                            </label>
                            <input
                              type="email"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Resume/CV
                            </label>
                            <input
                              type="file"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Cover Letter
                            </label>
                            <textarea
                              rows={4}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <Button variant="primary" size="lg" className="w-full">
                              Submit Application
                            </Button>
                          </div>
                        </form>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default CareersPage
