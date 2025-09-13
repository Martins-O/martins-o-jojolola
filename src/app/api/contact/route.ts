import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { rateLimit, getClientIP } from '@/lib/rate-limit'
import { emailService } from '@/lib/email'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request)
    const rateLimitResult = rateLimit(clientIP, 3, 15 * 60 * 1000) // 3 requests per 15 minutes
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { 
          error: `Too many requests. Please try again in ${Math.ceil(rateLimitResult.resetTime / 60)} minutes.`,
          rateLimitExceeded: true
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.resetTime.toString()
          }
        }
      )
    }

    const body = await request.json()
    
    // Validate the request body
    const result = contactFormSchema.safeParse(body)
    
    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.issues },
        { status: 400 }
      )
    }

    const { name, email, service, subject, message } = result.data

    // Basic spam detection
    const spamKeywords = ['viagra', 'casino', 'loan', 'bitcoin investment', 'guaranteed profit', 'click here', 'limited time']
    const messageText = `${name} ${email} ${subject} ${message}`.toLowerCase()
    const hasSpam = spamKeywords.some(keyword => messageText.includes(keyword))
    
    if (hasSpam) {
      return NextResponse.json(
        { error: 'Message flagged as potential spam. Please contact directly via email.' },
        { status: 400 }
      )
    }

    // Check for suspicious patterns
    const urlPattern = /https?:\/\/[^\s]+/gi
    const urlCount = (message.match(urlPattern) || []).length
    
    if (urlCount > 2) {
      return NextResponse.json(
        { error: 'Too many URLs in message. Please contact directly via email.' },
        { status: 400 }
      )
    }

    const timestamp = new Date().toISOString()
    
    // Prepare email data
    const emailData = {
      name,
      email,
      service,
      subject,
      message,
      ip: clientIP,
      timestamp
    }

    // Log the form submission with security info
    console.log('Contact form submission:', {
      ...emailData,
      userAgent: request.headers.get('user-agent')
    })

    // Send notification email to yourself
    const emailResult = await emailService.sendContactEmail(emailData)
    
    if (!emailResult.success) {
      console.error('Failed to send notification email:', emailResult.error)
      // Don't fail the request if email fails, but log it
    }

    // Send confirmation email to user
    const confirmationResult = await emailService.sendConfirmationEmail(email, name)
    
    if (!confirmationResult.success) {
      console.error('Failed to send confirmation email:', confirmationResult.error)
    }

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 800))

    return NextResponse.json(
      { 
        message: 'Thank you for your message! I\'ll get back to you within 24 hours.',
        success: true 
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': rateLimitResult.limit.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': rateLimitResult.resetTime.toString()
        }
      }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint is working' },
    { status: 200 }
  )
}