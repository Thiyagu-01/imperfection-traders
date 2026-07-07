import AnnouncementBar from "../components/layout/AnnouncementBar/AnnouncementBar";
import Navbar from "../components/layout/Navbar/Navbar";
import ProductHero from "../components/product/ProductHero/ProductHero";
import Collection from "../components/product/Collection/Collection";
import FooterSection from "../components/layout/Footer/FooterSection";

export default function Product() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <ProductHero />
      <Collection />
      <FooterSection />
    </>
  );
}