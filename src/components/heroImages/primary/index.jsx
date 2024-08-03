import styles from "./primary.module.css";

function PrimaryHeroImage() {
  return (
    <div className={styles.heroContainer}>
      <img
        src="/assets/images/primaryHeroImage.jpg"
        className={styles.primaryHeroImage}
        alt="primary-hero-image"
      />

      <h1 className={styles.heroTitle}>
        Experince Serenity, <br /> Reveal Your Beauty
      </h1>
    </div>
  );
}

export default PrimaryHeroImage;
