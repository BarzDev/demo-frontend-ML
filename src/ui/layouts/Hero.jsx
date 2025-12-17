export const HeroSection = () => {
  return (
    <div className="h-dvh flex items-center justify-center flex-col">
      <div className="text-white ">
        <h1 className="text-7xl font-bold">Next Step: Karierku</h1>
        <h2 className="text-3xl pt-2">
          Sistem Rekomendasi Jalur Karier Berbasis Keahlian
        </h2>
      </div>
      <div className="pt-2">
        <button
          onClick={() => {
            alert("hello");
          }}
          className="border px-4 py-2 rounded-lg text-white  my-2 cursor-pointer"
        >
          Coba Analisis
        </button>
      </div>
    </div>
  );
};
