import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const SITE_URL = "https://selasecurefinancial.com";
const PDF_URL = `${SITE_URL}/saving-your-future.pdf`;
const BOOKING_URL = `${SITE_URL}/book-now`;

const FOOTER_HTML = `
  <p style="margin-top:32px;color:#475569;font-size:13px;line-height:1.6;">
    Warm regards,<br/><br/>
    <strong>SelaSecure Financial</strong><br/>
    📞 Phone: +1 613 899 3398<br/>
    ✉️ Email: enquiries@selasecurefinancial.com<br/>
    🌐 Website: <a href="${SITE_URL}" style="color:#0e487d;">www.selasecurefinancial.com</a><br/>
    📍 Location: Ottawa (Online & In-Person Meetings Available)<br/>
    ⏰ Office Hours: 9:00 AM – 5:00 PM ET
  </p>
`;

function ebookEmailHtml(name: string) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#1e293b;max-width:600px;">
      <p>Hi ${name},</p>
      <p>Thank you for your interest in SelaSecure Financial!</p>
      <p>
        We are excited to share our guide with you. You can access your copy of
        <a href="${PDF_URL}" style="color:#0e487d;font-weight:bold;">Saving Your Future (eBook)</a>
        by clicking the link above.
      </p>
      <p>
        Inside, you will discover simple, practical insights to help you make
        confident decisions about your money, protect what matters most, and
        plan for a secure future.
      </p>
      <p><strong>What's Next?</strong></p>
      <p>Enjoy the read! Take your time going through the guide.</p>
      <p>
        If you have any questions about the strategies inside — or if you would
        like to discuss how they apply to your specific financial situation —
        we are always here to help.
      </p>
      <p>
        Whenever you are ready, you can
        <a href="${BOOKING_URL}" style="color:#0e487d;font-weight:bold;">click here to schedule a free, no-pressure consultation</a>.
      </p>
      <p style="color:#64748b;font-size:12px;">
        (Please do not reply directly to this email as it is not monitored.)
      </p>
      ${FOOTER_HTML}
    </div>
  `;
}

function paperbackEmailHtml(name: string) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#1e293b;max-width:600px;">
      <p>Hi ${name},</p>
      <p>Thank you for your interest in SelaSecure Financial!</p>
      <p>
        We are excited to share our guide with you. You can get a paperback
        copy of
        <a href="${PDF_URL}" style="color:#0e487d;font-weight:bold;">Saving Your Future</a>
        during our working hours at our Ottawa office, located at:
      </p>
      <p style="margin-left:12px;">
        Centerpointe Financial Centre,<br/>
        84 Centerpointe Drive,<br/>
        Ottawa, ON, K2G 6B1
      </p>
      <p>
        Inside this book, you will discover simple, practical insights to help
        you make confident decisions about your money, protect what matters
        most, and plan for a secure future.
      </p>
      <p><strong>What's Next?</strong></p>
      <p>Enjoy the read! Take your time going through the guide.</p>
      <p>
        If you have any questions about the strategies inside — or if you would
        like to discuss how they apply to your specific financial situation —
        we are always here to help.
      </p>
      <p>
        Whenever you are ready, you can
        <a href="${BOOKING_URL}" style="color:#0e487d;font-weight:bold;">click here to schedule a free, no-pressure consultation</a>.
      </p>
      <p style="color:#64748b;font-size:12px;">
        (Please do not reply directly to this email as it is not monitored.)
      </p>
      ${FOOTER_HTML}
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const bookType = body?.bookType === "Paperback" ? "Paperback" : "Ebook";

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      );
    }

    const html =
      bookType === "Paperback"
        ? paperbackEmailHtml(name)
        : ebookEmailHtml(name);
    const subject =
      bookType === "Paperback"
        ? "Your Paperback Copy of Saving Your Future"
        : "Your Saving Your Future eBook";

    await resend.emails.send({
      from: "SelaSecure Financial <noreply@selasecurefinancial.com>",
      to: email,
      subject,
      html,
    });

    return NextResponse.json({ message: "Email sent." }, { status: 200 });
  } catch (error) {
    console.error("Book email error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 },
    );
  }
}
