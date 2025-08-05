'use client'

import React, { useState } from 'react'
import PricingCard from './ui/PricingCard'
import AuthForm from './ui/AuthForm'
import { motion } from 'framer-motion'

const PricingSection: React.FC = () => {
  const [showAuthForm, setShowAuthForm] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')

  const handlePlanClick = (plan: string) => {
    setSelectedPlan(plan)
    setShowAuthForm(true)
  }

  const plans = [
    {
      title: 'Starter',
      price: '$29',
      period: 'month',
      description: 'Perfect for small businesses and startups',
      features: [
        '5 social media accounts',
        'Basic analytics',
        'Email support',
        'Up to 10,000 contacts',
        'AI content suggestions'
      ],
      isPopular: false,
      ctaText: 'Start Free Trial'
    },
    {
      title: 'Professional',
      price: '$99',
      period: 'month',
      description: 'For growing businesses with more needs',
      features: [
        '15 social media accounts',
        'Advanced analytics',
        'Priority support',
        'Up to 50,000 contacts',
        'AI campaign optimization',
        'Multi-user access'
      ],
      isPopular: true,
      ctaText: 'Start Free Trial'
    },
    {
      title: 'Enterprise',
      price: '$299',
      period: 'month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited social accounts',
        'Premium analytics',
        '24/7 dedicated support',
        'Unlimited contacts',
        'Custom AI models',
        'API access',
        'Dedicated account manager'
      ],
      isPopular: false,
      ctaText: 'Contact Sales'
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans come with a 14-day free trial.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <PricingCard
                title={plan.title}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                ctaText={plan.ctaText}
                onCtaClick={() => handlePlanClick(plan.title)}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-gray-600">
            Need something custom? <a href="#" className="text-indigo-600 hover:underline">Contact our sales team</a>.
          </p>
        </motion.div>
      </div>

      <AuthForm 
        isOpen={showAuthForm}
        onClose={() => setShowAuthForm(false)}
        type="get-started"
      />
    </section>
  )
}

export default PricingSection