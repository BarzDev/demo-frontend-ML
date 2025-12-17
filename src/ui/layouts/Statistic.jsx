import SkillBarChart from "../components/SkillBarChart";

export const StatisticSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white/50 px-4">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
        Top 20 Skills Paling Sering Muncul
      </h2>

      <div
        className="
        w-full 
        max-w-6xl 
        bg-white/80 
        rounded-2xl 
        p-4 
        shadow-lg
        h-[400px]
        md:h-[500px]
      "
      >
        <SkillBarChart />
      </div>
    </section>
  );
};
