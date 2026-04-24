// Email service integration using Nodemailer with Gmail
import nodemailer from 'nodemailer';

export interface EmailData {
  name: string;
  email: string;
  service?: string;
  subject: string;
  message: string;
  ip?: string;
  timestamp?: string;
}

export interface EmailResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}

// Get email configuration from environment variables
const getEmailConfig = () => ({
  user: process.env.GMAIL_USER,
  pass: process.env.GMAIL_APP_PASSWORD,
  toEmail: process.env.TO_EMAIL || process.env.GMAIL_USER,
  fromEmail: process.env.FROM_EMAIL || process.env.GMAIL_USER,
});

class EmailService {
  private transporter: nodemailer.Transporter | null = null;

  private getTransporter(): nodemailer.Transporter {
    if (this.transporter) {
      return this.transporter;
    }

    const config = getEmailConfig();

    if (!config.user || !config.pass) {
      throw new Error(
        'Gmail credentials not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD environment variables.'
      );
    }

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });

    return this.transporter;
  }

  async sendContactEmail(data: EmailData): Promise<EmailResponse> {
    try {
      const config = getEmailConfig();
      const transporter = this.getTransporter();

      const emailHtml = this.generateEmailTemplate(data);
      const emailText = this.generateEmailText(data);

      const mailOptions = {
        from: `"Portfolio Contact" <${config.fromEmail}>`,
        to: config.toEmail,
        subject: `Portfolio Contact: ${data.subject}`,
        html: emailHtml,
        text: emailText,
        replyTo: data.email,
      };

      const info = await transporter.sendMail(mailOptions);

      return {
        success: true,
        messageId: info.messageId,
      };
    } catch (error) {
      console.error('Email sending error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async sendConfirmationEmail(
    email: string,
    name: string
  ): Promise<EmailResponse> {
    try {
      const config = getEmailConfig();
      const transporter = this.getTransporter();

      const confirmationHtml = this.generateConfirmationTemplate(name);
      const confirmationText = this.generateConfirmationText(name);

      const mailOptions = {
        from: `"Martins O Jojolola" <${config.fromEmail}>`,
        to: email,
        subject: 'Thank you for contacting Martins O Jojolola',
        html: confirmationHtml,
        text: confirmationText,
      };

      const info = await transporter.sendMail(mailOptions);

      return {
        success: true,
        messageId: info.messageId,
      };
    } catch (error) {
      console.error('Confirmation email error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
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
                <div class="value">${this.escapeHtml(data.name)}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${this.escapeHtml(data.email)}</div>
              </div>
              ${
                data.service
                  ? `<div class="field">
                <div class="label">Service Interest:</div>
                <div class="value">${this.escapeHtml(data.service)}</div>
              </div>`
                  : ''
              }
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${this.escapeHtml(data.subject)}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${this.escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
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
    `;
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
    `.trim();
  }

  private generateConfirmationTemplate(name: string): string {
    const appUrl =
      process.env.NEXT_PUBLIC_APP_URL || 'https://martins-jojolola.dev';
    const contactEmail = process.env.TO_EMAIL || process.env.GMAIL_USER || '';

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Thank you for your message</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981, #14b8a6); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .footer { text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #d1d5db; font-size: 14px; color: #6b7280; }
            a { color: #10b981; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You!</h1>
              <p>Your message has been received</p>
            </div>
            <div class="content">
              <p>Hi ${this.escapeHtml(name)},</p>

              <p>Thank you for reaching out through my portfolio website. I've received your message and will get back to you within 24 hours.</p>

              <p>In the meantime, feel free to:</p>
              <ul>
                <li>Check out my <a href="${appUrl}/projects">projects</a></li>
                <li>Connect with me on <a href="https://linkedin.com/in/martins-o-jojolola">LinkedIn</a></li>
                <li>View my <a href="https://github.com/Martins-O">GitHub</a></li>
              </ul>

              <p>Best regards,<br>
              <strong>Martins O Jojolola</strong><br>
              Smart Contract Engineer | Full-Stack Developer | Web3 Builder</p>

              <div class="footer">
                <p>This is an automated response. Please don't reply to this email.</p>
                ${contactEmail ? `<p>For urgent matters, contact: ${contactEmail}</p>` : ''}
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
  }

  private generateConfirmationText(name: string): string {
    const appUrl =
      process.env.NEXT_PUBLIC_APP_URL || 'https://martins-jojolola.dev';
    const contactEmail = process.env.TO_EMAIL || process.env.GMAIL_USER || '';

    return `
Hi ${name},

Thank you for reaching out through my portfolio website. I've received your message and will get back to you within 24 hours.

In the meantime, feel free to:
- Check out my projects: ${appUrl}/projects
- Connect with me on LinkedIn: https://linkedin.com/in/martins-o-jojolola
- View my GitHub: https://github.com/Martins-O

Best regards,
Martins O Jojolola
Smart Contract Engineer | Full-Stack Developer | Web3 Builder

---
This is an automated response. Please don't reply to this email.
${contactEmail ? `For urgent matters, contact: ${contactEmail}` : ''}
    `.trim();
  }

  private escapeHtml(text: string): string {
    const htmlEntities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
  }
}

export const emailService = new EmailService();
