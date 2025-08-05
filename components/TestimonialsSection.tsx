'use client'

import React, { useEffect, useRef, useState } from 'react'
import TestimonialCard from './ui/TestimonialCard'
import { motion } from 'framer-motion'

const TestimonialsSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of section is visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      content: 'ADmyBRAND AI Suite has transformed our marketing efforts. Our engagement rates have doubled while cutting our ad spend by 30%. The AI recommendations are spot on!',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'GrowthHack Labs',
      content: 'The automation features alone are worth the price. We\'ve saved hundreds of hours on campaign management and our ROI has never been better.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Digital Strategist',
      company: 'Creative Minds Agency',
      content: 'I\'ve used many marketing tools over the years, but ADmyBRAND stands out for its intuitive interface and powerful AI capabilities. It\'s become indispensable to our workflow.',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      name: 'David Wilson',
      role: 'Founder',
      company: 'StartUp Ventures',
      content: 'As a small business, we needed a solution that could compete with the big players. ADmyBRAND gave us that edge with their smart targeting and optimization features.',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ]

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-white"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Marketers Worldwide</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don not just take our word for it. Here is what our customers say.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                avatar={testimonial.avatar}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection