import AnnouncementBar from "../components/layout/AnnouncementBar/AnnouncementBar";
import Navbar from "../components/layout/Navbar/Navbar";
import Contectus from "../components/contact/Contactus/Contactus";
import ContactLocation from "../components/contact/ContactLocation/ContactLocation";
import FooterSection from "../components/layout/Footer/FooterSection";

export default function Contact() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Contectus />
      <ContactLocation />
      <FooterSection />
    </>
  );
}