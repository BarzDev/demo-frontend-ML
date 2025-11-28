import { useState } from "react";
import { TextAreaComponent } from "./components/TextArea";
import { ButtonComponent } from "./components/Button";
import { BoxResultComponent } from "./components/BoxResult";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  const onClick = () => {
    setShow(!show);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-white w-screen text-center pt-10 pb-5">
        Hello world!
      </h1>

      <div className="flex items-center justify-center  px-60 ">
        <div className="container bg-white/80 p-10 rounded-2xl shadow-lg shadow-gray-200/60 mb-5">
          <TextAreaComponent />

          <ButtonComponent onClick={onClick} />

          {show && <BoxResultComponent />}
        </div>
      </div>
    </>
  );
}

export default App;
