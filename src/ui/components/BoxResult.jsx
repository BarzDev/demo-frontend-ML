import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const BoxResultComponent = ({ onDone, result }) => {
  const [step, setStep] = useState(0);

  return (
    <div className="border-2 p-4 border-amber-400 rounded-xl text-sm md:text-base leading-relaxed space-y-2">
      <TypeAnimation
        sequence={[result.labels, () => setStep(1)]}
        wrapper="div"
        repeat={0}
        cursor={false}
        className="mb-3"
      />

      {step >= 1 && (
        <TypeAnimation
          sequence={[result.faissRecommend, () => setStep(2)]}
          wrapper="div"
          repeat={0}
          cursor={false}
          className="mb-3"
        />
      )}

      {step >= 2 && (
        <TypeAnimation
          sequence={[result.skillRecommend, () => onDone()]}
          wrapper="div"
          repeat={0}
          cursor={false}
          className="mb-3"
        />
      )}
    </div>
  );
};
