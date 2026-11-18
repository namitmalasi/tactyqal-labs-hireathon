import Hero from "../components/home/Hero";
import SuccessStories from "../components/home/SuccessStories";
import HowItWorks from "../components/home/HowItWorks";
import Benefits from "../components/home/Benefits";
import Tools from "../components/home/Tools";
import Testimonials from "../components/home/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <SuccessStories />
      <HowItWorks />
      <Benefits />
      <Tools/>
      <Testimonials/>
    </>
  );
}

export default Home;
