'use client'
import { Share2 } from 'lucide-react'

interface ShareButtonProps {
  title: string
  text: string
  url?: string
  className?: string
}

export default function ShareButton({ title, text, url, className = "" }: ShareButtonProps) {
  const handleShare = () => {
    const shareUrl = url || window.location.href
    
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url: shareUrl,
      })
    } else {
      navigator.clipboard.writeText(shareUrl)
    }
  }

  return (
    <button
      onClick={handleShare}
      className={`inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${className}`}
    >
      <Share2 size={16} className="mr-2" />
      Share
    </button>
  )
}