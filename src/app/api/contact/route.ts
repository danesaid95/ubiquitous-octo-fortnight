import { NextRequest, NextResponse } from "next/server";

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

    // In production, you would integrate with:
    // - Email service (SendGrid, Resend, etc.)
    // - CRM (HubSpot, Salesforce, etc.)
    // - Notification service (Slack, Discord, etc.)

    // Log the submission (in production, replace with actual integration)
    console.log("Contact form submission:", {
      name,
      company,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500));

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
