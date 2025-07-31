import { NextResponse } from 'next/server';

// Test GET handler to see if route is deployed
export async function GET() {
  return NextResponse.json({ 
    message: 'send-email API route is deployed and working!',
    timestamp: new Date().toISOString()
  });
}

export async function POST(request: Request) {
  console.log('=== DEBUG: send-email POST route reached ===');
  
  try {
    const formData = await request.json();
    console.log('Received formData:', formData);

    console.log('Preparing to send email...');
    // Example: const transporter = nodemailer.createTransport(...);
    // const mailOptions = { from: ..., to: ..., subject: ..., text: ... };
    // const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', /* info.response or similar */);

    // Simple response to test
    return NextResponse.json({ 
      message: 'POST request received successfully!', 
      formData: formData,
      timestamp: new Date().toISOString()
    }, { status: 200 });
    
  } catch (error) {
    console.error('Error in send-email route:', error);
    return NextResponse.json({ 
      message: 'Error in API route', 
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
} 