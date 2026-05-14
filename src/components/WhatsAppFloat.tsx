"use client";

import styles from "./WhatsAppFloat.module.css";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919923113292?text=Hi%20CarsGuru!%20I'm%20interested%20in%20buying%20a%20car."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.float}
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <span className={styles.pulse}></span>
      <svg viewBox="0 0 32 32" className={styles.icon}>
        <path
          d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.13 6.742 3.048 9.376L1.054 31.27l6.14-1.97C9.738 30.996 12.758 32 16.004 32 24.826 32 32 24.824 32 16S24.826 0 16.004 0zm9.31 22.598c-.39 1.1-1.932 2.014-3.168 2.28-.846.18-1.95.322-5.67-1.218-4.76-1.97-7.822-6.804-8.06-7.118-.228-.314-1.916-2.55-1.916-4.862 0-2.312 1.214-3.45 1.644-3.92.39-.428 1.024-.624 1.632-.624.198 0 .374.01.534.018.468.02.704.048 1.012.788.39.938 1.332 3.25 1.448 3.488.118.238.234.554.078.868-.148.322-.276.466-.514.738-.238.272-.464.48-.702.774-.218.258-.462.534-.194 1.002.268.46 1.192 1.964 2.558 3.182 1.758 1.566 3.24 2.052 3.7 2.278.468.226.74.192 1.012-.116.278-.314 1.192-1.388 1.51-1.866.312-.478.632-.396 1.062-.238.434.158 2.746 1.294 3.214 1.53.468.238.78.354.896.554.118.198.118 1.148-.272 2.248z"
          fill="currentColor"
        />
      </svg>
      <span className={styles.label}>Chat with us</span>
    </a>
  );
}
