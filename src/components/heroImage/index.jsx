import styles from "./heroImage.module.css";

function HeroImage() {
  return (
    <img
      src="/assets/images/heroImage.jpg"
      className={styles.heroImage}
      alt="hero-image"
    />
  );
}

export default HeroImage;
