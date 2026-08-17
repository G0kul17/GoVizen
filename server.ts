import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';

interface ProjectInquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  message: string;
  submittedAt: string;
}

const inMemoryInquiries: ProjectInquiry[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Submit new Project Request & Notify Founders
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, company, projectType, budget, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: 'Please provide name, email, and project message.'
        });
      }

      const inquiry: ProjectInquiry = {
        id: `REQ-${Date.now().toString(36).toUpperCase()}`,
        name: String(name).trim(),
        email: String(email).trim(),
        company: company ? String(company).trim() : undefined,
        projectType: String(projectType || 'Web Application').trim(),
        budget: String(budget || '5,000 – 10,000').trim(),
        message: String(message).trim(),
        submittedAt: new Date().toISOString()
      };

      inMemoryInquiries.unshift(inquiry);

      // Founders target email
      const founderEmail = process.env.NOTIFICATION_EMAIL || 'govizenofficial@gmail.com';
      console.log(`[GoVizen] New Project Request from ${inquiry.name} (${inquiry.email}) routed to ${founderEmail}`);

      let emailDispatched = false;
      let emailError: string | null = null;

      // If SMTP credentials or Gmail App Password configured in environment
      const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
      const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

      if (smtpUser && smtpPass) {
        try {
          const transporter = nodemailer.createTransport({
            service: process.env.SMTP_SERVICE || 'gmail',
            auth: {
              user: smtpUser,
              pass: smtpPass
            }
          });

          const mailHtml = `
            <div style="background-color: #0A0A0A; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; border: 1px solid #1A1A1A; border-radius: 8px;">
              <div style="border-bottom: 1px solid #222222; padding-bottom: 16px; margin-bottom: 24px;">
                <span style="display: inline-block; padding: 4px 10px; font-size: 11px; font-family: monospace; text-transform: uppercase; color: #C5A059; background-color: rgba(197, 160, 89, 0.1); border: 1px solid rgba(197, 160, 89, 0.3); border-radius: 3px;">
                  New Project Inquiry (${inquiry.id})
                </span>
                <h1 style="font-size: 22px; font-weight: 500; color: #FFFFFF; margin: 12px 0 4px 0;">
                  New Order Request from ${inquiry.name}
                </h1>
                <p style="font-size: 13px; color: #888888; margin: 0;">
                  Received at ${new Date(inquiry.submittedAt).toUTCString()}
                </p>
              </div>

              <div style="background-color: #111111; border: 1px solid #1F1F1F; border-radius: 6px; padding: 20px; margin-bottom: 24px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                  <tr>
                    <td style="padding: 6px 0; color: #888888; width: 140px;">Client Name:</td>
                    <td style="padding: 6px 0; color: #FFFFFF; font-weight: 600;">${inquiry.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #888888;">Client Email:</td>
                    <td style="padding: 6px 0; color: #C5A059;"><a href="mailto:${inquiry.email}" style="color: #C5A059; text-decoration: none;">${inquiry.email}</a></td>
                  </tr>
                  ${inquiry.company ? `
                  <tr>
                    <td style="padding: 6px 0; color: #888888;">Company / Brand:</td>
                    <td style="padding: 6px 0; color: #FFFFFF;">${inquiry.company}</td>
                  </tr>` : ''}
                  <tr>
                    <td style="padding: 6px 0; color: #888888;">Project Type:</td>
                    <td style="padding: 6px 0; color: #FFFFFF; font-weight: 500;">${inquiry.projectType}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #888888;">Budget Bracket:</td>
                    <td style="padding: 6px 0; color: #C5A059; font-weight: 600;">${inquiry.budget}</td>
                  </tr>
                </table>
              </div>

              <div style="margin-bottom: 24px;">
                <h3 style="font-size: 12px; font-family: monospace; text-transform: uppercase; color: #888888; margin-bottom: 8px;">
                  Project Details &amp; Objective:
                </h3>
                <div style="background-color: #141414; border: 1px solid #222222; border-radius: 6px; padding: 16px; font-size: 13px; color: #E0E0E0; line-height: 1.6; white-space: pre-wrap;">
${inquiry.message}
                </div>
              </div>

              <div style="text-align: center; padding-top: 16px; border-top: 1px solid #1F1F1F;">
                <a href="mailto:${inquiry.email}?subject=Re:%20GoVizen%20Project%20Inquiry%20(${inquiry.id})&body=Hi%20${encodeURIComponent(inquiry.name)},%0A%0AThank%20you%20for%20reaching%20out%20to%20GoVizen.%20Vicky%20and%20I%20have%20reviewed%20your%20project%20details%20for%20${encodeURIComponent(inquiry.projectType)}..." 
                   style="display: inline-block; padding: 10px 24px; background-color: #C5A059; color: #000000; font-size: 12px; font-weight: 700; text-decoration: none; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em;">
                  Reply Directly to ${inquiry.name}
                </a>
              </div>
            </div>
          `;

          await transporter.sendMail({
            from: `"GoVizen Studio" <${smtpUser}>`,
            to: founderEmail,
            replyTo: inquiry.email,
            subject: `[New GoVizen Project Request] ${inquiry.name} - ${inquiry.projectType} (${inquiry.budget})`,
            html: mailHtml,
            text: `New GoVizen Project Inquiry\n\nName: ${inquiry.name}\nEmail: ${inquiry.email}\nCompany: ${inquiry.company || 'N/A'}\nType: ${inquiry.projectType}\nBudget: ${inquiry.budget}\n\nMessage:\n${inquiry.message}`
          });

          emailDispatched = true;
          console.log(`[GoVizen] Notification email successfully delivered to ${founderEmail}`);
        } catch (err: any) {
          console.error('[GoVizen] SMTP notification delivery error:', err?.message || err);
          emailError = err?.message || 'SMTP delivery issue';
        }
      }

      return res.json({
        success: true,
        message: 'Project request recorded and routed to founders at govizenofficial@gmail.com',
        inquiryId: inquiry.id,
        founderEmail,
        emailDispatched,
        emailError,
        inquiry
      });
    } catch (err: any) {
      console.error('[GoVizen] /api/contact error:', err);
      return res.status(500).json({
        success: false,
        error: 'Failed to process project inquiry. Please try again or email us directly.'
      });
    }
  });

  // API Route: Retrieve recent inquiries for founders
  app.get('/api/inquiries', (req, res) => {
    res.json({
      success: true,
      count: inMemoryInquiries.length,
      inquiries: inMemoryInquiries
    });
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Vite Middleware configuration
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[GoVizen Server] Running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('[GoVizen Server] Fatal startup error:', err);
});
