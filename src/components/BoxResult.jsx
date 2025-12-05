import { TypeAnimation } from "react-type-animation";

export const BoxResultComponent = ({ onDone, text }) => {
  return (
    <div className="border-2 p-4 border-sky-600 rounded-xl text-sm md:text-base leading-relaxed">
      <TypeAnimation
        sequence={[text, () => onDone()]}
        wrapper="span"
        cursor={true}
        repeat={0}
      />
    </div>
  );
};
