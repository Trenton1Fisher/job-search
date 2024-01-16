import React from 'react'

interface PaginationProps {
  page?: string
  handlePaginationButtonClick: (option: number | undefined) => void
  firstPagOption?: number
  secondPagOption?: number
  currentPagOption?: number
}

export default function Pagination({
  page,
  handlePaginationButtonClick,
  firstPagOption,
  secondPagOption,
  currentPagOption,
}: PaginationProps) {
  return (
    <div className="text-center">
      {page !== undefined ? (
        <div>
          <button
            className="bg-gray-300 text-gray-800 border border-gray-400 rounded px-2 py-1 m-1 text-sm cursor-pointer"
            onClick={() => handlePaginationButtonClick(firstPagOption)}
          >
            {firstPagOption}
          </button>
          <button className="bg-black text-white rounded px-2 py-1 m-1 text-sm cursor-pointer">
            {currentPagOption}
          </button>
          <button
            className="bg-gray-300 text-gray-800 border border-gray-400 rounded px-2 py-1 m-1 text-sm cursor-pointer"
            onClick={() => handlePaginationButtonClick(secondPagOption)}
          >
            {secondPagOption}
          </button>
        </div>
      ) : (
        <div>
          <button className="bg-black text-white rounded px-2 py-1 m-1 text-sm cursor-pointer">
            1
          </button>
          <button
            className="bg-gray-300 text-gray-800 border border-gray-400 rounded px-2 py-1 m-1 text-sm cursor-pointer"
            onClick={() => handlePaginationButtonClick(2)}
          >
            2
          </button>
          <button
            className="bg-gray-300 text-gray-800 border border-gray-400 rounded px-2 py-1 m-1 text-sm cursor-pointer"
            onClick={() => handlePaginationButtonClick(3)}
          >
            3
          </button>
        </div>
      )}
    </div>
  )
}
