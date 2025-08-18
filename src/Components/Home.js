import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImageWrapper}>
        <Image
          src="/images/heroimg.jpg"
          alt="Hero"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className={styles.heroContent}>
        <h1>
          Innovative IT Solutions <br /> for Your Business Growth
        </h1>
        <p>
          We deliver cutting-edge technology services tailored to your business
          needs, helping you stay ahead in the digital transformation journey.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Explore Services</button>
          <button className={styles.secondaryButton}>Schedule Consultation</button>
        </div>
      </div>
    </div>
  );
}
