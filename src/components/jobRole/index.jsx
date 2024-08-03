import styles from "./jobRole.module.css";

function JobRole({ id, title, description, duties }) {
  return (
    <div className={styles.jobRoleContainer}>
      <div className={styles.jobRoleHeader}>
        <h2 className={styles.jobRoleTitle}>{`${id}-  ${title}`}</h2>
        <p className={styles.jobRoleDescription}>{description}</p>
      </div>

      <div>
        <h3>Job Duties</h3>
        <ul className={styles.jobRoleDuties}>
          {duties?.map((duty, index) => (
            <li key={index}>{duty}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JobRole;
