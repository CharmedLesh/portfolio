import nodemailer from 'nodemailer';

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return Response.json({ error: 'All fields are required' }, { status: 400 });
  }

  const senderTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_APP_PASSWORD,
    },
  });

  const receiverTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.RECEIVER_EMAIL,
      pass: process.env.RECEIVER_APP_PASSWORD,
    },
  });

  try {
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    await senderTransporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SENDER_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `Portfolio Contact: ${safeSubject}`,
      html: `
        <h3>New message from your portfolio</h3>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, '<br>')}</p>
      `,
    });

    await receiverTransporter.sendMail({
      from: `"Viacheslav Matvieiev" <${process.env.RECEIVER_EMAIL}>`,
      to: email,
      subject: 'Thank you for reaching out!',
      html: `
        <h3>Hi ${safeName},</h3>
        <p>Thank you for your message. I've received it and will get back to you as soon as possible.</p>
        <br>
        <p>Best regards,</p>
        <p>Viacheslav Matvieiev</p>
      `,
    });

    return Response.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Email error:', error.message);
    return Response.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
