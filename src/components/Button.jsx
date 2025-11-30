export const ButtonComponent = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg 
                 transition cursor-pointer my-4 w-full md:w-auto"
    >
      Button
    </button>
  );
};
