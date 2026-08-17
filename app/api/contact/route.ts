import { Resend } from "resend";
import { NextResponse } from "next/server";

// ── Configuration ─────────────────────────────────────────────────────────
// 1. Add your Resend API key to .env.local:
//      RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
//    Get a free key at https://resend.com
//
// 2. ↓ Set the recipient email address here ↓
const RECIPIENT_EMAIL = "pwolff@emory.edu"; // ← change to real lab manager email
//
// 3. Set the sender address. With Resend's free tier you can send from
//    onboarding@resend.dev, or use your own verified domain:
const SENDER_ADDRESS = "LaBL Contact Form <onboarding@resend.dev>"; // ← update once domain is verified
// ─────────────────────────────────────────────────────────────────────────

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: SENDER_ADDRESS,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `LaBL Contact Form — ${firstName} ${lastName}`,
      text: `From: ${firstName} ${lastName} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
