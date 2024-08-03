import { whyChooseUsList } from "../../../utils/constants";
import WhyChooseUsCard from "../../cards/whyChooseUs";
import styles from "./whyChooseUsSection.module.css";

function WhyChooseUsSection() {
  return (
    <div className={styles.whyChooseUsContainer}>
      <h2 className={styles.whyChooseUsHeading}>Why Choose Us?</h2>

      <div className={`contentContainer ${styles.whyChooseUsCardsContainer}`}>
        {whyChooseUsList.map((whyUs, index) => (
          <WhyChooseUsCard key={index} {...whyUs} />
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUsSection;
