'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  User, 
  Code, 
  FolderOpen, 
  MessageCircle, 
  BookOpen,
  Menu,
  X
} from 'lucide-react'

const primaryNavItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/projects', label: 'Projects', icon: FolderOpen },
  { href: '/contact', label: 'Contact', icon: MessageCircle },
]

const secondaryNavItems = [
  { href: '/skills', label: 'Skills', icon: Code },
  { href: '/blog', label: 'Blog', icon: BookOpen },
  { href: '/case-studies', label: 'Case Studies', icon: FolderOpen },
  { href: '/testimonials', label: 'Reviews', icon: MessageCircle },
]

export default function MobileBottomNav() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsExpanded(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname === href
  }

  const handleNavClick = () => {
    setIsExpanded(false)
  }

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      {/* Secondary Navigation (expanded) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-20 left-4 right-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 md:hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                {secondaryNavItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleNavClick}
                      className={`flex flex-col items-center p-3 rounded-xl transition-all duration-200 ${
                        isActive(item.href)
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      <Icon size={20} className="mb-1" />
                      <span className="text-xs font-medium">{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Navigation */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ 
          y: isVisible ? 0 : 100,
          scale: isVisible ? 1 : 0.95
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed bottom-4 left-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl z-50 md:hidden border border-gray-200/50 dark:border-gray-700/50"
      >
        <div className="flex items-center justify-between px-2 py-2">
          {primaryNavItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`relative flex flex-col items-center p-3 rounded-xl transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="relative"
                >
                  <Icon size={22} />
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
                    />
                  )}
                </motion.div>
                <span className="text-xs font-medium mt-1">{item.label}</span>
              </Link>
            )
          })}
          
          {/* More Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex flex-col items-center p-3 rounded-xl transition-all duration-200 ${
              isExpanded
                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isExpanded ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
            <span className="text-xs font-medium mt-1">More</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Safe area for bottom navigation */}
      <div className="h-20 md:hidden" />
    </>
  )
}