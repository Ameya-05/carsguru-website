"use client";

import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image
              src="/logoend.png"
              alt="CarsGuru"
              width={180}
              height={50}
              className={styles.logo}
            />
            <p className={styles.desc}>
              CarsGuru — Pune&apos;s trusted destination for verified pre-owned vehicles.
            </p>
            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/cars_guru_pune?igsh=cjBsNW42cXl5Ynp3"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                title="Instagram"
                aria-label="Follow CarsGuru on Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100067693997731&mibextid=rS40aB7S9Ucbxw6v"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                title="Facebook"
                aria-label="Follow CarsGuru on Facebook"
              >
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://wa.me/919923113292"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                title="WhatsApp"
                aria-label="Chat with CarsGuru on WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h5>Navigation</h5>
            <ul>
              <li><button onClick={() => scrollTo("home")}>Home</button></li>
              <li><button onClick={() => scrollTo("about")}>About</button></li>
              <li><button onClick={() => scrollTo("showroom")}>Showroom</button></li>
              <li><button onClick={() => scrollTo("testimonials")}>Testimonials</button></li>
              <li><button onClick={() => scrollTo("contact")}>Contact</button></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h5>Contact</h5>
            <p>+91 99231 13292</p>
            <p>carsguru.pune@gmail.com</p>
            <p>Pune, Maharashtra</p>
          </div>

          <div className={styles.col}>
            <h5>Hours</h5>
            <p>Mon – Sun</p>
            <p>10:00 AM – 8:00 PM</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 CarsGuru. All rights reserved.</p>
          <p>Pune, Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
}
