import "./App.css";
import { useState } from "react";
import { TextAreaComponent } from "./components/TextArea";
import { ButtonComponent } from "./components/Button";
import { BoxResultComponent } from "./components/BoxResult";
import { SpinnerComponent } from "./components/Spinner";

function App() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loremText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  `;

  const MAX_CHAR = 200;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    setIsTyping(true);
    setIsLoading(true);
    setShow(false);

    setTimeout(() => {
      setResult(loremText);
      setIsLoading(false);
      setShow(true);
    }, 1000);
  };

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-white w-screen text-center pt-10 pb-5">
        Hello world!
      </h1>

      <div className="flex items-center justify-center px-4 md:px-10 lg:px-20">
        <div className="w-full max-w-2xl bg-white/80 p-6 md:p-10 rounded-2xl shadow-lg shadow-gray-200/60 mb-10">
          <TextAreaComponent
            value={text}
            onChange={handleChange}
            maxChar={MAX_CHAR}
          />

          <div className="flex items-start justify-between">
            <ButtonComponent
              onClick={onClick}
              disabled={isTyping || isLoading}
            />

            <span className="text-sm text-gray-500 me-3 mt-2">
              {text.length} / {MAX_CHAR}
            </span>
          </div>

          {isLoading && (
            <div className="flex justify-center my-4">
              <SpinnerComponent />
            </div>
          )}

          {show && (
            <BoxResultComponent
              onDone={() => setIsTyping(false)}
              text={result}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
