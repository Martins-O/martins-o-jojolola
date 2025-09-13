'use client'

import { useEffect, useState } from 'react'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { useTheme } from '@/hooks/useTheme'

export default function ThemeTestPage() {
  const [currentTheme, setCurrentTheme] = useState<string>('unknown')
  const [isDarkClass, setIsDarkClass] = useState<boolean>(false)
  const [systemPref, setSystemPref] = useState<string>('unknown')
  
  const { theme, isDark, toggleTheme, setTheme, systemTheme, mounted } = useTheme()

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const savedTheme = localStorage.getItem('theme')
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
      const hasDarkClass = document.documentElement.classList.contains('dark')
      
      setCurrentTheme(savedTheme || (systemPreference ? 'system-dark' : 'system-light'))
      setIsDarkClass(hasDarkClass)
      setSystemPref(systemPreference ? 'Dark' : 'Light')
    }

    checkTheme()

    // Listen for theme changes
    const handleThemeChange = (e: CustomEvent) => {
      console.log('Theme changed to:', e.detail.theme)
      setCurrentTheme(e.detail.theme)
      setIsDarkClass(document.documentElement.classList.contains('dark'))
    }

    window.addEventListener('themeChanged', handleThemeChange as EventListener)
    
    // Also check for class changes
    const observer = new MutationObserver(() => {
      setIsDarkClass(document.documentElement.classList.contains('dark'))
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => {
      window.removeEventListener('themeChanged', handleThemeChange as EventListener)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Theme Toggle Test
        </h1>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Current Theme Status
          </h2>
          
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p><strong>Saved Theme:</strong> {currentTheme}</p>
            <p><strong>Has Dark Class:</strong> {isDarkClass ? 'Yes' : 'No'}</p>
            <p><strong>System Preference:</strong> {systemPref}</p>
            <hr className="my-4 border-gray-300 dark:border-gray-600" />
            <p><strong>Hook Theme:</strong> {mounted ? theme || 'null' : 'not mounted'}</p>
            <p><strong>Hook isDark:</strong> {mounted ? (isDark ? 'Yes' : 'No') : 'not mounted'}</p>
            <p><strong>Hook System:</strong> {mounted ? systemTheme : 'not mounted'}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <ThemeToggle />
          <button 
            onClick={() => mounted && toggleTheme()} 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Hook Toggle
          </button>
          <button 
            onClick={() => mounted && setTheme('light')} 
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Force Light
          </button>
          <button 
            onClick={() => mounted && setTheme('dark')} 
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Force Dark
          </button>
        </div>

        <div className="mb-8">
          <span className="text-gray-600 dark:text-gray-400">
            Test all the buttons above to verify theme switching works correctly
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-2">
              Light Theme Elements
            </h3>
            <p className="text-blue-600 dark:text-blue-300">
              This card should have blue colors that adapt to the current theme.
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-2">
              Dark Theme Elements
            </h3>
            <p className="text-purple-600 dark:text-purple-300">
              This card should have purple colors that adapt to the current theme.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Instructions:
          </h3>
          <ul className="text-gray-600 dark:text-gray-400 space-y-1">
            <li>• Click the theme toggle button to switch between light and dark modes</li>
            <li>• The page should smoothly transition colors</li>
            <li>• The theme preference should persist in localStorage</li>
            <li>• Refresh the page to test theme persistence</li>
          </ul>
        </div>
      </div>
    </div>
  )
}