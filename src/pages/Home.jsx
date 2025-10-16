import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import LastChance from "../components/LastChance";
import Timeline from "../components/Timeline";
import LockIn from "../components/LockIn";
import Campuses from "../components/Campuses";
import TwoPaths from "../components/TwoPaths";
import WinningStudents from "../components/WinningStudents";
import WorkHard from "../components/WorkHard";
import ExclusiveFeatures from "../components/ExclusiveFeatures";
import Choice from "../components/Choice";
import PriceIncrease from "../components/PriceIncrease";
import FAQ from "../components/FAQ";
import { useEffect } from "react";
import "../index.css";

const Home = () => {
  useEffect(() => {
    import("../assets/styles/home.css");
    return () => {
      const styleTags = document.querySelectorAll(
        'link[href*="home.css"], style[data-vite-dev-id*="home.css"]'
      );
      styleTags.forEach(tag => tag.remove());
    };
  }, []);
  return (
    <div>
      <Hero />
      <Reviews />
      <LastChance />
      <Timeline />
      <LockIn />
      <Campuses />
      <TwoPaths />
      <WinningStudents />
      <WorkHard />
      <ExclusiveFeatures />
      <Choice />
      <PriceIncrease />
      <FAQ />
    </div>
  );
};

export default Home;
