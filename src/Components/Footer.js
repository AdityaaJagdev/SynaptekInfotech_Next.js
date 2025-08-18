// components/Footer.js
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "@/styles/Home.module.css";
import { Pacifico } from "next/font/google";
// Google Font load (Next.js 13+ way)
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400"
});

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Brand & Description */}
        <div>
            
          <h2 className={`${styles.brandTitle} ${pacifico.className}`}>
            
            SynapTek Infotech</h2>
          <p className={styles.brandText}>
            Providing innovative IT solutions and technology services to help
            businesses thrive in the digital era.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/synaptek-infotech-5b511a353/"target="_blank"><FaLinkedin /></a>
            <a href="https://x.com/SynapTekInfo"target="_blank"><FaXTwitter /></a>
            <a href="https://www.facebook.com/share/16AyRf6mZg/?mibextid=wwXIfr"target="_blank"><FaFacebook /></a>
            <a href="https://www.instagram.com/synaptek_in/"target="_blank"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul className={styles.list}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className={styles.sectionTitle}>Services</h3>
          <ul className={styles.list}>
            <li>Mobile Development</li>
            <li>Web Development</li>
            <li>Graphic & UI/UX Design</li>
            <li>Digital Marketing</li>
            <li>Video Editing</li>
            <li>Product Shoots</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className={styles.sectionTitle}>Newsletter</h3>
          <p className={styles.newsletterText}>
            Subscribe to our newsletter to receive updates on the latest
            technology trends and insights.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p>© 2025 SynapTek Infotech. All rights reserved.</p>
        <div className={styles.bottomBarLinks}>
          <a href="https://synaptek.netlify.app/" target="_blank">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
