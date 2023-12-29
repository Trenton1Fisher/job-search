import React, { Dispatch, SetStateAction } from 'react'

interface SelectProps {
  id: string
  name: string
  label: string
  placeholder: string
  value: string | number
  options: { value: string | number; label: string }[]
  setSearchInput: Dispatch<
    SetStateAction<{
      keywords: string
      location: string
      distance: number
      jobType: string
      minimumSalary: number
    }>
  >
}

export default function Select({
  id,
  name,
  label,
  placeholder,
  value,
  options,
  setSearchInput,
}: SelectProps) {
  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = e.target.value

    setSearchInput(prev => ({
      ...prev,
      [name]: selectedValue,
    }))
  }

  return (
    <>
      <label htmlFor={id} className="text-gray-800 font-semibold mb-1">
        {label}
      </label>
      <select
        id={id}
        name={name}
        className="rounded-2xl shadow-lg p-4 mb-4 cursor-pointer"
        value={value}
        onChange={handleSelectChange}
      >
        <option value="" hidden>
          {placeholder}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
}
