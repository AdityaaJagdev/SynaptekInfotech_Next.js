import styles from "@/styles/Home.module.css";
import { FaUserTie, FaHeadset, FaLightbulb, FaCertificate } from "react-icons/fa";
import Image from "next/image";
import Contact from "./Contact";


export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Text Content */}
       
        <div className={styles.content}>
           <h2 className={styles.title}>Why Choose Us</h2>
          <p className={styles.intro}>
            With over 12 years of experience in delivering cutting-edge IT solutions,
            we ve helped hundreds of businesses transform their digital landscape and
            achieve sustainable growth.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.icon}><FaUserTie /></div>
              <div>
                <h4>Expert Team</h4>
                <p>Our team of certified IT professionals brings extensive experience across various technology domains.</p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.icon}><FaHeadset /></div>
              <div>
                <h4>Dedicated Support</h4>
                <p>We provide 24/7 responsive support to ensure your systems run smoothly without interruption.</p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.icon}><FaLightbulb /></div>
              <div>
                <h4>Innovative Approach</h4>
                <p>We stay at the forefront of technology trends to deliver innovative solutions that drive business growth.</p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.icon}><FaCertificate /></div>
              <div>
                <h4>Industry Certifications</h4>
                <p>We maintain the highest industry standards with certifications from Microsoft, AWS, Cisco, and more.</p>
              </div>
            </div>
          </div>

          <a href="#" className={styles.button}>Learn More About Us</a>
        </div>

        {/* Image */}
     <div className={styles.image}>
  <Image src="/images/frame.png" alt="Team working in server room" width={500} height={400} />
</div>

      </div>
<Contact/>  

    </section>
  );
}
