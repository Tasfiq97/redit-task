import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();
  return (
    <div className="flex flex-wrap justify-center items-center gap-1 sm:space-x-2 mt-6 mb-10 text-sm sm:text-base">
      <button
        className={`px-2 sm:px-3 py-1 rounded border cursor-pointer ${
          currentPage === 1
            ? 'cursor-not-allowed text-gray-400 border-gray-400'
            : 'hover:bg-white/10 border-white text-white'
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ←
      </button>

      {pageNumbers.map((page, index) => (
        <button
          key={index}
          className={`px-2 sm:px-3 py-1 rounded border cursor-pointer ${
            page === currentPage
              ? 'bg-yellow-400 text-black font-bold'
              : typeof page === 'number'
              ? 'hover:bg-white/10 border-white text-white'
              : 'text-gray-400 border-transparent cursor-default'
          }`}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={typeof page !== 'number'}
        >
          {page}
        </button>
      ))}

      <button
        className={`px-2 sm:px-3 py-1 rounded border cursor-pointer ${
          currentPage === totalPages
            ? 'cursor-not-allowed text-gray-400 border-gray-400'
            : 'hover:bg-white/10 border-white text-white'
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
