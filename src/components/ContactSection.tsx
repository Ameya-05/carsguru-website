"use client";

import ScrollReveal from "./ScrollReveal";
import styles from "./ContactSection.module.css";

export default function ContactSection() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Basic validation
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    if (!name || !phone || !message) return;
    if (!/^\d{10}$/.test(phone)) return;

    const waText = `Hello CarsGuru! I have an enquiry from your website.

Name: ${name}
Phone: ${phone}

Message: ${message}`;

    const waUrl = `https://wa.me/919923113292?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank");

    form.reset();
  };

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.layout}>
          {/* Info Side */}
          <ScrollReveal direction="left">
            <div className={styles.info}>
              <span className="eyebrow">Reach Out</span>
              <h2>Let&apos;s Help You Find the Right Car</h2>
              <div className="rule-line"></div>
              <p style={{ fontSize: "16px", color: "var(--text)", marginBottom: "32px", lineHeight: "1.8" }}>
                Connect with our team for vehicle enquiries, showroom visits, finance assistance, or test drives.
              </p>
              
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "32px" }}>
                <a
                  href="tel:+919923113292"
                  className="btn-primary"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919923113292?text=Hi%20CarsGuru!%20I'm%20interested%20in%20buying%20a%20car."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waBtn}
                  style={{ marginBottom: 0 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>

              <div className={styles.details}>
                <div className={styles.detail}>
                  <div className={styles.detailIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.7 16a19.79 19.79 0 01-3.07-8.67A2 2 0 013.61 5.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 12.9a16 16 0 006.18 6.18l1.38-.93a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className={styles.detailLabel}>Phone</div>
                    <a href="tel:+919923113292" className={styles.detailVal}>+91 99231 13292</a>
                  </div>
                </div>

                <div className={styles.detail}>
                  <div className={styles.detailIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className={styles.detailLabel}>Email</div>
                    <a href="mailto:carsguru.pune@gmail.com" className={styles.detailVal}>carsguru.pune@gmail.com</a>
                  </div>
                </div>

                <div className={styles.detail}>
                  <div className={styles.detailIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className={styles.detailLabel}>Location</div>
                    <a
                      href="https://maps.app.goo.gl/S9fLBDgMep4GmWcE6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.detailVal}
                    >
                      Pune, Maharashtra, India
                    </a>
                  </div>
                </div>

                <div className={styles.detail}>
                  <div className={styles.detailIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <div className={styles.detailLabel}>Hours</div>
                    <div className={styles.detailVal}>Mon – Sun: 10:00 AM – 8:00 PM</div>
                  </div>
                </div>
              </div>



              {/* Google Map */}
              <div className={styles.mapWrap}>
                <iframe
                  title="CarsGuru Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5!2d73.8234!3d18.4674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2959139dc8925%3A0x5f57e91935d5fda5!2sCars%20Guru!5e0!3m2!1sen!2sin!4v1"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://maps.app.goo.gl/S9fLBDgMep4GmWcE6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapOverlay}
                >
                  📍 Open in Google Maps
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Form Side */}
          <ScrollReveal direction="right">
            <div className={styles.formWrap}>
              <h2>Send a Message</h2>
              <p className={styles.formDesc}>
                Drop us a message and we&apos;ll get back to you within a few hours.
              </p>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us what you're looking for..."
                    rows={5}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`btn-primary ${styles.submitBtn}`}
                >
                  Send via WhatsApp
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
