import styles from "@/styles/Home.module.css";
import Image from 'next/image';
import WhyChooseUs from "./Choose";






  const cards = [
    {
    image: '/images/build.jpg',
    title: 'Building the Future with Innovation',
    points: [
      '<strong>At Synaptek Infotech</strong>, we specialize in transforming ideas into powerful digital solutions.',
      'We understand that in today’s fast-paced world, <strong>technology is the backbone of business success</strong>.',
      'Our focus is on creating <strong>intelligent, efficient</strong>, and <strong>scalable</strong> solutions.',
      'Every service we deliver is <strong>tailored to your unique business goals</strong>.'
    ]
  },
  {
    image: '/images/software.jpg',
    title: 'Custom Software Development',
    points: [
      'We specialize in developing custom software solutions that are designed around your unique business needs.',
      '<strong>End-to-end product development</strong>',
      '<strong>Scalable architecture</strong> and clean code',
      'Seamless integration with <strong>third-party systems</strong>'
    ]
  },
  {
    image: '/images/stand.jpg',
    title: 'Why Synaptek Stands Out',
    points: [
      '<strong>Industry Expertise:</strong> We’ve worked with startups, SMEs, and enterprise clients.',
      '<strong>End-to-End Solutions:</strong> From strategy to execution we handle it all.',
      '<strong>Security & Scalability:</strong> Future-ready systems that grow with your business.',
      '<strong>Approach:</strong> We listen, adapt, and deliver what your business truly needs.'
    ]
  }
  ];
export default function About() {
  return (
    <div>
     <section className={styles.wrapper}>
      <h2 className={styles.heading}>Technology Solutions</h2>
      <p className={styles.subheading}>
        Our innovative solutions are designed to address complex business challenges and drive digital transformation.
      </p>
      <div className={styles.grid}>
        {cards.map((card, index) => (
  <div className={styles.card} key={index}>
    <Image src={card.image} alt={card.title} className={styles.image} width={50} height={40} layout="responsive" />

            <div className={styles.content}>
              <h3>{card.title}</h3>
              <ul>
                {card.points.map((point, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
    <WhyChooseUs/>
    </div>
    
  );
};


