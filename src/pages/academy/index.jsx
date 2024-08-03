import Layout from "../../layout";
import CoursesSection from "../../components/sections/coursesSection";
import SectionHeader from "../../components/sections/sectionHeader";
import CourseRegsitrationSection from "../../components/sections/courseRegistrationSection";

function Academy() {
  return (
    <Layout>
      <div className="contentContainer">
        <SectionHeader title={"Serene Academy"} />
        <CoursesSection />
      </div>
      <CourseRegsitrationSection />
    </Layout>
  );
}

export default Academy;
