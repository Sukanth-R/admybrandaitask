'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/Footer'

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-indigo-600">ADmyBRAND</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transforming digital marketing through innovative AI solutions. We empower businesses to achieve unprecedented growth and engagement.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Mission Section */}
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At ADmyBRAND, we are on a mission to revolutionize digital marketing through artificial intelligence. 
                  We believe in creating tools that make sophisticated marketing accessible to businesses of all sizes.
                </p>
                <ul className="space-y-4">
                  {[
                    'Empowering businesses with AI-driven insights',
                    'Automating complex marketing processes',
                    'Delivering measurable ROI for our clients',
                    'Creating innovative marketing solutions'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-indigo-50 to-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  description: 'Constantly pushing boundaries to create cutting-edge AI solutions',
                  icon: '🚀'
                },
                {
                  title: 'Transparency',
                  description: 'Open and honest communication with our clients and partners',
                  icon: '🤝'
                },
                {
                  title: 'Excellence',
                  description: 'Committed to delivering the highest quality results',
                  icon: '⭐'
                },
                {
                  title: 'Customer Focus',
                  description: "Your success is our success - we're here to help you grow",
                  icon: '👥'
                },
                {
                  title: 'Adaptability',
                  description: 'Flexible solutions that evolve with your business needs',
                  icon: '🔄'
                },
                {
                  title: 'Impact',
                  description: "Making a real difference in our clients' businesses",
                  icon: '📈'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Team Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Leadership Team</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'CEO & Founder',
                  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
                },
                {
                  name: 'Michael Chen',
                  role: 'CTO',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
                },
                {
                  name: 'Emily Williams',
                  role: 'Head of AI Research',
                  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl p-6"
                >
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-indigo-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-indigo-600">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Marketing?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join thousands of businesses already growing with ADmyBRAND AI Suite
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage
