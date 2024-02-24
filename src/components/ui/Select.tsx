import React, { Dispatch, SetStateAction } from "react";
import { useFormStatus } from "react-dom";

interface SelectProps {
  id: string;
  name: string;
  placeholder: string;
  value: string | number;
  options: { value: string | number; label: string }[];
  setSearchInput: Dispatch<
    SetStateAction<{
      keywords: string;
      location: string;
      distance: number;
      jobType: string;
      minimumSalary: number;
    }>
  >;
}

export default function Select({
  id,
  name,
  placeholder,
  value,
  options,
  setSearchInput,
}: SelectProps) {
  const { pending } = useFormStatus();

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = e.target.value;

    setSearchInput((prev) => ({
      ...prev,
      [name]: selectedValue,
    }));
  }

  return (
    <select
      id={id}
      name={name}
      className="rounded-2xl shadow-lg p-3 cursor-pointer"
      value={value}
      onChange={handleSelectChange}
      disabled={pending}
    >
      <option value="" hidden>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
