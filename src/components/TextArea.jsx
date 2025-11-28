export const TextAreaComponent = () => {
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
        className="resize-none min-h-28 bg-neutral-secondary-medium border-2 text-heading 
             block w-full p-3.5 placeholder:text-body rounded-2xl shadow-xs
             border-sky-600 
             focus:border-blue-800 focus:ring-0 focus:outline-none"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};
