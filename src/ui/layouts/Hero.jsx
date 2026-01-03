export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="text-white max-w-4xl">
        <h1
          className="font-bold leading-tight
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-7xl
        "
        >
          Next Step: Karierku
        </h1>

        <h2 className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl text-white/90">
          Sistem Rekomendasi Jalur Karier Berbasis Keahlian
        </h2>
      </div>

      <div className="mt-6">
        <button
          onClick={() => alert("hello")}
          className="
            px-6 py-3
            rounded-xl
            border border-white/60
            text-white
            text-sm sm:text-base
            hover:bg-white/10
            transition
          "
        >
          Coba Analisis
        </button>
      </div>
    </section>
  );
};
