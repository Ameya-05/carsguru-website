"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.textContent}>
          <div className={`${styles.eyebrow} ${loaded ? styles.show : ""}`}>
            <div className={styles.eyebrowLine}></div>
            <span>Pune&apos;s Premier Used Car Dealership</span>
          </div>

          <h1 className={`${styles.heading} ${loaded ? styles.show : ""}`}>
            Find Your Next Car With
            <br />
            <em>Confidence</em>
          </h1>

          <p className={`${styles.sub} ${loaded ? styles.show : ""}`}>
            Verified pre-owned vehicles with transparent pricing, trusted service, and a hassle-free experience across Pune.
          </p>

          <div className={`${styles.btns} ${loaded ? styles.show : ""}`}>
            <button className="btn-primary" onClick={scrollToContact}>
              Enquire Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="btn-primary" onClick={scrollToAbout}>
              About Us
            </button>
          </div>

          <div className={`${styles.glassPanel} ${loaded ? styles.show : ""}`}>
            <div className={styles.stat}>
              <div className={styles.statNum}>500+</div>
              <div className={styles.statLabel}>Cars Sold</div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.stat}>
              <div className={styles.statNum}>6+</div>
              <div className={styles.statLabel}>Years Trust</div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.stat}>
              <div className={styles.statNum}>98%</div>
              <div className={styles.statLabel}>Satisfaction</div>
            </div>
          </div>
        </div>

        <div className={`${styles.imageContent} ${loaded ? styles.showImage : ""}`}>
          <div className={styles.imageWrapper}>
            <Image
              src="/showroom-4.jpg"
              alt="CarsGuru Premium Showroom"
              fill
              priority
              className={styles.heroImage}
            />
            <div className={styles.imageOverlay}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
