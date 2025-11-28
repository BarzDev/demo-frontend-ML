export const ButtonComponent = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition cursor-pointer my-3"
    >
      Button
    </button>
  );
};
