import AboutUs from "./components/AboutUs";
import { Hero } from "./components/Hero";
import { Newsletter } from "./components/Newsletter";
import { Services } from "./components/Services";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <Newsletter />
    </>
  );
}

export default Home;
