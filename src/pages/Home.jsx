import AnnouncementBar from "../components/layout/AnnouncementBar/AnnouncementBar";
import Navbar from "../components/layout/Navbar/Navbar";
import HeroSection from "../components/home/HeroSection/HeroSection";
import CategorySection from "../components/home/CategorySection/CategorySection";
import FreshHarvestSection from "../components/home/FreshHarvestSection/FreshHarvestSection";
import WhyChooseSection from "../components/home/WhyChooseSection/WhyChooseSection";
import Orderprocess from "../components/home/Orderprocess/Orderprocess";
import TestimonialsSection from "../components/home/TestimonialsSection/TestimonialsSection";
import FAQSection from "../components/home/FAQSection/FAQSection";
import FooterSection from "../components/layout/Footer/FooterSection";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <CategorySection />
      <FreshHarvestSection />
      <WhyChooseSection />
      <Orderprocess />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}