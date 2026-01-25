import { TypeAnimation } from "react-type-animation";

export const BoxResultComponent = ({ onDone, result }) => {
  const CURSOR_CLASS = "custom-type-animation-cursor";

  if (result.error) {
    return (
      <div className="border-2 p-4 border-(--light) rounded-xl text-sm md:text-base leading-relaxed space-y-2">
        <TypeAnimation
          sequence={[result.msg, () => onDone()]}
          wrapper="div"
          repeat={0}
          speed={50}
          cursor={false}
          className="text-red-600"
        />
      </div>
    );
  }

  return (
    <div className="border-2 p-4 border-(--light) font-medium rounded-xl text-sm md:text-base leading-relaxed space-y-2">
      <TypeAnimation
        wrapper="div"
        repeat={0}
        cursor={false}
        speed={50}
        style={{ whiteSpace: "pre-line" }}
        className={`mb-3 text-justify ${CURSOR_CLASS}`}
        sequence={[
          result.analyzeResult,
          (el) => el.classList.remove(CURSOR_CLASS),
          onDone,
        ]}
      />
    </div>
  );
};
