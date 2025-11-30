import { TypeAnimation } from "react-type-animation";

export const BoxResultComponent = () => {
  const loremText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
`;

  return (
    <div className="border-2 p-4 border-sky-600 rounded-xl mt-3 text-sm md:text-base leading-relaxed">
      <TypeAnimation
        sequence={[loremText]}
        wrapper="span"
        cursor={true}
        repeat={0}
      />
    </div>
  );
};
