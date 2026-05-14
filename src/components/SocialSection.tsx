"use client";

import ScrollReveal from "./ScrollReveal";
import styles from "./SocialSection.module.css";

const socials = [
  {
    name: "Instagram",
    handle: "@cars_guru_pune",
    href: "https://www.instagram.com/cars_guru_pune?igsh=cjBsNW42cXl5Ynp3",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
  },
  {
    name: "Facebook",
    handle: "CarsGuru Pune",
    href: "https://www.facebook.com/profile.php?id=100067693997731&mibextid=rS40aB7S9Ucbxw6v",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #1877f2, #0a5dc7)",
  },
  {
    name: "WhatsApp",
    handle: "+91 99231 13292",
    href: "https://wa.me/919923113292?text=Hi%20CarsGuru!%20I'm%20interested%20in%20buying%20a%20car.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #25d366, #128c38)",
  },
];

export default function SocialSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <ScrollReveal direction="left">
            <div className={styles.text}>
              <span className="eyebrow">Stay Connected</span>
              <h2>Stay Connected with CarsGuru</h2>
              <div className="rule-line"></div>
              <p>
                Follow us for new arrivals, showroom updates, customer deliveries, and real buying experiences.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className={styles.links}>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkRow}
                >
                  <div className={styles.linkLeft}>
                    <div
                      className={styles.iconWrap}
                      style={{ background: social.gradient }}
                    >
                      {social.icon}
                    </div>
                    <div>
                      <div className={styles.name}>{social.name}</div>
                      <div className={styles.handle}>{social.handle}</div>
                    </div>
                  </div>
                  <span className={styles.arrow}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
