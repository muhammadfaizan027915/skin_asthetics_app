import Header from "../components/header";
import SeconadaryHeroImage from "../components/heroImages/secondary";
import PrimaryHeroImage from "../components/heroImages/primary";
import Footer from "../components/footer";

function Layout({ children, heroImageType }) {
  return (
    <>
      <Header />
      {heroImageType === "primary" ? (
        <PrimaryHeroImage />
      ) : (
        <SeconadaryHeroImage />
      )}
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
