'use client'

import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  const links = [
    {
      title: 'Product',
      items: [
        { name: 'Features', href: '/#features' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQs', href: '#faq' }

      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' }
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'Help Center', href: '/support' },
        { name: 'Contact Us', href: '/support' },
        { name: 'Status', href: '/support' },
        { name: 'Webinars', href: '/support' }
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-indigo-400">ADmyBRAND</span>
              <span className="ml-1 text-3xl font-bold text-white">AI Suite</span>
            </div>
            <p className="mt-4 text-xl text-gray-400">
              Transform your marketing with AI-powered<br></br>  automation and analytics.
            </p>
          </div>
          {links.map((group, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} ADmyBRAND AI Suite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
