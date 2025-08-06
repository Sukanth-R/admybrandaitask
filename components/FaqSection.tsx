'use client'

import React from 'react'
import Accordion from './ui/Accordion'

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: 'How does the AI actually work?',
      answer: 'Our AI uses machine learning algorithms trained on millions of successful marketing campaigns. It analyzes your specific business data, audience behavior, and market trends to provide personalized recommendations and automate optimization.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, all plans come with a 14-day free trial. You can test all features during this period with no credit card required.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely. There are no long-term contracts, and you can cancel your subscription at any time from your account settings.'
    },
    {
      question: 'What platforms do you integrate with?',
      answer: 'We integrate with all major social media platforms (Facebook, Instagram, Twitter, LinkedIn, Pinterest), email marketing services (Mailchimp, SendGrid), and advertising networks (Google Ads, Facebook Ads).'
    },
    {
      question: 'How secure is my data?',
      answer: 'Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with all major data protection regulations including GDPR and CCPA.'
    },
    {
      question: 'Do you offer discounts for nonprofits?',
      answer: 'Yes, we offer special pricing for registered nonprofit organizations. Please contact our sales team with proof of your nonprofit status to learn more.'
    }
  ]

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cannot find what you are looking for?{' '}
            <a 
              href="/contact" 
              className="text-indigo-600 hover:text-indigo-500 font-medium hover:underline transition-colors duration-200"
            >
              Contact our support team
            </a>
          </p>
        </div>
        
        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="transform transition-all duration-200 hover:scale-[1.01]">
              <Accordion 
                title={faq.question}
                className="bg-white rounded-xl"
              >
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center p-1 px-6 bg-indigo-50 rounded-full">
            <svg 
              className="w-5 h-5 text-indigo-500 mr-2" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="text-sm font-medium text-indigo-600">Still have questions?</span>
          </div>
          <p className="mt-4 text-gray-500">
            Our support team is available 24/7 to help you with any questions you may have.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FaqSection