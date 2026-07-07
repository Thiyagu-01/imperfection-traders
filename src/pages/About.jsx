import AnnouncementBar from "../components/layout/AnnouncementBar/AnnouncementBar";
import Navbar from "../components/layout/Navbar/Navbar";
import AboutHero from "../components/about/AboutHero/AboutHero";
import Story from "../components/about/Story/Story";
import Available from "../components/about/Available/Available";
import Farmers from "../components/about/Farmers/Farmers";
import FooterSection from "../components/layout/Footer/FooterSection";

export default function Product() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <AboutHero />
      <Story />
      <Available />
      <Farmers />
      <FooterSection />
    </>
  );
}