const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify connection configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP Connection Error:", error);
  } else {
    console.log("✅ SMTP Server is ready to take messages");
  }
});

const sendContactEmail = async ({ name, email, phone, message }) => {
  // Validate presence of required env vars
  const requiredEnv = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "CONTACT_RECEIVER"];
  const missing = requiredEnv.filter(k => !process.env[k]);
  if (missing.length > 0) {
    console.error(`❌ Missing SMTP environment variables: ${missing.join(", ")}`);
    throw new Error(`Server configuration error: Missing ${missing.join(", ")}`);
  }

  try {
    // 1. Notify the receiver
    try {
      await transporter.sendMail({
      from: `"Jigisha Group" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `New Contact Inquiry from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage:\n${message}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background: linear-gradient(135deg, #0b3c82 0%, #2563eb 100%); padding: 24px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">New Contact Inquiry</h2>
            <p style="color: #dbeafe; margin: 6px 0 0 0; font-size: 14px;">Jigisha Group — Corporate Network</p>
          </div>
          <div style="padding: 32px 24px;">
            <table style="width: 100%; border-collapse: collapse; text-align: left;">
              <tr>
                <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; width: 100px; color: #6b7280; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Name</td>
                <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 15px; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 15px; font-weight: 500;">
                  ${phone || '<span style="color:#9ca3af;font-style:italic;">Not provided</span>'}
                </td>
              </tr>
              <tr>
                <td colspan="2" style="padding: 24px 0 10px 0; color: #6b7280; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</td>
              </tr>
              <tr>
                <td colspan="2" style="padding: 0;">
                  <div style="background-color: #f8fafc; padding: 18px; border-radius: 8px; border: 1px solid #e2e8f0; color: #334155; font-size: 15px; line-height: 1.6;">
                    ${message.replace(/\n/g, '<br/>')}
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div style="background-color: #f9fafb; padding: 16px; text-align: center; color: #9ca3af; font-size: 12px; border-top: 1px solid #e5e7eb;">
            This is an automated notification from the <strong>jigisha.in</strong> contact portal.
          </div>
        </div>
      `,
      });
    } catch (err) {
      console.error("❌ Failed to notify receiver:", err.message);
    }

    // 2. Send confirmation to the user
    try {
      await transporter.sendMail({
      from: `"Jigisha Group" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We received your inquiry — Jigisha Group`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #0b3c82 0%, #2563eb 100%); padding: 24px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">Thank You, ${name}!</h2>
            <p style="color: #dbeafe; margin: 6px 0 0; font-size: 14px;">We've received your inquiry</p>
          </div>
          <div style="padding: 28px 24px; color: #374151; font-size: 15px; line-height: 1.7;">
            <p>Hi <strong>${name}</strong>,</p>
            <p>Thank you for reaching out to <strong>Jigisha Group</strong>. We've received your message and our team will get back to you within <strong>24 business hours</strong>.</p>
            <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 14px 18px; border-radius: 6px; margin: 20px 0; color: #334155; font-size: 14px;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
            <p>If you have any urgent queries, feel free to reply to this email or call us directly.</p>
            <p style="margin-top: 24px;">Warm regards,<br/><strong>Jigisha Group Team</strong></p>
          </div>
          <div style="background-color: #f9fafb; padding: 14px; text-align: center; color: #9ca3af; font-size: 12px; border-top: 1px solid #e5e7eb;">
            © Jigisha Group · <a href="https://jigisha.in" style="color:#2563eb;">jigisha.in</a>
          </div>
        </div>
      `,
      });
    } catch (err) {
      console.error(`❌ Failed to send confirmation to ${email}:`, err.message);
    }

    console.log(`📩 Contact process finished for ${email}`);
    return true;
  } catch (error) {
    console.error("❌ Fatal error in sendContactEmail:", error);
    throw error;
  }
};

/* ─────────────────────────────────────────────────────────────
   Quote request — HTML email
   ───────────────────────────────────────────────────────────── */
