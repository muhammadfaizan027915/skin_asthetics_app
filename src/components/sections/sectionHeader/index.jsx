import styles from "./sectionHeader.module.css";

function SectionHeader({ title, subTitle, description }) {
  return (
    <div className={styles.sectionHeaderContainer}>
      <h1 className={styles.sectionTitle}>{title}</h1>
      <h2 className={styles.sectionSubTitle}>{subTitle}</h2>
      <p className={styles.sectionDescription}>{description}</p>
    </div>
  );
}

export default SectionHeader;
