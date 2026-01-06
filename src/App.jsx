import "./App.css";
import { PromtSection } from "./ui/layouts/Promt";
import { HeroSection } from "./ui/layouts/Hero";
import { StatisticSection } from "./ui/layouts/Statistic";

function App() {
  const scrollToPromt = () => {
    const promt = document.getElementById("promt");
    promt.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <HeroSection onScroll={scrollToPromt} />
      <StatisticSection />
      <PromtSection />
    </>
  );
}

export default App;
