import { permanentMakeupServices } from "../../../utils/constants";

import Layout from "../../../layout";
import SectionHeader from "../../../components/sections/sectionHeader";
import styles from "./semiPermanentMakeup.module.css";
import ServiceCard from "../../../components/cards/service";

function SemiPermanentMakeup() {
  return (
    <Layout>
      <div className="contentContainer">
        <SectionHeader
          subTitle={"Serene Skincare Aesthetics Clinic & Wellness Centre"}
        />
        <div className={styles.aboutSkinCareSection}>
          <img
            src="/assets/images/semiPermanentMakeup.jpg"
            alt="semiPermanentMakeup"
            className={styles.aboutSkinCardImage}
          />
          <SectionHeader
            subTitle={"About Semi-Permanent Make-Up"}
            description={
              "At Serene Skin Aesthetics & Wellness Centre, we offer a range of semi-permanent make-up services designed to enhance your natural beauty with long.lasting results. Our skilled professionals use the latest techniques to ensure your best every day."
            }
          />
        </div>
      </div>
      <div className={styles.servicesContainer}>
        <h1 className={styles.servicesHeading}>
          About Semi-Permanent Makeup Services
        </h1>
        <div className={`contentContainer ${styles.servicesListContainer}`}>
          {permanentMakeupServices?.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      <div className={styles.appointmentContainer}>
        <button className={"button btnPrimary"}>Book an Appointment</button>
      </div>
    </Layout>
  );
}

export default SemiPermanentMakeup;
