"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import styles from "./ShowroomGallery.module.css";

const galleryImages = [
  { src: "/showroom-1.jpg", alt: "CarsGuru Showroom Entrance - Trusted Multi-Brand Pre-Owned Cars", label: "Our Showroom" },
  { src: "/showroom-2.jpg", alt: "CarsGuru Car Yard - Wide Selection of Pre-Owned Vehicles", label: "Car Collection" },
  { src: "/showroom-3.jpg", alt: "CarsGuru Premium Lounge - Comfortable Customer Waiting Area", label: "Customer Lounge" },
  { src: "/showroom-4.jpg", alt: "CarsGuru Display Area - Quality Checked Cars on Display", label: "Display Area" },
];

export default function ShowroomGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section} id="showroom">
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <div>
              <span className="eyebrow">Our Showroom</span>
              <h2>Experience CarsGuru</h2>
            </div>
            <div>
              <p>
                Explore a premium multi-brand showroom designed to make car buying simple, comfortable, and transparent.
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "16px" }}>
                <span style={{ fontSize: "12px", background: "var(--border)", padding: "4px 12px", borderRadius: "100px", fontWeight: "500", color: "var(--ink)" }}>Wide Vehicle Selection</span>
                <span style={{ fontSize: "12px", background: "var(--border)", padding: "4px 12px", borderRadius: "100px", fontWeight: "500", color: "var(--ink)" }}>Comfortable Customer Lounge</span>
                <span style={{ fontSize: "12px", background: "var(--border)", padding: "4px 12px", borderRadius: "100px", fontWeight: "500", color: "var(--ink)" }}>Quality Checked Inventory</span>
                <span style={{ fontSize: "12px", background: "var(--border)", padding: "4px 12px", borderRadius: "100px", fontWeight: "500", color: "var(--ink)" }}>Friendly Consultation Experience</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className={styles.gallery}>
            <div className={styles.mainImage}>
              <Image
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                fill
                className={styles.mainImg}
                sizes="(max-width: 768px) 100vw, 70vw"
                priority
              />
              <div className={styles.mainLabel}>
                {galleryImages[activeIndex].label}
              </div>
            </div>
            <div className={styles.thumbnails}>
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${i === activeIndex ? styles.thumbActive : ""}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`View ${img.label}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className={styles.thumbImg}
                    sizes="150px"
                  />
                  <span className={styles.thumbLabel}>{img.label}</span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
