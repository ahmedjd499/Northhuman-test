import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import Experiences from "@/components/Experiences";
import Materials from "@/components/Materials";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Products />
      <Experiences />
      <Materials />
      <Testimonials />
      <Footer />
    </>
  );
}
