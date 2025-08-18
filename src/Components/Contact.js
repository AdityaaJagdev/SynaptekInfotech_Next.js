import { useState } from "react";
import styles from "@/styles/Home.module.css";
import emailjs from "emailjs-com";
import { FaLinkedin, FaFacebook, FaInstagram,FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import Footer from "./Footer";

export default function Contact() {
  // ✅ State and handlers go inside the function, before return
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Please agree to receive communications.");
      return;
    }

    emailjs
      .send(
        "service_3ihwtg4", // Your EmailJS service ID
        "template_9ldfqqs", // Your EmailJS template ID
        {
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          to_email: "synaptekinfotech@gmail.com",
        },
        "s3pAJjWthMPS322Ts" // Your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            fullName: "",
            email: "",
            company: "",
            service: "",
            message: "",
            consent: false,
          });
        },
        (error) => {
          console.error(error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className={styles.cfContainer}>
      <div>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.subheading}>
          Ready to transform your business with our IT solutions? Contact us today for a free consultation.
        </p>
      </div>
      <div className={styles.cfContent}>
        {/* Left Form */}
        <form className={styles.cfForm} onSubmit={sendEmail}>
          <div className={styles.cfRow}>
            <div className={styles.cfField}>
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="John Smith"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.cfField}>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.cfField}>
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Your Company Ltd."
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className={styles.cfField}>
            <label>Service of Interest</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile App Development</option>
              <option value="seo">SEO Optimization</option>
            </select>
          </div>

          <div className={styles.cfField}>
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell us about your project or requirements..."
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <div className={styles.cfCheckbox}>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <span>
              I agree to receive communications from your company. You can unsubscribe at any time. See our{" "}
              <a href="#">Privacy Policy</a>.
            </span>
          </div>

          <button type="submit" className={styles.cfSubmitBtn}>
            Submit Request
          </button>
        </form>

        {/* Right Info Box */}
        <div className={styles.cfInfoBox}>
          <h3>Contact Information</h3>
          {/* <p> <div className={styles.cson}>
            <FaPhoneAlt className={styles.csons} />
            </div>
            <strong>Phone Number</strong>
            <br />+91 63536 00958
            <br />+91 70169 73867 (H.R)
            <br />+91 93288 35113
          </p> */}
          <div className={styles.scons}>
  <div className={styles.cson}>
    <FaPhoneAlt className={styles.csons} />
  </div>
  <strong>Phone Number</strong>
  <br />+91 63536 00958
  <br />+91 70169 73867 (H.R)
  <br />+91 93288 35113
</div>

          {/* <p>
             <div className={styles.cson}>
            <MdEmail className={styles.csons}/>
            </div>
            <strong></strong>
            <br />
            synatekinfotech@gmail.com
            <br />
            patelfenish34@gmail.com
          </p> */}
          <div className={styles.scons}>
  <div className={styles.cson}>
    <MdEmail className={styles.csons} />
  </div>
  <strong>Email Address</strong>
  <br />            synatekinfotech@gmail.com

  <br />            patelfenish34@gmail.com

</div>

          {/* <p>
            <div className={styles.cson}>
              <MdOutlineAccessTime className={styles.csons}/>
            </div>
        
            <strong>Business Hours</strong>
            <br />
            Monday - Friday: 9:00 AM - 6:00 PM
            <br />
            Saturday: 10:00 AM - 2:00 PM
            <br />
            Sunday: Closed
          </p> */}
          <div className={styles.scons}>
  <div className={styles.cson}>
    <MdOutlineAccessTime className={styles.csons} />
  </div>
  <strong>Business Hours</strong>
  <br />Monday - Friday: 9:00 AM - 6:00 PM
  <br />Saturday: 10:00 AM - 2:00 PM
  <br />Sunday: Closed
</div>

          <div className={styles.cfSocial}>
            <a href="https://www.linkedin.com/in/synaptek-infotech-5b511a353/" target="_blank"><FaLinkedin /></a>
            <a href="https://x.com/SynapTekInfo" target="_blank"><FaXTwitter /></a>
            <a href="https://www.facebook.com/share/16AyRf6mZg/?mibextid=wwXIfr" v><FaFacebook /></a>
            <a href="https://www.instagram.com/synaptek_in/" target="_blank"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
