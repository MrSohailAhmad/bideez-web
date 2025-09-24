
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TeamSection from "./components/TeamSection";
import OurVision from "./components/OuVision";
import SuccessStory from "./components/SuccessStory";
import Leadership from "./components/Leadership";
import Testimonials from "./components/Testimonials";
import LatestInsights from "./components/LatestInsights";
import Article from "./components/Article";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero/>
    <About/>
    <TeamSection/>
    <OurVision/>
    <SuccessStory/>
    <Leadership/>
    <Testimonials/>
    <LatestInsights/>
    <Article/>
    <GetInTouch/>
    <Footer/>
   </div>
      
  );
}
