import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  // Debug: Log that the route is reached
  console.log('=== DEBUG: send-email route reached ===');
  
  try {
    const formData = await request.json();
    console.log('Received send-email formData:', formData);

    // Log environment variables
    console.log('NEXT_PUBLIC_EMAIL_SERVER_HOST:', process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST);
    console.log('NEXT_PUBLIC_EMAIL_SERVER_PORT:', process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT);
    console.log('NEXT_PUBLIC_EMAIL_SERVER_SECURE:', process.env.NEXT_PUBLIC_EMAIL_SERVER_SECURE);
    console.log('NEXT_PUBLIC_EMAIL_SERVER_USER:', process.env.NEXT_PUBLIC_EMAIL_SERVER_USER);
    console.log('NEXT_PUBLIC_EMAIL_SERVER_PASSWORD:', process.env.NEXT_PUBLIC_EMAIL_SERVER_PASSWORD);
    console.log('NEXT_PUBLIC_EMAIL_FROM:', process.env.NEXT_PUBLIC_EMAIL_FROM);

    // Return a test response to see if the route is working
    return NextResponse.json({ 
      message: 'API route is working!', 
      formData: formData,
      envCheck: {
        host: process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST,
        port: process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT,
        from: process.env.NEXT_PUBLIC_EMAIL_FROM
      }
    }, { status: 200 });
    
  } catch (error) {
    console.error('Error in send-email route:', error);
    return NextResponse.json({ 
      message: 'Error in API route', 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 