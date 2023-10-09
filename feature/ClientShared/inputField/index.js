import React, { useState } from "react";

const InputField = ({
  placeholder,
  label,
  type,
  errorMsg,
  onChange,
  value,
  name,
}) => {
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    let inputValue = e.target.value;
    console.log( e.target.value)
    const valid = inputValue.trim() !== "";
    setError(!valid);
    onChange(name, inputValue, valid);
  };
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="text-gray_2 text-xl font-medium mb-4 block"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        className="ps-7 pe-14 text-gray_2 font-medium w-full h-[68px] rounded-md bg-light_red outline-none"
      />
      {error && <span>{errorMsg}</span>}
    </div>
  );
};

export default InputField;
