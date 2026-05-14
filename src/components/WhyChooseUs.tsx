"use client";

import ScrollReveal from "./ScrollReveal";
import styles from "./WhyChooseUs.module.css";

const reasons = [
  {
    num: "01",
    title: "Verified Vehicles",
    desc: "Every car undergoes a detailed quality inspection.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Honest Pricing",
    desc: "Transparent deals with no hidden surprises.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12" />
        <path d="M6 8h12" />
        <path d="M6 13h8.5" />
        <path d="M6 13l8 8" />
        <path d="M9 13c6.667 0 6.667-10 0-10" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Trusted Since 2019",
    desc: "Hundreds of satisfied customers across Pune.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Smooth Buying Experience",
    desc: "From finance to documentation, we handle everything seamlessly.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <div>
              <span className="eyebrow">Why Us</span>
              <h2>
                Why Customers Choose
                <br />
                CarsGuru
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <ScrollReveal key={r.num} delay={i + 1}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>{r.icon}</div>
                <div className={styles.cardNum}>{r.num}</div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <div className={styles.cardLine}></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
