"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Sneha",
    role: "Google Review",
    text: "Great deal and amazing people🧿♥️ touch wood! If you are looking to get your first car; this is a genuinely good place to find one. The staff is so cooperative and helpful specially Shubham and Dinesh, such wonderful people, who cared for my budget and what I was looking for. Gave me a wonderful deal and helped out with the finance procedure so smoothly. Absolutely happy and satisfied with their service. Would definitely recommend buying from them. Genuine and super trustworthy place in Pune!",
    rating: 5,
  },
  {
    name: "motiram shinde",
    role: "Google Review",
    text: "I had a wonderful buying experience with CARS GURU, when I purchased my Hyundai Creta, The process was very transparent, and they even allowed a third-party inspection. Test drives and support were prompt, and shubham sir was extremely helpful in addressing all our queries. I highly recommend Cars Grur. A special thanks for the thoughtful gifts – the dashcam,tyre inflator , sweet box😊❤️",
    rating: 5,
  },
  {
    name: "Amit Dimble",
    role: "Google Review",
    text: "I have purchased Balleno From Cars Guru 6 Months Before And Posting review Now ..I am Really Very Satisfied with the Car Condition and Price and Overall Service I am Happy to Recommend Cars Guru To every one ...Must Visite Place",
    rating: 5,
  },
];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the array to create a seamless infinite scrolling loop
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className="eyebrow">Testimonials</span>
            <h2>Trusted by Hundreds of Happy Customers</h2>
            <p>
              Real experiences from customers across Pune.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={2}>
        <div
          className={styles.marqueeContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className={`${styles.marqueeTrack} ${isPaused ? styles.paused : ""}`}>
            {doubledTestimonials.map((t, idx) => (
              <div key={idx} className={styles.testimonialCard}>
                <div className={styles.stars}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="var(--gold)"
                      stroke="var(--gold)"
                      strokeWidth="1"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className={styles.quote}>
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className={styles.author}>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
