'use client'

import React from 'react'

import Card from './Card'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card variant="elevated" className="h-full hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-start">
        <div className="p-3 bg-indigo-50 rounded-lg mb-4 text-indigo-600">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  )
}

export default FeatureCard