'use client'

import React, { useState } from 'react'
import Button from './Button'
import Link from 'next/link'
import AuthForm from './AuthForm'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeForm, setActiveForm] = useState<'signin' | 'signup' | 'get-started' | null>(null)

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  const openForm = (type: 'signin' | 'signup' | 'get-started') => {
    setActiveForm(type)
  }

  const scrollToId = (id: string) => {
    handleMenuClose()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">ADmyBRAND</span>
              <span className="ml-1 text-xl font-bold text-gray-800">AI Suite</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link href="/#hero" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Home</Link>
            <Link href="/#features"  className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Features</Link>
            <Link href="/#pricing"  className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Pricing</Link>
            <Link href="/#testimonials" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Testimonials</Link>
            <Link href="/#faq" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200">FAQ</Link>
            <Button variant="outline" size="sm" className="ml-4" onClick={() => openForm('signin')}>Sign In</Button>
            <Button variant="primary" size="sm" onClick={() => openForm('get-started')}>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <svg className={`absolute inset-0 w-6 h-6 transition-all duration-300 transform ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <svg className={`absolute inset-0 w-6 h-6 transition-all duration-300 transform ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`transform md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 max-h-[500px]' : 'opacity-0 -translate-y-2 max-h-0 pointer-events-none'}`} style={{ overflow: 'hidden' }}>
          <div className="pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToId('hero')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Home</button>
            <button onClick={() => scrollToId('features')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Features</button>
            <button onClick={() => scrollToId('pricing')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Pricing</button>
            <button onClick={() => scrollToId('testimonials')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Testimonials</button>
            <button onClick={() => scrollToId('faq')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">FAQ</button>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="space-y-3 p-4">
              <Button variant="outline" size="sm" className="w-full justify-center transition-transform duration-200 hover:scale-[1.02]" onClick={() => { handleMenuClose(); openForm('signin') }}>Sign In</Button>
              <Button variant="primary" size="sm" className="w-full justify-center transition-transform duration-200 hover:scale-[1.02]" onClick={() => { handleMenuClose(); openForm('get-started') }}>Get Started</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Auth */}
      <AuthForm isOpen={activeForm !== null} onClose={() => setActiveForm(null)} type={activeForm || 'signin'} />
    </nav>
  )
}

export default Navbar
