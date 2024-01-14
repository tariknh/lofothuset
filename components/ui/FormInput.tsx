import React from "react";

type FormInputProps = {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  formData: any;
  handleInputChange: any;
};

function FormInput({
  label,
  type,
  placeholder,
  id,
  formData,
  handleInputChange,
}: FormInputProps) {
  return (
    <div className="w-full">
      <label className="" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="border-[1px] border-[#676767] p-4 rounded-lg outline-none  w-full mt-2"
        type={type}
        placeholder={placeholder}
        name={id}
        value={formData}
        onChange={handleInputChange}
        required
      />
    </div>
  );
}

export default FormInput;
