'use client'

import React from 'react'
import Button from './Button'
import Card from './Card'

interface PricingCardProps {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  isPopular?: boolean
  ctaText: string
  onCtaClick: () => void
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  ctaText,
  onCtaClick,
}) => {
  return (
    <Card
      variant="elevated"
      className={`relative overflow-hidden ${isPopular ? 'border-2 border-indigo-500' : ''}`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
          Popular
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600">/{period}</span>
        </div>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <Button
          variant={isPopular ? 'primary' : 'outline'}
          size="lg"
          className="w-full"
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      </div>
    </Card>
  )
}

export default PricingCard