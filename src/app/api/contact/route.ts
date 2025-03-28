import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import validator from 'validator';

export async function POST(request: Request) {
  try {
    const { name, email, message, recaptchaToken } = await request.json();

    // Validate required fields
    if (!name || !email || !message || !recaptchaToken) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Enhanced validation using validator
    if (!validator.isEmail(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }
    if (name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json({ error: 'Name must be between 2 and 100 characters' }, { status: 400 });
    }
    if (message.trim().length < 10 || message.trim().length > 1000) {
      return NextResponse.json({ error: 'Message must be between 10 and 1000 characters' }, { status: 400 });
    }

    // Verify reCAPTCHA v2 token with Google
    const recaptchaSecret = process.env.RECAPTCHA_SECRET;
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
    });
    const recaptchaData = await recaptchaResponse.json();
    if (!recaptchaData.success) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    // Create a Nodemailer transporter using OAuth2 for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@yourdomain.com',
      to: 'crklemz@gmail.com',
      replyTo: email,
      subject: `[Contact Form] New message from ${name}`,
      text: `You have received a new message from your contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      headers: { 'X-Contact-Form': 'true' },
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
