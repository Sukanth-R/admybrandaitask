'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/Footer'

const TermsOfServicePage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const sections = [
    {
      title: "Agreement Overview",
      content: `Last Updated: August 5, 2025

These Terms of Service ("Terms") govern your access to and use of ADmyBRAND AI Suite's services, including our website, platform, and AI-powered marketing tools (collectively, the "Services"). By using our Services, you agree to be bound by these Terms.

Please read these Terms carefully before using our Services. If you do not agree to these Terms, do not use our Services.`
    },
    {
      title: "Account Terms",
      subsections: [
        {
          subtitle: "Account Registration",
          content: `To access our Services, you must:
• Be at least 18 years old
• Complete the registration process
• Provide accurate and complete information
• Maintain the security of your account
• Accept responsibility for all activities under your account`
        },
        {
          subtitle: "Account Security",
          content: `You are responsible for:
• Maintaining the confidentiality of your password
• Restricting access to your account
• Notifying us immediately of any unauthorized access
• Ensuring your account information is accurate and up-to-date`
        }
      ]
    },
    {
      title: "Service Usage",
      subsections: [
        {
          subtitle: "Acceptable Use",
          content: `When using our Services, you agree to:
• Comply with all applicable laws and regulations
• Respect intellectual property rights
• Use the Services only for lawful purposes
• Not engage in any unauthorized automated access
• Not interfere with the proper functioning of the Services`
        },
        {
          subtitle: "API and Data Usage",
          content: `Our Services may include API access and data processing. You agree to:
• Follow our API documentation and guidelines
• Respect rate limits and usage quotas
• Use data only as permitted by our Terms and applicable laws
• Maintain appropriate security measures
• Not attempt to reverse engineer our systems`
        }
      ]
    },
    {
      title: "Payments and Billing",
      content: `Payment Terms:
• Fees are charged based on your selected plan
• All fees are exclusive of taxes
• Payments are non-refundable unless required by law
• We may change our fees upon notice
• Late payments may result in service suspension

Billing Cycle:
• Subscription fees are billed in advance
• Usage-based fees are billed in arrears
• You must maintain valid payment information`
    },
    {
      title: "Intellectual Property",
      content: `Ownership and Rights:
• We retain all rights to our Services and technology
• You retain rights to your content and data
• Our name, logo, and trademarks are protected
• You may not use our IP without permission

Your Content:
• You grant us license to host and use your content
• You represent you have rights to content you upload
• We may remove content that violates these Terms`
    },
    {
      title: "Service Modifications",
      content: `We reserve the right to:
• Modify or discontinue any part of the Services
• Change fees or payment terms
• Update these Terms
• Limit feature availability
• Make security or technical modifications

We will provide reasonable notice of material changes.`
    },
    {
      title: "Termination",
      content: `Account termination may occur:
• By your request
• For violation of these Terms
• For extended period of inactivity
• For non-payment of fees
• At our discretion with notice

Upon termination:
• Access to Services will cease
• You must pay outstanding fees
• Some Terms will survive termination`
    },
    {
      title: "Limitation of Liability",
      content: `To the maximum extent permitted by law:
• Services are provided "as is"
• We disclaim all warranties
• We are not liable for indirect damages
• Our liability is limited to fees paid
• We are not responsible for third-party services

These limitations do not affect rights that cannot be waived.`
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24 bg-white text-blue-700">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-white"></div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-blue-600 max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </section>

        {/* Content Sections */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="divide-y divide-gray-200">
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
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="lg:w-1/4 flex-shrink-0">
                      <h2 className="text-2xl font-bold text-blue-600 lg:sticky lg:top-24">
                        {section.title}
                      </h2>
                    </div>
                    
                    <div className="lg:w-3/4">
                      {section.subsections ? (
                        <div className="space-y-8">
                          {section.subsections.map((subsection, subIndex) => (
                            <div key={subIndex}>
                              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {subsection.subtitle}
                              </h3>
                              <div className="prose prose-lg max-w-none text-gray-600">
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

export default TermsOfServicePage
