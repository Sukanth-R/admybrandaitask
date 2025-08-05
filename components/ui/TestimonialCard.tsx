
'use client'
import React from 'react'
import Card from './Card'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  content,
  avatar,
}) => {
  return (
    <Card variant="outline" className="h-full">
      <div className="flex flex-col h-full">
        <p className="text-gray-600 mb-6">{content}</p>
        <div className="mt-auto flex items-center">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">
              {role} at {company}
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default TestimonialCard