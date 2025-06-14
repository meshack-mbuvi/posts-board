"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  initialQuery: string;
}

export default function FilterForm({ initialQuery }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);

  const updateURL = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    params.set("page", "1");
    router.push(`/?${params.toString()}`);
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      updateURL(query);
    }, 500);

    return () => clearTimeout(debounceTimeout);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateURL(query);
  };

  const handleClear = () => {
    setQuery("");
    updateURL("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center w-full flex-wrap gap-2 items-center">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-4 py-2 transition">
        Search
      </button>
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="bg-gray-300 cursor-pointer hover:bg-gray-400 text-gray-800 font-medium rounded-md px-4 py-2 transition">
          Clear
        </button>
      )}
    </form>
  );
}
