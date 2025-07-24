import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const formData = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: process.env.EMAIL_SERVER_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: 'comms@bleaum.io',
    subject: 'New Referral Submission',
    text: `
Referral Type: ${formData.referralType}
Your Name: ${formData.yourFirstName} ${formData.yourLastName}
Your Email: ${formData.yourEmail}
Your Phone: ${formData.yourPhone}
Referral Name: ${formData.referralFirstName} ${formData.referralLastName}
Referral Email: ${formData.referralEmail}
Referral Shop Name: ${formData.referralShopName}
Referral Phone: ${formData.referralPhone}
Referral State: ${formData.referralState}
Referral Zip: ${formData.referralZip}
Referral Notified: ${formData.referralNotified}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Referral email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending referral email:', error);
    return NextResponse.json({ message: 'Error sending referral email.', error }, { status: 500 });
  }
} 