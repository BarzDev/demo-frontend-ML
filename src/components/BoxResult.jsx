import { TypeAnimation } from "react-type-animation";

export const BoxResultComponent = () => {
  const loremText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
`;

  return (
    <div className="border-2 p-3.5 border-sky-600  rounded-xl">
      <TypeAnimation
        sequence={[loremText]}
        wrapper="span"
        cursor={true}
        repeat={0}
        // style={{ fontSize: "2em", display: "inline-block" }}
      />
    </div>
  );
};
