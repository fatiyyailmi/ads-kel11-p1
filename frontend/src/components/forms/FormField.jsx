const FormField = ({
  label,
  type = "text",
  placeholder,
  className = "",
}) => {

  return (
    <div className={className}>

      {/* LABEL */}
      <label className="text-left block text-bold-blue text-md font-bold mb-2">
        {label}
      </label>

      {/* INPUT */}
      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          rounded-lg
          border
          border-light-blue
          bg-light-blue-2
          px-4
          py-2
          text-md
          text-bold-blue
          placeholder:text-light-blue
          placeholder:font-light
          focus:outline-none
          focus:ring-1
          focus:ring-light-blue
        "
      />

    </div>
  );
};

export default FormField;