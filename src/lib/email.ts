// Email service integration
// This file provides a foundation for email services
// Replace with your preferred email service (SendGrid, Resend, etc.)

export interface EmailData {
  name: string
  email: string
  service?: string
  subject: string
  message: string
  ip?: string
  timestamp?: string
}

export interface EmailResponse {
  success: boolean
  messageId?: string
  error?: string
}

class EmailService {
  private apiKey: string | undefined
  private fromEmail: string
  private toEmail: string

  constructor() {
    this.apiKey = process.env.EMAIL_API_KEY
    this.fromEmail = process.env.FROM_EMAIL || 'noreply@martins-jojolola.dev'
    this.toEmail = process.env.TO_EMAIL || 'jojololamartins686@gmail.com'
  }

  async sendContactEmail(data: EmailData): Promise<EmailResponse> {
    try {
      // Template for the email content
      const emailHtml = this.generateEmailTemplate(data)
      const emailText = this.generateEmailText(data)

      // For now, we'll log the email content
      // In production, integrate with your preferred email service
      console.log('Email would be sent:', {
        to: this.toEmail,
        from: this.fromEmail,
        subject: `Portfolio Contact: ${data.subject}`,
        html: emailHtml,
        text: emailText
      })

      // Simulate email sending
      const messageId = `msg_${Date.now()}_${Math.random().toString(36).substring(7)}`
      
      return {
        success: true,
        messageId
      }

      /* 
      Example with SendGrid:
      
      const msg = {
        to: this.toEmail,
        from: this.fromEmail,
        subject: `Portfolio Contact: ${data.subject}`,
        html: emailHtml,
        text: emailText,
      }

      const response = await sgMail.send(msg)
      return {
        success: true,
        messageId: response[0].headers['x-message-id']
      }
      */

    } catch (error) {
      console.error('Email sending error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  async sendConfirmationEmail(email: string, name: string): Promise<EmailResponse> {
    try {
      const confirmationHtml = this.generateConfirmationTemplate(name)
      const confirmationText = this.generateConfirmationText(name)

      console.log('Confirmation email would be sent:', {
        to: email,
        from: this.fromEmail,
        subject: 'Thank you for contacting Martins O Jojolola',
        html: confirmationHtml,
        text: confirmationText
      })

      return {
        success: true,
        messageId: `conf_${Date.now()}`
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  private generateEmailTemplate(data: EmailData): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1f2937; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #374151; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
            .metadata { font-size: 12px; color: #6b7280; margin-top: 20px; padding-top: 15px; border-top: 1px solid #d1d5db; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${data.email}</div>
              </div>
              ${data.service ? `<div class="field">
                <div class="label">Service Interest:</div>
                <div class="value">${data.service}</div>
              </div>` : ''}
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${data.subject}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="metadata">
                <strong>Submission Details:</strong><br>
                IP Address: ${data.ip || 'Unknown'}<br>
                Timestamp: ${data.timestamp || new Date().toISOString()}<br>
                Source: Portfolio Contact Form
              </div>
            </div>
          </div>
        </body>
      </html>
    `
  }

  private generateEmailText(data: EmailData): string {
    return `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.service ? `Service Interest: ${data.service}` : ''}
Subject: ${data.subject}

Message:
${data.message}

---
Submission Details:
IP Address: ${data.ip || 'Unknown'}
Timestamp: ${data.timestamp || new Date().toISOString()}
Source: Portfolio Contact Form
    `.trim()
  }

  private generateConfirmationTemplate(name: string): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Thank you for your message</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .footer { text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #d1d5db; font-size: 14px; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You!</h1>
              <p>Your message has been received</p>
            </div>
            <div class="content">
              <p>Hi ${name},</p>
              
              <p>Thank you for reaching out through my portfolio website. I've received your message and will get back to you within 24 hours.</p>
              
              <p>In the meantime, feel free to:</p>
              <ul>
                <li>Check out my <a href="https://martins-jojolola.dev/projects">projects</a></li>
                <li>Read my <a href="https://martins-jojolola.dev/blog">technical articles</a></li>
                <li>Connect with me on <a href="https://linkedin.com/in/martins-jojolola">LinkedIn</a></li>
                <li>View my <a href="https://github.com/martins-jojolola">GitHub</a></li>
              </ul>

              <p>Best regards,<br>
              <strong>Martins O Jojolola</strong><br>
              QA Engineer | Backend Developer | Blockchain Developer</p>
              
              <div class="footer">
                <p>This is an automated response. Please don't reply to this email.</p>
                <p>For urgent matters, contact: jojololamartins686@gmail.com</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `
  }

  private generateConfirmationText(name: string): string {
    return `
Hi ${name},

Thank you for reaching out through my portfolio website. I've received your message and will get back to you within 24 hours.

In the meantime, feel free to:
- Check out my projects: https://martins-jojolola.dev/projects
- Read my technical articles: https://martins-jojolola.dev/blog
- Connect with me on LinkedIn: https://linkedin.com/in/martins-jojolola
- View my GitHub: https://github.com/martins-jojolola

Best regards,
Martins O Jojolola
QA Engineer | Backend Developer | Blockchain Developer

---
This is an automated response. Please don't reply to this email.
For urgent matters, contact: jojololamartins686@gmail.com
    `.trim()
  }
}

export const emailService = new EmailService()