export const TextAreaComponent = ({ value, onChange, maxChar, disabled }) => {
  const placeholder = "Write your thoughts here...";

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
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="resize-none min-h-28 border-2 text-heading block w-full p-3.5 rounded-2xl
                   border-sky-600 bg-neutral-secondary-medium placeholder:text-body shadow-xs
                   focus:border-blue-800 focus:ring-0 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};
