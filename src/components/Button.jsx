export const ButtonComponent = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg text-white  my-2
        ${disabled ? "bg-gray-400 " : "bg-blue-600 hover:bg-blue-700"}`}
    >
      Generate
    </button>
  );
};
