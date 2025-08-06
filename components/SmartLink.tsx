'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface SmartLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

const SmartLink: React.FC<SmartLinkProps> = ({ href, children, className }) => {
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const handleResize = () => setIsMobile(mediaQuery.matches)

    handleResize() // check immediately
    mediaQuery.addEventListener('change', handleResize)

    return () => {
      mediaQuery.removeEventListener('change', handleResize)
    }
  }, [])

  if (isMobile) {
    return (
      <button
        className={className}
        onClick={() => router.push(href)}
      >
        {children}
      </button>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export default SmartLink
