'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/Footer'

const PrivacyPolicyPage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const sections = [
    {
      title: "Introduction",
      content: `Last Updated: August 5, 2025

At ADmyBRAND, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered marketing platform and related services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the platform.`
    },
    {
      title: "Information We Collect",
      subsections: [
        {
          subtitle: "Personal Information",
          content: `We may collect personal information that you voluntarily provide when using our platform, including but not limited to:
• Name and contact information
• Business information
• Account credentials
• Payment information
• Communication preferences`
        },
        {
          subtitle: "Usage Data",
          content: `We automatically collect certain information when you visit, use, or navigate our platform. This information may include:
• Device and connection information
• Browser and operating system details
• IP address and location data
• Platform usage patterns
• Marketing campaign data`
        }
      ]
    },
    {
      title: "How We Use Your Information",
      content: `We use the information we collect for various purposes, including:
• Providing and maintaining our services
• Personalizing your experience
• Improving our AI algorithms
• Processing your transactions
• Sending administrative information
• Providing customer support
• Marketing and promotional communications (with your consent)
• Analyzing usage patterns
• Ensuring platform security`
    },
    {
      title: "Data Security",
      content: `We implement appropriate technical and organizational security measures to protect your information, including:
• Encryption of sensitive data
• Regular security assessments
• Access controls and authentication
• Secure data storage
• Regular security updates
• Employee training on data protection

However, please note that no method of transmission over the internet or electronic storage is 100% secure.`
    }
  ]

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
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Privacy <span className="text-indigo-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your data.
            </p>
          </motion.div>
        </section>

        {/* Content Sections */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="divide-y divide-gray-100">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="py-12 first:pt-0 last:pb-0"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="md:w-1/4 flex-shrink-0">
                      <h2 className="text-2xl font-bold text-indigo-600 md:sticky md:top-24">
                        {section.title}
                      </h2>
                    </div>
                    
                    <div className="md:w-3/4">
                      {section.subsections ? (
                        <div className="space-y-8">
                          {section.subsections.map((subsection, subIndex) => (
                            <div key={subIndex} className="prose prose-lg max-w-none">
                              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {subsection.subtitle}
                              </h3>
                              <div className="text-gray-600">
                                {subsection.content.split('\n').map((paragraph, pIndex) => (
                                  <p key={pIndex} className="mb-4 leading-relaxed">
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="prose prose-lg max-w-none text-gray-600">
                          {section.content.split('\n').map((paragraph, pIndex) => (
                            <p key={pIndex} className="mb-4 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default PrivacyPolicyPage
