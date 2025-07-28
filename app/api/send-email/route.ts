import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const formData = await request.json();
  console.log('Received send-email formData:', formData);

  // Log environment variables
  // console.log('NEXT_PUBLIC_EMAIL_SERVER_HOST:', process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST);
  // console.log('NEXT_PUBLIC_EMAIL_SERVER_PORT:', process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT);
  // console.log('NEXT_PUBLIC_EMAIL_SERVER_SECURE:', process.env.NEXT_PUBLIC_EMAIL_SERVER_SECURE);
  // console.log('NEXT_PUBLIC_EMAIL_SERVER_USER:', process.env.NEXT_PUBLIC_EMAIL_SERVER_USER);
  // console.log('NEXT_PUBLIC_EMAIL_SERVER_PASSWORD:', process.env.NEXT_PUBLIC_EMAIL_SERVER_PASSWORD);
  // console.log('NEXT_PUBLIC_EMAIL_FROM:', process.env.NEXT_PUBLIC_EMAIL_FROM);

  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST,
    port: Number(process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT),
    secure: process.env.NEXT_PUBLIC_EMAIL_SERVER_SECURE === 'true',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_SERVER_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_SERVER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_FROM,
    to: process.env.NEXT_PUBLIC_EMAIL_FROM || 'comms@bleaum.io',
    subject: 'New Demo Request',
    text: `
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Phone Number: ${formData.phoneNumber}
Company Name: ${formData.companyName}
State: ${formData.state}
Number of Locations: ${formData.numberOfLocations}
How did you hear about Bleaum?: ${formData.howHear}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email.', error }, { status: 500 });
  }
} 