import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const formData = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: process.env.NEXT_EMAIL_SERVER_SECURE === 'true',
    auth: {
      user: process.env.NEXT_EMAIL_SERVER_USER,
      pass: process.env.NEXT_EMAIL_SERVER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_EMAIL_FROM,
    to: 'comms@bleaum.io',
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