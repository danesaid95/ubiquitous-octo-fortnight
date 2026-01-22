import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send welcome email to subscriber
    const welcomeEmail = await resend.emails.send({
      from: "Next FTD <hello@nextftd.com>",
      to: [email],
      subject: "Welcome to Next FTD! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0a0a0a; padding: 40px 30px; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #fff; margin: 0; font-size: 28px;">
                <span style="color: #fff;">Next</span>
                <span style="color: #39FF14;">FTD</span>
              </h1>
            </div>

            <h2 style="color: #39FF14; margin: 0 0 20px 0; font-size: 24px;">
              You're In! 🎉
            </h2>

            <p style="color: #ccc; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              Thanks for subscribing to the Next FTD newsletter. You'll be the first to know about:
            </p>

            <ul style="color: #ccc; font-size: 16px; line-height: 1.8; margin: 0 0 25px 0; padding-left: 20px;">
              <li>Latest trends in social media marketing</li>
              <li>Case studies and success stories</li>
              <li>Tips for scaling DTC brands</li>
              <li>Exclusive insights from our team</li>
            </ul>

            <p style="color: #ccc; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
              In the meantime, feel free to explore our services or book a free strategy call.
            </p>

            <div style="text-align: center;">
              <a href="https://nextftd.com/services"
                 style="display: inline-block; background: #39FF14; color: #000; padding: 14px 28px;
                        text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
                Explore Our Services
              </a>
            </div>

            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #333;">
              <p style="color: #666; font-size: 12px; margin: 0; text-align: center;">
                Next FTD • Where Culture Meets Conversion
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (welcomeEmail.error) {
      console.error("Error sending welcome email:", welcomeEmail.error);
    }

    // Notify you about new subscriber
    const notificationEmail = await resend.emails.send({
      from: "Next FTD <hello@nextftd.com>",
      to: [process.env.CONTACT_EMAIL || "dane.m.said@gmail.com"],
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0a0a0a; padding: 30px; border-radius: 10px;">
            <h1 style="color: #39FF14; margin: 0 0 20px 0; font-size: 24px;">
              New Newsletter Signup! 📬
            </h1>

            <div style="background: #1a1a1a; padding: 20px; border-radius: 8px;">
              <p style="color: #888; margin: 0 0 5px 0; font-size: 12px; text-transform: uppercase;">Email</p>
              <p style="color: #fff; margin: 0; font-size: 18px;">
                <a href="mailto:${email}" style="color: #39FF14;">${email}</a>
              </p>
            </div>

            <p style="color: #666; font-size: 12px; margin: 20px 0 0 0;">
              Subscribed on ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    });

    if (notificationEmail.error) {
      console.error("Error sending notification:", notificationEmail.error);
    }

    console.log("Newsletter signup:", email);

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to newsletter!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing newsletter signup:", error);
    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
