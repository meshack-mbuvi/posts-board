"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex w-full justify-center mt-6 space-x-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md border text-sm font-medium transition 
          ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 cursor-pointer hover:bg-gray-100 border-gray-300"
          }`}>
        Previous
      </button>

      <span className="self-center text-sm font-medium text-gray-600">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
        className={`px-4 py-2 rounded-md border text-sm font-medium transition 
          ${
            currentPage === totalPages || totalPages === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white cursor-pointer text-gray-700 hover:bg-gray-100 border-gray-300"
          }`}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
