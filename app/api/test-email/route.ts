import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function GET() {
  try {
    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({
        success: false,
        error: 'RESEND_API_KEY not set in environment variables'
      }, { status: 500 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Test email send
    console.log('Testing Resend email with API key:', process.env.RESEND_API_KEY.substring(0, 10) + '...')

    const result = await resend.emails.send({
      from: 'sihlhack <noreply@sihlhack.ch>',
      to: 'hallo@sihlhack.ch',
      subject: 'Test Email from Team Red',
      html: `
        <div style="font-family: monospace;">
          <h1>Test Email</h1>
          <p>This is a test email from the Team Red application system.</p>
          <p>Timestamp: ${new Date().toISOString()}</p>
        </div>
      `,
    })

    console.log('Resend API response:', result)

    return NextResponse.json({
      success: true,
      result,
      message: 'Test email sent successfully'
    })
  } catch (error: any) {
    console.error('Test email error:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      statusCode: error.statusCode,
      response: error.response
    })

    return NextResponse.json({
      success: false,
      error: error.message,
      details: {
        name: error.name,
        statusCode: error.statusCode,
      }
    }, { status: 500 })
  }
}
