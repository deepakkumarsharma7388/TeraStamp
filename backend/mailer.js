import nodemailer from "nodemailer";
import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");


let transporter;

export function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  return transporter;
}

const CALENDAR_LINK =
  "https://calendar.app.google/2Mrtg2nNQ8U1ogvf6"; // <-- Replace later

/* -------------------------------------------------------
   ADMIN EMAIL
------------------------------------------------------- */

export async function sendContactEmail({
  name,
  email,
  company,
  industry,
  message,
}) {
  const transport = getTransporter();

  const receiver =
    process.env.CONTACT_RECEIVER || process.env.SMTP_USER;

const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;">
<tr>
<td style="padding:16px;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0"
style="max-width:680px;width:100%;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden;">

<!-- HEADER -->
<tr>
<td style="background:#F26418;padding:28px 20px;text-align:center;">
<h1 style="color:#ffffff;margin:0;font-size:24px;line-height:1.3;">
New Contact Form Submission
</h1>
</td>
</tr>

<!-- BODY -->
<tr>
<td style="padding:24px 20px;">

<p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#444;">
A new enquiry has been submitted from the TeraStamp website.
</p>

<!-- NAME -->
<div style="padding:12px 0;border-bottom:1px solid #eee;">
<p style="margin:0 0 4px;font-size:13px;font-weight:bold;color:#F26418;text-transform:uppercase;letter-spacing:1px;">Name</p>
<p style="margin:0;font-size:16px;color:#32353A;word-break:break-word;">${escapeHtml(name)}</p>
</div>

<!-- EMAIL -->
<div style="padding:12px 0;border-bottom:1px solid #eee;">
<p style="margin:0 0 4px;font-size:13px;font-weight:bold;color:#F26418;text-transform:uppercase;letter-spacing:1px;">Email</p>
<p style="margin:0;font-size:16px;color:#32353A;word-break:break-all;">${escapeHtml(email)}</p>
</div>

<!-- COMPANY -->
<div style="padding:12px 0;border-bottom:1px solid #eee;">
<p style="margin:0 0 4px;font-size:13px;font-weight:bold;color:#F26418;text-transform:uppercase;letter-spacing:1px;">Company</p>
<p style="margin:0;font-size:16px;color:#32353A;word-break:break-word;">${escapeHtml(company || "-")}</p>
</div>

<!-- INDUSTRY -->
<div style="padding:12px 0;border-bottom:1px solid #eee;">
<p style="margin:0 0 4px;font-size:13px;font-weight:bold;color:#F26418;text-transform:uppercase;letter-spacing:1px;">Industry</p>
<p style="margin:0;font-size:16px;color:#32353A;word-break:break-word;">${escapeHtml(industry || "-")}</p>
</div>

<!-- MESSAGE -->
<div style="padding:12px 0;">
<p style="margin:0 0 4px;font-size:13px;font-weight:bold;color:#F26418;text-transform:uppercase;letter-spacing:1px;">Message</p>
<p style="margin:0;font-size:16px;line-height:1.7;color:#32353A;word-break:break-word;">${escapeHtml(message || "-").replace(/\n/g, "<br/>")}</p>
</div>

</td>
</tr>

<!-- FOOTER -->
<tr>
<td style="background:#fafafa;padding:18px 20px;text-align:center;color:#777;font-size:14px;">
TeraStamp Website Contact Form
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;

  await transport.sendMail({
    from: `"TeraStamp Website" <${process.env.SMTP_USER}>`,
    to: receiver,
    replyTo: email,
    subject: `New Contact Form - ${name}`,
    html,
  });
}

/* -------------------------------------------------------
   THANK YOU EMAIL
------------------------------------------------------- */

export async function sendThankYouEmail({
  name,
  email,
}) {
  const transport = getTransporter();

const html = `
<!DOCTYPE html>
<html>

<body
style="
margin:0;
padding:16px;
background:#F3F4F6;
font-family:Arial,sans-serif;
"
>

<div
style="
max-width:680px;
margin:auto;
background:white;
border-radius:14px;
overflow:hidden;
box-shadow:0 5px 20px rgba(0,0,0,.08);
"
>

<div
style="
background:#F26418;
padding:40px;
text-align:center;
"
>

<h1
style="
color:white;
margin:0;
font-size:34px;
"
>

Thank You!

</h1>

<p
style="
margin-top:12px;
color:white;
font-size:18px;
"
>

We've received your request.

</p>

</div>

<div style="padding:40px 24px">

<h2 style="margin-top:0">

Hello ${escapeHtml(name)},

</h2>

<p
style="
font-size:17px;
line-height:1.8;
color:#444;
"
>

Thank you for contacting
<strong>TeraStamp.</strong>

Your enquiry has been successfully received.

Our infrastructure specialists are reviewing
your request and will get back to you shortly.

</p>

<div
style="
margin-top:30px;
background:#FFF4EC;
padding:25px;
border-radius:12px;
"
>

<h3
style="
margin-top:0;
color:#F26418;
"
>

What happens next?

</h3>

<p>✅ Our experts review your request.</p>

<p>✅ We'll contact you shortly.</p>

<p>✅ We'll arrange a personalized demo.</p>

</div>

<div
style="
margin-top:35px;
text-align:center;
"
>


<div
style="
margin-top:35px;
text-align:center;
"
>

<a href="${CALENDAR_LINK}" style="background:#F26418; color:white; padding:16px 34px; text-decoration:none; border-radius:8px; display:inline-block; font-size:18px; font-weight:bold;">📅 Book a Demo</a>

</div>

</div>

<p
style="
margin-top:35px;
font-size:16px;
line-height:1.8;
color:#555;
"
>

If you have any questions,
simply reply to this email and
our team will be happy to help.

</p>

<p
style="
margin-top:30px;
"
>

Best Regards,

<br><br>

<strong>TeraStamp Team</strong>

</p>

</div>

<div
style="
background:#F9FAFB;
padding:20px;
text-align:center;
font-size:14px;
color:#777;
"
>

© ${new Date().getFullYear()} TeraStamp

<br>

Infrastructure Intelligence Platform

</div>

</div>

</body>

</html>
`;

  await transport.sendMail({
    from: `"TeraStamp" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Thank you for contacting TeraStamp",
    html,
  });
}

/* -------------------------------------------------------
   Escape HTML
------------------------------------------------------- */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}