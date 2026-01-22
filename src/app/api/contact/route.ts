import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    const { name, company, email, message } = body;

    // Validate required fields
    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Next FTD <hello@nextftd.com>",
      to: [process.env.CONTACT_EMAIL || "Dane@NextFTD.com"],
      replyTo: email,
      subject: `New Inquiry from ${name} at ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0a0a0a; padding: 30px; border-radius: 10px;">
            <h1 style="color: #39FF14; margin: 0 0 20px 0; font-size: 24px;">
              New Contact Form Submission
            </h1>

            <div style="background: #1a1a1a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="color: #888; margin: 0 0 5px 0; font-size: 12px; text-transform: uppercase;">Name</p>
              <p style="color: #fff; margin: 0 0 15px 0; font-size: 16px;">${name}</p>

              <p style="color: #888; margin: 0 0 5px 0; font-size: 12px; text-transform: uppercase;">Company</p>
              <p style="color: #fff; margin: 0 0 15px 0; font-size: 16px;">${company}</p>

              <p style="color: #888; margin: 0 0 5px 0; font-size: 12px; text-transform: uppercase;">Email</p>
              <p style="color: #fff; margin: 0 0 15px 0; font-size: 16px;">
                <a href="mailto:${email}" style="color: #39FF14;">${email}</a>
              </p>

              <p style="color: #888; margin: 0 0 5px 0; font-size: 12px; text-transform: uppercase;">Message</p>
              <p style="color: #fff; margin: 0; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <p style="color: #666; font-size: 12px; margin: 0;">
              Sent from Next FTD contact form • ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We will get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "An error occurred processing your request" },
      { status: 500 }
    );
  }
}
