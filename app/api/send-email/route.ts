import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Load environment variables
const sendGridApiKey = process.env.SEND_GRID_API_KEY;

// Set SendGrid API key
sgMail.setApiKey(sendGridApiKey!);

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
    // console.log('Received formData:', formData);

    console.log('Preparing to send email...');
    
    // Define the email options using SendGrid API
    const msg = {
      to: 'hammadhk1717@gmail.com',
      from: 'no-reply@bleaum.io', // Updated from address
      cc: ['backup@bleaum.dev', 'comms@bleaum.io'], // Added CC recipients
      subject: 'New Demo Request',
      text: `New demo request received from ${formData.firstName} ${formData.lastName} (${formData.email})
      
Company: ${formData.companyName}
Phone: ${formData.phoneNumber}
${formData.jobTitle ? `Job Title: ${formData.jobTitle}` : ''}
${formData.businessWebsite ? `Business Website: ${formData.businessWebsite}` : ''}
${formData.businessType ? `Business Type: ${formData.businessType}` : ''}
${formData.businessDescription ? `Business Description: ${formData.businessDescription}` : ''}
${formData.state ? `State: ${formData.state}` : ''}
${formData.numberOfLocations ? `Number of Locations: ${formData.numberOfLocations}` : ''}
${formData.howHear ? `How they heard about us: ${formData.howHear}` : ''}`,
      html: `<h2>New Demo Request</h2>
<p><strong>From:</strong> ${formData.firstName} ${formData.lastName} (${formData.email})</p>
<p><strong>Company:</strong> ${formData.companyName}</p>
<p><strong>Phone:</strong> ${formData.phoneNumber}</p>
${formData.jobTitle ? `<p><strong>Job Title:</strong> ${formData.jobTitle}</p>` : ''}
${formData.businessWebsite ? `<p><strong>Business Website:</strong> ${formData.businessWebsite}</p>` : ''}
${formData.businessType ? `<p><strong>Business Type:</strong> ${formData.businessType}</p>` : ''}
${formData.businessDescription ? `<p><strong>Business Description:</strong> ${formData.businessDescription}</p>` : ''}
${formData.state ? `<p><strong>State:</strong> ${formData.state}</p>` : ''}
${formData.numberOfLocations ? `<p><strong>Number of Locations:</strong> ${formData.numberOfLocations}</p>` : ''}
${formData.howHear ? `<p><strong>How they heard about us:</strong> ${formData.howHear}</p>` : ''}`
    };

    // Send the email using SendGrid API
    await sgMail.send(msg);
    console.log('Email sent successfully!');

    // Simple response to test
    return NextResponse.json({ 
      message: 'Email sent successfully!', 
      formData: formData,
      timestamp: new Date().toISOString()
    }, { status: 200 });
    
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error in send-email route:', error.message);
      console.error('Stack trace:', error.stack);
    } else {
      console.error('Unknown error in send-email route:', error);
    }
    return NextResponse.json({ 
      message: 'Error in API route', 
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
} 