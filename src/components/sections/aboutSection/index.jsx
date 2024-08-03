import styles from "./aboutSection.module.css";

function AboutSection() {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.aboutHeading}>
        Serene Skincare Aesthetics Clinic <br /> & Wellness Centre
      </h2>
      <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUsCard}>
          <h3 className={styles.aboutUsTitle}>About Us</h3>
          <p className={styles.aboutUsDescription}>
            At Serene Skin Aesthetics & Wellness Centre, we are dedicated to
            providing a luxurious and rejuvenating experience. Our team of
            experienced professionals is committed to helping you achieve your
            skincare goals and promote overall wellness. We offer a wide range
            of aesthetic treatments, from facials and peels to microneedling and
            laser hair removal. Let us help you discover your most confident and
            radiant self.
          </p>
        </div>
        <div className={styles.aboutImageContainer}>
          <img src="/assets/images/acne.jpg" className={styles.aboutImage} />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
