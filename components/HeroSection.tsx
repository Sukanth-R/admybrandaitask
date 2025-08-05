'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from './ui/Button'
import AuthForm from './ui/AuthForm'
import Navbar from './ui/Navbar'
import { motion } from 'framer-motion'

const HeroSection: React.FC = () => {
  const [showAuthForm, setShowAuthForm] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const imageItem = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3 } }
  }

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://as2.ftcdn.net/jpg/02/92/17/97/1000_F_292179782_fsxIk4LfEKhkpV6XEJkuhYQdaY4zppdK.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-indigo-900/80 to-blue-900/90"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
      </div>

      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-[100px] lg:px-8 py-20 md:py-28">
        <motion.div 
          className="relative"
          variants={container}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
        >
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              variants={item}
            >
              Transform Your Marketing with <span className="text-gray-900">AI Power</span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto"
              variants={item}
            >
              ADmyBRAND AI Suite automates your marketing campaigns, boosts engagement, and maximizes ROI with cutting-edge artificial intelligence.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              variants={item}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => setShowAuthForm(true)}
              >
                Get Started - It is Free
              </Button>
              <Button variant="primary" size="lg">
                Watch Demo
              </Button>
            </motion.div>

            <AuthForm 
              isOpen={showAuthForm}
              onClose={() => setShowAuthForm(false)}
              type="get-started"
            />
          </div>
          
          <motion.div 
            className="mt-16 md:mt-20"
            variants={imageItem}
          >
            <div className="relative rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-indigo-600 opacity-10"></div>
              <Image
                src="https://framerusercontent.com/images/ZHfo1O8H8PpzDiRGQexDwPBtZpA.png"
                alt="ADmyBRAND AI Suite Dashboard"
                width={2070}
                height={1380}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection