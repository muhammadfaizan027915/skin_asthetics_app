import ServicesList from "../../servicesList";
import SectionHeader from "../sectionHeader";
import styles from "./servicesSection.module.css";

function ServicesSection() {
  return (
    <div className={styles.servicesSectionContainer}>
      <SectionHeader
        title={"Services"}
        description={
          "We offer a comprehensive menu of aesthetic treatments designed to address a variety of skin concerns. Explore some of our most popular services:"
        }
      />

      <ServicesList />

      <a className={"button btnPrimary"}>Book an Appointment</a>
    </div>
  );
}

export default ServicesSection;
