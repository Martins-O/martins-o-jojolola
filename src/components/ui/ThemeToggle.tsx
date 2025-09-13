'use client'

import { useState, useEffect, useCallback } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  const initializeTheme = useCallback(() => {
    try {
      const savedTheme = localStorage.getItem('theme')
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
      const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPreference)
      
      setIsDark(shouldBeDark)
      
      if (shouldBeDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } catch (error) {
      console.warn('Failed to initialize theme:', error)
      // Fallback to system preference
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(systemPreference)
      if (systemPreference) {
        document.documentElement.classList.add('dark')
      }
    }
  }, [])

  useEffect(() => {
    setMounted(true)
    initializeTheme()

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      try {
        const savedTheme = localStorage.getItem('theme')
        if (!savedTheme) {
          // Only update if user hasn't set a preference
          setIsDark(e.matches)
          if (e.matches) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        }
      } catch (error) {
        console.warn('Failed to handle system theme change:', error)
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [initializeTheme])

  const toggleTheme = useCallback(() => {
    try {
      const newTheme = !isDark
      setIsDark(newTheme)
      
      if (newTheme) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
      
      // Trigger a custom event for other components that might need to know
      window.dispatchEvent(new CustomEvent('themeChanged', { 
        detail: { theme: newTheme ? 'dark' : 'light' } 
      }))
    } catch (error) {
      console.warn('Failed to toggle theme:', error)
    }
  }, [isDark])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-6 h-6">
        <Sun 
          size={24} 
          className={`absolute inset-0 transform transition-all duration-300 ${
            isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          } text-yellow-500`} 
        />
        <Moon 
          size={24} 
          className={`absolute inset-0 transform transition-all duration-300 ${
            isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          } text-blue-500`} 
        />
      </div>
    </motion.button>
  )
}