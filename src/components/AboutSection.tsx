"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.grid}>
          <ScrollReveal direction="left">
            <div className={styles.imageWrap}>
              <div className={styles.imageMain}>
                <Image
                  src="/showroom-3.jpg"
                  alt="CarsGuru Premium Lounge - Comfortable Customer Experience"
                  fill
                  className={styles.img}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.accent}>
                <div className={styles.accentText}>
                  500+
                  <br />
                  Happy Customers
                </div>
              </div>
              <div className={styles.floatingCard}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <div>
                  <strong>Quality Certified</strong>
                  <span>Every car inspected</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className={styles.text}>
              <span className="eyebrow">About CarsGuru</span>
              <h2>
                Pune&apos;s Trusted Destination
                <br />
                for Pre-Owned Cars
              </h2>
              <div className="rule-line"></div>
              <p>
                At CarsGuru, every vehicle is carefully inspected, verified, and transparently priced to ensure a confident buying experience. Over the years, we&apos;ve helped hundreds of families across Pune find the right car with complete peace of mind.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                      <path d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <span>Multi-Point Inspection</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                      <path d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <span>Easy Finance Options</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                      <path d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <span>RTO & Insurance Support</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                      <path d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <span>Buy, Sell & Exchange</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
