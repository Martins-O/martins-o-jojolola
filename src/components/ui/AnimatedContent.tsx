'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedContentProps {
  children: ReactNode
  className?: string
  initial?: object
  animate?: object
  transition?: object
}

export default function AnimatedContent({ 
  children, 
  className = "", 
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6 }
}: AnimatedContentProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  )
}