const sendQuoteEmail = async ({
  fullName, email, phone, company, designation, country,
  pinCode, city, state, serviceCategory, productCategory, product,
  projectScale, budget, timeline, details, attachment = null,
}) => {
  // Validate presence of required env vars
  const requiredEnv = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "CONTACT_RECEIVER"];
  const missing = requiredEnv.filter(k => !process.env[k]);
  if (missing.length > 0) {
    console.error(`❌ Missing SMTP environment variables for Quote: ${missing.join(", ")}`);
    throw new Error(`Server configuration error: Missing ${missing.join(", ")}`);
  }

  const row = (label, value) => `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; width: 150px; color: #6b7280; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">${label}</td>
      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 500;">
        ${value ? String(value) : '<span style="color:#9ca3af;font-style:italic;">Not provided</span>'}
      </td>
    </tr>`;

  const categoryLabel = serviceCategory || productCategory || 'General Inquiry';
  const location = [city, state, country].filter(Boolean).join(", ");

  try {
    const info = await transporter.sendMail({
      from: `"Jigisha Group Quote" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `New Quote Request — ${categoryLabel} · ${company}`,
      replyTo: email,
      text:
        `New Quote Request\n\n` +
        `Full Name: ${fullName}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Company: ${company}\n` +
        `Designation: ${designation || "N/A"}\n` +
        `Location: ${location}\n` +
        `PIN / ZIP: ${pinCode || "N/A"}\n\n` +
        `Service Category: ${serviceCategory}\n` +
        `Project Scale: ${projectScale}\n` +
        `Budget: ${budget || "To be discussed"}\n` +
        `Timeline: ${timeline || "Flexible"}\n\n` +
        `Requirements:\n${details}\n`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 640px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
          <div style="background: linear-gradient(135deg, #0b3c82 0%, #2563eb 100%); padding: 26px; text-align: center;">
            <h2 style="color:#ffffff; margin:0; font-size:22px; font-weight:700;">New Quote Request</h2>
            <p style="color:#dbeafe; margin:6px 0 0; font-size:13px;">Jigisha Group — Get a Quote</p>
          </div>

          <div style="padding: 28px 24px;">
            <h3 style="margin:0 0 14px; font-size:13px; letter-spacing:0.12em; text-transform:uppercase; color:#0b3c82; font-weight:800;">Contact Information</h3>
            <table style="width:100%; border-collapse:collapse; text-align:left;">
              ${row("Full Name", fullName)}
              ${row("Email", `<a href="mailto:${email}" style="color:#2563eb; text-decoration:none; font-weight:500;">${email}</a>`)}
              ${row("Phone", phone ? `<a href="tel:${String(phone).replace(/\s+/g, "")}" style="color:#111827; text-decoration:none;">${phone}</a>` : "")}
              ${row("Company", company)}
              ${row("Designation", designation)}
              ${row("Country", country)}
              ${row("Location", location)}
              ${row("PIN / ZIP", pinCode)}
            </table>

            <h3 style="margin:26px 0 14px; font-size:13px; letter-spacing:0.12em; text-transform:uppercase; color:#0b3c82; font-weight:800;">Project Details</h3>
            <table style="width:100%; border-collapse:collapse; text-align:left;">
              ${row("Service Category", serviceCategory)}
              ${row("Project Scale", projectScale)}
              ${row("Budget", budget)}
              ${row("Timeline", timeline)}
            </table>

            <h3 style="margin:26px 0 10px; font-size:13px; letter-spacing:0.12em; text-transform:uppercase; color:#0b3c82; font-weight:800;">Requirements &amp; Specifications</h3>
            <div style="background-color:#f8fafc; padding:18px; border-radius:8px; border:1px solid #e2e8f0; color:#334155; font-size:14px; line-height:1.65;">
              ${String(details).replace(/\n/g, "<br/>")}
            </div>
          </div>

          <div style="background-color:#f9fafb; padding:16px; text-align:center; color:#9ca3af; font-size:12px; border-top:1px solid #e5e7eb;">
            This is an automated notification from the <strong>jigisha.in</strong> quote portal.
          </div>
        </div>
      `,
      ...(attachment ? {
        attachments: [{
          filename: attachment.filename,
          path: attachment.path,
          contentType: attachment.contentType
        }]
      } : {}),
    });
    console.log("Quote email sent: %s", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending quote email:", error);
    throw error;
  }
};

module.exports = { sendContactEmail, sendQuoteEmail };
