"use client";

import ScrollReveal from "./ScrollReveal";
import styles from "./BuyingProcess.module.css";

export default function BuyingProcess() {
  return (
    <section className={styles.section} id="process">
      <div className="container">
        <ScrollReveal>
          <div className={styles.betterWay}>
            <h2>A Better Way to Buy Used Cars</h2>
            <p>
              Buying a pre-owned car should feel reliable and stress-free. CarsGuru focuses on transparency, quality, and customer trust at every step.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
