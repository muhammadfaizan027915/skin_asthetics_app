import styles from "./whyChooseUs.module.css";

function WhyChooseUsCard({ title, description, imageUrl }) {
  return (
    <div className={styles.cardContainer}>
      <img src={imageUrl} className={styles.cardImage} />
      <div className={styles.cardFooter}>
        <h4 className={styles.cardTitle}>{title}</h4>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}

export default WhyChooseUsCard;
