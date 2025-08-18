import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { Pacifico } from "next/font/google";

// Google Font load (Next.js 13+ way)
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400"
});

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <span className={`${styles.infotech} ${pacifico.className}`}>
            SynapTek Infotech
          </span>
        </div>

        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.active}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Solutions</Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>

        <div className={styles.getStarted}>
          <Link href="#">
            <button className={styles.button}>Get Started</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
