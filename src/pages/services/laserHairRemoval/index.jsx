import Header from "../../../components/header";
import Footer from "../../../components/footer";
import HeroImage from "../../../components/heroImage";
import AboutSection from "../../../components/aboutSection";
import ServiceCard from "../../../components/cards/service";
import { pageDetails, services } from "../../../utils/constants";
import styles from "./laserHairRemoval.module.css";

function LaserHairRemoval() {
  const { title, description } = pageDetails.laserHairRemoval;

  return (
    <div>
      <Header />
      <HeroImage />
      <div className={styles.contentContainer}>
        <AboutSection title={title} description={description} />
        <div className={styles.servicesContainer}>
          {services?.map(({ imageUrl, name, tagline }, i) => (
            <ServiceCard
              key={i}
              name={name}
              tagline={tagline}
              imageUrl={imageUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LaserHairRemoval;
