import "./App.css";
import { PromtSection } from "./ui/layouts/Promt";
import { HeroSection } from "./ui/layouts/Hero";
import { StatisticSection } from "./ui/layouts/Statistic";

function App() {
  return (
    <>
      <HeroSection />
      <StatisticSection />
      <PromtSection />
    </>
  );
}

export default App;
