"use client";

import ScrollReveal from "./ScrollReveal";
import styles from "./CTASection.module.css";

export default function CTASection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.section}>
      <div className={styles.bg}></div>
      <div className="container">
        <ScrollReveal>
          <div className={styles.inner}>
            <div className={styles.text}>
              <h2>
                Looking for your
                <br />
                next car?
              </h2>
              <p>
                Our team is ready to help you find the right match — no
                pressure, just guidance.
              </p>
            </div>
            <div className={styles.actions}>
              <button className="btn-white" onClick={scrollToContact}>
                Get in Touch
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <a
                href="https://wa.me/919923113292?text=Hi%20CarsGuru!%20I'm%20interested%20in%20buying%20a%20car."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBtn}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
