import { NextRequest } from 'next/server'

interface RateLimitData {
  count: number
  resetTime: number
}

const rateLimitMap = new Map<string, RateLimitData>()

// Clean up old entries every hour
setInterval(() => {
  const now = Date.now()
  for (const [key, data] of rateLimitMap.entries()) {
    if (now > data.resetTime) {
      rateLimitMap.delete(key)
    }
  }
}, 60 * 60 * 1000) // 1 hour

export function rateLimit(
  identifier: string,
  limit: number = 5,
  windowMs: number = 15 * 60 * 1000 // 15 minutes
) {
  const now = Date.now()
  const key = `rate_limit:${identifier}`
  
  let rateLimitData = rateLimitMap.get(key)
  
  if (!rateLimitData || now > rateLimitData.resetTime) {
    rateLimitData = {
      count: 0,
      resetTime: now + windowMs
    }
  }
  
  rateLimitData.count++
  rateLimitMap.set(key, rateLimitData)
  
  const remaining = Math.max(0, limit - rateLimitData.count)
  const resetTime = Math.ceil((rateLimitData.resetTime - now) / 1000)
  
  return {
    success: rateLimitData.count <= limit,
    remaining,
    resetTime,
    limit
  }
}

export function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIP) {
    return realIP
  }
  
  return 'unknown'
}