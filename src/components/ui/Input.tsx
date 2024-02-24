"use client";

import { Dispatch, SetStateAction } from "react";
import { useFormStatus } from "react-dom";

interface InputParams {
  id: string;
  name: string;
  placeholder: string;
  searchInput: string;
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

export default function Input({
  id,
  name,
  placeholder,
  searchInput,
  setSearchInput,
}: InputParams) {
  const { pending } = useFormStatus();

  function handleFormTextInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <input
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      value={searchInput}
      onChange={(e) => handleFormTextInputChange(e)}
      className="rounded-2xl shadow-lg p-3"
      disabled={pending}
    />
  );
}
