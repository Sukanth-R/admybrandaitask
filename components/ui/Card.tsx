'use client'

import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outline'
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const baseClasses = 'rounded-xl p-6'

  const variantClasses = {
    default: 'bg-white',
    elevated: 'bg-white shadow-lg',
    outline: 'bg-white border border-gray-200',
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card