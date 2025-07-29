import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import About from "@/components/About";
import Membership from "@/components/Membership";
import Strains from "@/components/Strains";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Newsletter />
      <About />
      <Membership />
      <Strains />
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
