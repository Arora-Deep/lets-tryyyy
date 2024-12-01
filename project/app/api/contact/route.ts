import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Send email using Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@deepcloud.in',
      subject: `New Contact Request from ${body.firstName} ${body.lastName}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Company:</strong> ${body.company}</p>
        <p><strong>Company Size:</strong> ${body.companySize}</p>
        <p><strong>Interested In:</strong> ${body.interestedIn}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email' 
      },
      { status: 500 }
    );
  }
}