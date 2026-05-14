import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import ShowroomGallery from "@/components/ShowroomGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import SocialSection from "@/components/SocialSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutSection />
      <ShowroomGallery />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
      <ContactSection />
      <SocialSection />
    </>
  );
}
