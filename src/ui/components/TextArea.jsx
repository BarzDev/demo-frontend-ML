export const TextAreaComponent = ({
  text,
  onChange,
  disabled,
  isLoading,
  onGetResult,
}) => {
  const placeholder = "Write your thoughts here...";
  const maxChar = 1000;

  return (
    <div>
      <label
        htmlFor="message"
        className="block mb-2.5 font-medium text-heading"
      >
        Describe yourself
      </label>

      <textarea
        id="message"
        rows="4"
        maxLength={maxChar}
        value={text}
        onChange={onChange}
        disabled={disabled}
        className={`resize-none min-h-28 border-2 text-heading block w-full p-3.5 rounded-2xl
                    bg-neutral-secondary-medium placeholder:text-body shadow-xs
                   focus:border-blue-800 focus:ring-0 focus:outline-none 
                    ${isLoading ? "border-gray-400" : "border-sky-600"}`}
        placeholder={placeholder}
      />

      <div className="flex items-start justify-between">
        <button
          onClick={onGetResult}
          disabled={disabled}
          className={`px-4 py-2 rounded-lg text-white  my-2
        ${disabled ? "bg-gray-400 " : "bg-blue-600 hover:bg-blue-700"}`}
        >
          Generate
        </button>

        <span className="text-sm text-gray-500 me-3 mt-2">
          {text.length} / {maxChar}
        </span>
      </div>
    </div>
  );
};
