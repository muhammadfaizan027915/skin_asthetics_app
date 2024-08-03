import { jobRoles } from "../../utils/constants";

import Layout from "../../layout";
import SectionHeader from "../../components/sections/sectionHeader";
import JobRole from "../../components/jobRole";
import styles from "./careers.module.css";

function Careers() {
  return (
    <Layout>
      <div className="contentContainer">
        <SectionHeader
          title={"Serene Skincare Aesthetics Clinic & Wellness Centre"}
          subTitle={"Join Our Team"}
        />

        <div className={styles.jobRolesContainer}>
          {jobRoles?.map((jobRole, index) => (
            <JobRole key={index} id={index + 1} {...jobRole} />
          ))}
        </div>
        <p className={styles.applicationDescription}>
          To apply, please email your resume to: &nbsp; &nbsp;
          <a
            href="mailto:contact@sereneskinesthetics.com"
            className="button btnPrimary"
          >
            contact@sereneskinesthetics.com
          </a>
        </p>
      </div>
    </Layout>
  );
}

export default Careers;
