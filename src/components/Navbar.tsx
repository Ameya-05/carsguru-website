"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Showroom", href: "#showroom" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoWrap}>
          <Image
            src="/Logo.jpg"
            alt="CarsGuru Logo"
            width={68}
            height={68}
            className={styles.logoImg}
            priority
          />
        </Link>

        <div className={styles.navRight}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              className={styles.navLink}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}
          <button
            className={styles.navCta}
            onClick={() => handleNavClick("#contact")}
          >
            Enquire Now
          </button>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}>
        {navLinks.map((link) => (
          <button
            key={link.href}
            className={styles.mobileLink}
            onClick={() => handleNavClick(link.href)}
          >
            {link.label}
          </button>
        ))}
        <button
          className={styles.mobileCta}
          onClick={() => handleNavClick("#contact")}
        >
          Enquire Now
        </button>
      </div>
    </nav>
  );
}
