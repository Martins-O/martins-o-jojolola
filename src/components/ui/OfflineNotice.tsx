'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wifi, WifiOff, RefreshCw } from 'lucide-react'

export default function OfflineNotice() {
  const [isOnline, setIsOnline] = useState(true)
  const [showNotice, setShowNotice] = useState(false)
  const [isReconnecting, setIsReconnecting] = useState(false)

  useEffect(() => {
    // Check initial connection status
    setIsOnline(navigator.onLine)

    const handleOnline = () => {
      setIsOnline(true)
      setIsReconnecting(false)
      
      // Show "Back online" message briefly
      setShowNotice(true)
      setTimeout(() => {
        setShowNotice(false)
      }, 3000)
    }

    const handleOffline = () => {
      setIsOnline(false)
      setShowNotice(true)
      setIsReconnecting(false)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Show notice if offline on mount
    if (!navigator.onLine) {
      setShowNotice(true)
    }

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const handleRetryConnection = () => {
    setIsReconnecting(true)
    
    // Simple connection test
    fetch('/api/contact', { method: 'HEAD' })
      .then(() => {
        setIsOnline(true)
        setIsReconnecting(false)
        setShowNotice(false)
      })
      .catch(() => {
        setIsReconnecting(false)
        // Keep showing offline notice
      })
  }

  const handleDismiss = () => {
    setShowNotice(false)
  }

  if (!showNotice) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="fixed top-20 left-4 right-4 z-40 mx-auto max-w-md"
      >
        <div className={`rounded-lg shadow-lg border p-4 ${
          isOnline 
            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
            : 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
        }`}>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {isOnline ? (
                <Wifi className="h-5 w-5 text-green-600 dark:text-green-400" />
              ) : (
                <WifiOff className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              )}
            </div>
            
            <div className="ml-3 flex-1">
              <p className={`text-sm font-medium ${
                isOnline 
                  ? 'text-green-800 dark:text-green-200' 
                  : 'text-yellow-800 dark:text-yellow-200'
              }`}>
                {isOnline ? 'Back online!' : 'You\'re offline'}
              </p>
              
              <p className={`text-sm mt-1 ${
                isOnline 
                  ? 'text-green-700 dark:text-green-300' 
                  : 'text-yellow-700 dark:text-yellow-300'
              }`}>
                {isOnline 
                  ? 'Your connection has been restored.'
                  : 'Some features may not be available. Content is cached for offline viewing.'
                }
              </p>
              
              {!isOnline && (
                <div className="mt-3 flex space-x-2">
                  <button
                    onClick={handleRetryConnection}
                    disabled={isReconnecting}
                    className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-700 transition-colors disabled:opacity-50"
                  >
                    {isReconnecting ? (
                      <>
                        <RefreshCw className="w-3 h-3 mr-1 animate-spin" />
                        Checking...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-3 h-3 mr-1" />
                        Retry
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
            
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 ml-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <span className="sr-only">Dismiss</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}