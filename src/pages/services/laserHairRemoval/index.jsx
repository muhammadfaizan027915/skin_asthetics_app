import { pageDetails, hairServices } from "../../../utils/constants";

import Layout from "../../../layout";
import SectionHeader from "../../../components/sections/sectionHeader";
import ServiceCard from "../../../components/cards/service";
import styles from "./laserHairRemoval.module.css";

function LaserHairRemoval() {
  const { title, description } = pageDetails.laserHairRemoval;

  return (
    <Layout heroImageType="secondary">
      <div className={"contentContainer"}>
        <SectionHeader title={title} description={description} />
        <div className={styles.servicesContainer}>
          {hairServices?.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default LaserHairRemoval;
