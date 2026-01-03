import { useState } from "react";

import { BoxResultComponent } from "../components/BoxResult";
import { SpinnerComponent } from "../components/Spinner";
import { TextAreaComponent } from "../components/TextArea";
import { textResponse } from "../../utils/textRepsonse";

export const PromtSection = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [result, setResult] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchModel = async () => {
    try {
      const url = "http://127.0.0.1:8000/api/recommendations/";

      const user_persona =
        "Saya merupakan mahasiswa fresh graduate yang memiliki ketertarikan besar di bidang kreatif dan media. Selama masa perkuliahan, saya aktif mempelajari dasar-dasar desain visual, produksi konten digital, dan komunikasi kreatif. Saya terbiasa mengerjakan tugas kuliah yang berkaitan dengan pembuatan konten media sosial, desain poster, presentasi visual, serta penulisan konten sederhana. Saya memiliki minat kuat pada storytelling visual dan bagaimana sebuah pesan dapat disampaikan secara menarik kepada audiens. Saya terbiasa bekerja dengan tools desain dasar dan senang mengikuti tren media digital serta perkembangan platform sosial. Sebagai fresh graduate, saya terbuka untuk belajar, menerima masukan, dan mengembangkan kemampuan kreatif saya melalui pengalaman kerja di industri kreatif dan media.";

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_persona }),
        // body: JSON.stringify({ user_persona: text }),
      });
      const data = await res.json();

      const result = textResponse(data);

      setResult(result);
      // setResult(user_persona);
    } catch (error) {
      console.log(error);
    }
  };

  const onGetResult = async () => {
    setIsTyping(true);
    setIsLoading(true);
    setShow(false);

    await fetchModel();

    setIsLoading(false);
    setShow(true);
  };

  return (
    <div className="h-dvh flex items-center justify-center flex-col">
      <h2 className="text-white pb-5 text-2xl font-bold">Promt</h2>
      <div className="flex items-center justify-center px-4 md:px-10 lg:px-20 min-w-screen">
        <div className="w-full max-w-2xl bg-white/80 p-6 md:p-10 rounded-2xl shadow-lg shadow-gray-200/60 mb-10">
          <TextAreaComponent
            text={text}
            onChange={(e) => setText(e.target.value)}
            isLoading={isLoading}
            disabled={isTyping || isLoading}
            onGetResult={() => onGetResult()}
          />

          {isLoading && (
            <div className="flex justify-center my-4">
              <SpinnerComponent />
            </div>
          )}

          {show && (
            <BoxResultComponent
              onDone={() => setIsTyping(false)}
              result={result}
            />
          )}
        </div>
      </div>
    </div>
  );
};
