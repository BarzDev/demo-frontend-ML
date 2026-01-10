import "./App.css";
import { PromptSection } from "./ui/layouts/Prompt";
import { HeroSection } from "./ui/layouts/Hero";
import { StatisticSection } from "./ui/layouts/Statistic";

function App() {
  const scrollToPromt = () => {
    const promt = document.getElementById("prompt");
    promt.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <HeroSection onScroll={scrollToPromt} />
      <StatisticSection />
      <PromptSection />
    </>
  );
}

export default App;
