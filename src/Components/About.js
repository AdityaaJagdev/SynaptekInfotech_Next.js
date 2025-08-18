import styles from "@/styles/Home.module.css";



const services = [
  {
    icon: '📱',
    title: 'Mobile Application',
    description:
      'We develop intuitive and scalable mobile applications for iOS and Android platforms.',
  },
  {
    icon: '💻',
    title: 'Web Development',
    description:
      'Our team creates modern, high-performance, and responsive websites tailored to your needs.',
  },
  {
    icon: '🎭',
    title: 'Graphic & UI-UX Design',
    description:
      'We craft visually stunning and user-friendly UI/UX designs to enhance user experiences.',
  },
  {
    icon: '📣',
    title: 'Digital Marketing',
    description:
      'We provide result-driven digital marketing services to grow your business online.',
  },
  {
    icon: '🎥',
    title: 'Video Editing',
    description:
      'Our professional video editing services turn your raw footage into impactful and polished videos.',
  },
  {
    icon: '🌟',
    title: 'Product Shoots',
    description:
      'We offer high-quality product photography services that showcase your products in the best possible way.',
  },
];

export default function About() {
  return (
  <div className={styles.sectionWrapper}>
   

      <h1 className={styles.sectionTitles}>Our Comprehensive IT Services</h1>

      <p className={styles.sectionSubtitle}>
        We offer a wide range of technology services designed to optimize your business operations,
        enhance security, and drive innovation.
      </p>

      <div className={styles.cardGrid}>
        {services.map((service, index) => (
          <div className={styles.cardBox} key={index}>
<div className={styles.cardIcon}>{service.icon}</div>
            <div className={styles.cardContent}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
   
  );
}
 