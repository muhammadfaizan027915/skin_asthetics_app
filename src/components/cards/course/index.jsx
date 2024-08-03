import styles from "./course.module.css";

function CourseCard({ title, description }) {
  return (
    <div className={styles.courseCardContainer}>
      <h2 className={styles.courseCardTitle}>{title}</h2>
      <p className={styles.courseDescription}>{description}</p>
    </div>
  );
}

export default CourseCard;
