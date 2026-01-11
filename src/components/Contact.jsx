import React from 'react';

// Server-side handler for Cloudflare Pages Functions
async function onRequestPost(context) {
  try {
    const body = await context.request.json();

    const name = (body?.name || "").trim();
    const email = (body?.email || "").trim();
    const phone = (body?.phone || "").trim();
    const message = (body?.message || "").trim();

    if (!name || !email || !phone || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Send via MailChannels (works on Cloudflare Pages Functions)
    const payload = {
      personalizations: [
        {
          to: [{ email: "admin@cosmosnextgen.com", name: "COSMOS Admin" }],
          subject: `New message from COSMOS website: ${name}`,
        },
      ],
      from: {
        email: "no-reply@cosmosnextgen.com",
        name: "COSMOS Website",
      },
      reply_to: {
        email: email,
        name: name,
      },
      content: [
        {
          type: "text/plain",
          value:
              `New contact form submission:\n\n` +
              `Name: ${name}\n` +
              `Email: ${email}\n` +
              `Phone: ${phone}\n\n` +
              `Message:\n${message}\n`,
        },
      ],
    };

    const res = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      return new Response(JSON.stringify({ error: "Email send failed.", detail: txt }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Server error.", detail: String(e) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// React component for rendering the contact form
export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // In development, log the form data to console
      // In production (Cloudflare Pages), the onRequestPost function handles email sending
      if (import.meta.env.DEV) {
        console.log("Contact Form Submission (Development Mode):", formData);

        // Simulate a successful submission in development
        await new Promise(resolve => setTimeout(resolve, 1000));
        setMessage("✅ Form submitted successfully! (Development Mode - Check browser console for details. In production, an email will be sent to admin@cosmosnextgen.com)");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        // Production: send to Cloudflare Pages Function
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (res.ok) {
          setMessage("✅ Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
          setMessage(data.error || "Failed to send message");
        }
      }
    } catch (err) {
      setMessage("Error sending message: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
      <section id="contact" className="section section-light">
      <style>{`
        .contact {
          padding: 100px 20px;
          background: 
            radial-gradient(circle at 20% 30%, rgba(255, 107, 53, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(26, 159, 181, 0.1) 0%, transparent 40%),
            linear-gradient(135deg, rgba(254, 252, 247, 0.95) 0%, rgba(250, 247, 242, 0.85) 100%);
          position: relative;
          overflow: hidden;
          animation: scrollReveal 0.8s ease-out;
        }

        @keyframes scrollReveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact::before {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 150, 80, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          top: -100px;
          right: -100px;
          pointer-events: none;
        }

        .contact::after {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(26, 159, 181, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          bottom: -150px;
          left: -150px;
          pointer-events: none;
        }

        .contact .container {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .contact h2 {
          font-size: 42px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 16px;
          background: none;
          color: #181a20; /* much darker */
        }

        .contact-subtitle {
          text-align: center;
          color: #23242a; /* much darker for contrast */
          font-size: 18px;
          margin-bottom: 60px;
          line-height: 1.8;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .contactWrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        .contactForm {
          display: flex;
          flex-direction: column;
          gap: 20px;
          background: rgba(255, 250, 245, 0.9);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(26, 159, 181, 0.2);
          border-radius: 16px;
          padding: 48px;
          box-shadow: 0 12px 32px rgba(255, 107, 53, 0.08);
          transition: all 0.3s ease;
          grid-column: 1;
        }

        .contactForm:hover {
          border-color: rgba(26, 159, 181, 0.35);
          box-shadow: 0 16px 40px rgba(255, 107, 53, 0.12);
        }

        .contactDetails {
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding: 48px;
          background: linear-gradient(135deg, rgba(255, 250, 245, 0.9) 0%, rgba(240, 250, 255, 0.5) 100%);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(26, 159, 181, 0.25);
          border-radius: 16px;
          grid-column: 2;
          box-shadow: 0 12px 32px rgba(26, 159, 181, 0.08);
        }

        .contactDetails h3 {
          font-size: 24px;
          font-weight: 700;
          color: #181a20; /* much darker */
          margin-bottom: 8px;
          background: none;
        }

        .detailItem {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .detailItem .icon {
          font-size: 1.8rem;
          min-width: 40px;
          text-align: center;
        }

        .detailContent {
          flex: 1;
        }

        .detailLabel {
          font-size: 0.85rem;
          font-weight: 600;
          color: #23242a; /* much darker for contrast */
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 6px;
          margin: 0;
        }

        .detailItem a {
          color: #181a20; /* much darker for contrast */
          text-decoration: none;
          font-size: 1rem;
          line-height: 1.5;
          transition: all 0.3s ease;
        }

        .detailItem a:hover {
          color: #1a9fb5;
        }

        .detailText {
          color: #23242a; /* much darker for contrast */
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
        }

        .contactForm input,
        .contactForm textarea {
          width: 100%;
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.7);
          border: 1.5px solid rgba(200, 150, 100, 0.3);
          border-radius: 10px;
          color: #181a20; /* much darker for contrast */
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          outline: none;
        }

        .contactForm input::placeholder,
        .contactForm textarea::placeholder {
          color: #555; /* darker placeholder for visibility */
          transition: color 0.3s ease;
        }

        .contactForm input:focus,
        .contactForm textarea:focus {
          background: rgba(255, 255, 255, 0.95);
          border-color: #1a9fb5;
          box-shadow: 
            0 0 20px rgba(26, 159, 181, 0.3),
            inset 0 1px 3px rgba(26, 159, 181, 0.1);
          transform: translateY(-2px);
        }

        .contactForm input:focus::placeholder,
        .contactForm textarea:focus::placeholder {
          color: #bbb;
        }

        .contactForm textarea {
          resize: vertical;
          min-height: 160px;
          font-family: inherit;
        }

        .contactForm button {
          padding: 14px 32px;
          background: linear-gradient(135deg, #ff6b35 0%, #f77f00 100%);
          color: #fff; /* ensure button text is white */
          border: none;
          border-radius: 10px;
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 8px 24px rgba(255, 107, 53, 0.2);
        }

        .contactForm button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(255, 107, 53, 0.3);
          background: linear-gradient(135deg, #ff7a4a 0%, #ff8c1a 100%);
        }

        .contactForm button:active:not(:disabled) {
          transform: translateY(0);
        }

        .contactForm button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .message {
          margin-top: 20px;
          padding: 16px 20px;
          border-radius: 10px;
          text-align: center;
          font-size: 1.05rem;
          font-weight: 500;
          animation: slideIn 0.3s ease;
          background: rgba(100, 200, 100, 0.15);
          color: #166534; /* much darker green for contrast */
          border: 1px solid rgba(100, 200, 100, 0.3);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .contactWrapper {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .contactForm {
            grid-column: auto;
          }

          .contactDetails {
            grid-column: auto;
          }
        }

        @media (max-width: 640px) {
          .contact {
            padding: 60px 15px;
          }

          .contact h2 {
            font-size: 1.8rem;
          }

          .contactForm {
            padding: 30px 20px;
            gap: 15px;
          }

          .contact-subtitle {
            font-size: 1rem;
            margin-bottom: 40px;
          }

          .contactDetails {
            padding: 24px;
          }

          .contactDetails h3 {
            font-size: 1.3rem;
          }
        }
      `}</style>

      <div className="container">
        <h2>Get in Touch</h2>
        <p className="contact-subtitle">
          Have a question or ready to start your next project? We'd love to hear from you.
          <br />
          Fill out the form below and we'll get back to you shortly.
        </p>

        <div className="contactWrapper">
          <form onSubmit={handleSubmit} className="contactForm">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Tell us about your project or inquiry..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "✉️ Sending..." : "Send Message"}
            </button>
          </form>
          {message && <p className="message">{message}</p>}

          <div className="contactDetails">
            <h3>Contact Information</h3>
            <div className="detailItem">
              <span className="icon">📍</span>
              <div className="detailContent">
                <p className="detailLabel">Address</p>
                <p className="detailText">
                  5900 Balcones Drive, Suite 100<br />
                  Austin, TX 78731
                </p>
              </div>
            </div>
            <div className="detailItem">
              <span className="icon">📞</span>
              <div className="detailContent">
                <p className="detailLabel">Phone</p>
                <a href="tel:2103909950">210.390.9950</a>
              </div>
            </div>
            <div className="detailItem">
              <span className="icon">✉️</span>
              <div className="detailContent">
                <p className="detailLabel">Email</p>
                <a href="mailto:admin@cosmosnextgen.com">admin@cosmosnextgen.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export server function for Cloudflare Pages
export { onRequestPost };

