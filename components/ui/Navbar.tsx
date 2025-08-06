'use client'

import React, { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Button from './Button'
import Link from 'next/link'
import AuthForm from './AuthForm'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeForm, setActiveForm] = useState<'signin' | 'signup' | 'get-started' | null>(null)
  const [isNavigating, setIsNavigating] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [currentHash, setCurrentHash] = useState('')
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
    setCurrentHash(window.location.hash)

    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleMenuClose = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'auto' // Re-enable scrolling
  }

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : 'auto'
      return !prev
    })
  }

  const openForm = (type: 'signin' | 'signup' | 'get-started') => {
    setActiveForm(type)
    handleMenuClose()
  }

  const handleNavigation = async (id: string) => {
    handleMenuClose()
    
    if (pathname === '/') {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', `#${id}`)
        setCurrentHash(`#${id}`)
      }
      return
    }
    
    setIsNavigating(true)
    try {
      await router.push(`/#${id}`)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } finally {
      setIsNavigating(false)
    }
  }

  useEffect(() => {
    handleMenuClose()
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (
        isMenuOpen && 
        !target.closest('.mobile-menu-container') && 
        !target.closest('button[aria-label*="menu"]')
      ) {
        handleMenuClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' }
  ]

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex-shrink-0 flex items-center"
              onClick={handleMenuClose}
            >
              <span className="text-xl font-bold text-indigo-600">ADmyBRAND</span>
              <span className="ml-1 text-xl font-bold text-gray-800">AI Suite</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  pathname === '/' && isClient && currentHash === `#${item.id}`
                    ? 'text-indigo-600'
                    : 'text-gray-900 hover:text-indigo-600'
                }`}
                onClick={(e) => {
                  if (pathname === '/') {
                    e.preventDefault()
                    handleNavigation(item.id)
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              variant="outline" 
              size="sm" 
              className="ml-4"
              onClick={() => openForm('signin')}
              disabled={isNavigating}
            >
              {isNavigating ? 'Loading...' : 'Sign In'}
            </Button>
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => openForm('get-started')}
              disabled={isNavigating}
            >
              {isNavigating ? 'Loading...' : 'Get Started'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleMenuToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <svg 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              ) : (
                <svg 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`mobile-menu-container md:hidden transition-all duration-200 ease-in-out ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 max-h-screen visible' 
              : 'opacity-0 -translate-y-2 max-h-0 invisible'
          }`}
          aria-hidden={!isMenuOpen}
          style={{ overflow: 'hidden' }}
        >
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`block w-full text-left px-3 py-2 text-base font-medium ${
                  pathname === '/' && isClient && currentHash === `#${item.id}`
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
                disabled={isNavigating}
              >
                {isNavigating ? 'Loading...' : item.label}
              </button>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="space-y-3 px-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full justify-center"
                onClick={() => openForm('signin')}
                disabled={isNavigating}
              >
                {isNavigating ? 'Loading...' : 'Sign In'}
              </Button>
              <Button 
                variant="primary" 
                size="sm"
                className="w-full justify-center"
                onClick={() => openForm('get-started')}
                disabled={isNavigating}
              >
                {isNavigating ? 'Loading...' : 'Get Started'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AuthForm 
        isOpen={activeForm !== null}
        onClose={() => setActiveForm(null)}
        type={activeForm || 'signin'}
      />
    </nav>
  )
}

export default Navbar