import { coursesList } from "../../../utils/constants";

import CourseCard from "../../cards/course";
import styles from "./coursesSection.module.css";

function CoursesSection() {
  return (
    <div className={styles.coursesSectionContainer}>
      <h2 className={styles.coursesSectionHeading}>Our CPD Certified Courses</h2>
      <div className={styles.coursesListContainer}>
        {coursesList?.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}

export default CoursesSection;
