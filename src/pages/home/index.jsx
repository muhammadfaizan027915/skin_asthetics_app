import Layout from "../../layout";
import AboutSection from "../../components/sections/aboutSection";
import WhyChooseUsSection from "../../components/sections/whyChooseUsSection";
import ServicesSection from "../../components/sections/servicesSection";

function Home() {
  return (
    <Layout heroImageType={"primary"}>
      <div className="contentContainer">
        <AboutSection />
      </div>
      <WhyChooseUsSection />
      <div className="contentContainer">
        <ServicesSection />
      </div>
    </Layout>
  );
}

export default Home;
