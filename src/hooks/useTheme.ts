'use client'

import { useState, useEffect } from 'react'

export interface UseThemeReturn {
  theme: 'light' | 'dark' | null
  isDark: boolean
  toggleTheme: () => void
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  systemTheme: 'light' | 'dark'
  mounted: boolean
}

export function useTheme(): UseThemeReturn {
  const [mounted, setMounted] = useState(false)
  const [theme, setThemeState] = useState<'light' | 'dark' | null>(null)
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    setMounted(true)
    
    const updateSystemTheme = (matches: boolean) => {
      setSystemTheme(matches ? 'dark' : 'light')
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    updateSystemTheme(mediaQuery.matches)

    const handleSystemChange = (e: MediaQueryListEvent) => {
      updateSystemTheme(e.matches)
    }

    mediaQuery.addEventListener('change', handleSystemChange)

    // Check current theme
    const isDarkClass = document.documentElement.classList.contains('dark')
    setThemeState(isDarkClass ? 'dark' : 'light')

    // Listen for theme changes
    const handleThemeChange = (e: CustomEvent) => {
      setThemeState(e.detail.theme)
    }

    window.addEventListener('themeChanged', handleThemeChange as EventListener)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemChange)
      window.removeEventListener('themeChanged', handleThemeChange as EventListener)
    }
  }, [])

  const setTheme = (newTheme: 'light' | 'dark' | 'system') => {
    if (!mounted) return

    let targetTheme: 'light' | 'dark'
    
    if (newTheme === 'system') {
      targetTheme = systemTheme
      localStorage.removeItem('theme')
    } else {
      targetTheme = newTheme
      localStorage.setItem('theme', newTheme)
    }

    setThemeState(targetTheme)

    if (targetTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    document.documentElement.setAttribute('data-theme', targetTheme)

    window.dispatchEvent(new CustomEvent('themeChanged', {
      detail: { theme: targetTheme }
    }))
  }

  const toggleTheme = () => {
    if (!mounted || theme === null) return
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return {
    theme,
    isDark: theme === 'dark',
    toggleTheme,
    setTheme,
    systemTheme,
    mounted
  }
}