'use client'

import { Dispatch, SetStateAction } from 'react'

interface InputParams {
  id: string
  name: string
  placeholder: string
  searchInput: string
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

export default function Input({
  id,
  name,
  placeholder,
  searchInput,
  setSearchInput,
}: InputParams) {
  function handleFormTextInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <>
      <label
        htmlFor={name}
        className="text-gray-800 font-semibold mb-1 uppercase"
      >
        {name}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={searchInput}
        onChange={e => handleFormTextInputChange(e)}
        className="rounded-2xl shadow-lg p-4 mb-4"
      />
    </>
  )
}
