import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Load environment variables
const sendGridApiKey = process.env.SEND_GRID_API_KEY;

// Set SendGrid API key
sgMail.setApiKey(sendGridApiKey!);

// Test GET handler to see if route is deployed
export async function GET() {
  return NextResponse.json({ 
    message: 'send-referral API route is deployed and working!',
    timestamp: new Date().toISOString()
  });
}

export async function POST(request: Request) {
  console.log('=== DEBUG: send-referral POST route reached ===');
  
  try {
    const formData = await request.json();
    console.log('Received formData:', formData);

    console.log('Preparing to send referral email...');
    
    // Define the email options using SendGrid API
    const msg = {
      to: 'hammadhk1717@gmail.com',
      from: 'no-reply@bleaum.io', // Updated from address
      cc: ['backup@bleaum.dev', 'comms@bleaum.io'], // Added CC recipients
      subject: 'New Referral Request',
      text: `New referral request received from ${formData.yourFirstName} ${formData.yourLastName} (${formData.yourEmail})
      
Referral Details:
Referral Name: ${formData.referralFirstName} ${formData.referralLastName}
Referral Email: ${formData.referralEmail}
Referral Shop Name: ${formData.referralShopName}
Referral Phone: ${formData.referralPhone}
Referral State: ${formData.referralState}
Referral Zip: ${formData.referralZip}
Referral Notified: ${formData.referralNotified}
Referral Type: ${formData.referralType || 'Not specified'}

Your Contact Info:
Your Phone: ${formData.yourPhone}`,
      html: `<h2>New Referral Request</h2>
<p><strong>From:</strong> ${formData.yourFirstName} ${formData.yourLastName} (${formData.yourEmail})</p>

<h3>Referral Details:</h3>
<p><strong>Referral Name:</strong> ${formData.referralFirstName} ${formData.referralLastName}</p>
<p><strong>Referral Email:</strong> ${formData.referralEmail}</p>
<p><strong>Referral Shop Name:</strong> ${formData.referralShopName}</p>
<p><strong>Referral Phone:</strong> ${formData.referralPhone}</p>
<p><strong>Referral State:</strong> ${formData.referralState}</p>
<p><strong>Referral Zip:</strong> ${formData.referralZip}</p>
<p><strong>Referral Notified:</strong> ${formData.referralNotified}</p>
<p><strong>Referral Type:</strong> ${formData.referralType || 'Not specified'}</p>

<h3>Your Contact Info:</h3>
<p><strong>Your Phone:</strong> ${formData.yourPhone}</p>`
    };

    // Send the email using SendGrid API
    await sgMail.send(msg);
    console.log('Referral email sent successfully!');

    // Simple response to test
    return NextResponse.json({ 
      message: 'Referral email sent successfully!', 
      formData: formData,
      timestamp: new Date().toISOString()
    }, { status: 200 });
    
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error in send-referral route:', error.message);
      console.error('Stack trace:', error.stack);
    } else {
      console.error('Unknown error in send-referral route:', error);
    }
    return NextResponse.json({ 
      message: 'Error in API route', 
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
} 