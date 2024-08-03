import CourseRegistrationForm from "../../forms/courseRegistration";
import styles from "./courseRegistrationSection.module.css";

function CourseRegsitrationSection() {
  return (
    <div className={styles.courseRegistrationContainer}>
      <div className={"contentContainer"}>
        <h1 className={styles.courseRegistrationTitle}>Course Registeration</h1>
        <CourseRegistrationForm />
      </div>
    </div>
  );
}

export default CourseRegsitrationSection;
