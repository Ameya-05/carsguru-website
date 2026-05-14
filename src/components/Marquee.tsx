import styles from "./Marquee.module.css";

const items = [
  "✔ Verified Vehicles",
  "✔ Transparent Pricing",
  "✔ Easy Finance Support",
  "✔ RTO & Insurance Assistance",
];

export default function Marquee() {
  return (
    <div className={styles.strip}>
      <div className={styles.track} style={{ animation: "none", display: "flex", justifyContent: "space-between", flexWrap: "wrap", padding: "0 24px" }}>
        {items.map((item, i) => (
          <span key={i} className={styles.item} style={{ display: "flex", alignItems: "center", padding: "16px", fontWeight: "600" }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
