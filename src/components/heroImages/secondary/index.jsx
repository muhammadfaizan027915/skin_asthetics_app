import styles from "./secondary.module.css";

function SecondaryHeroImage() {
  return (
    <img
      src="/assets/images/secondaryHeroImage.jpg"
      className={styles.secondaryHeroImage}
      alt="hero-image"
    />
  );
}

export default SecondaryHeroImage;
