"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface Props {
  initialQuery: string;
}

export default function FilterForm({ initialQuery }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    params.set("page", "1"); // Reset page when searching
    router.push(`/?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center w-full space-x-2 items-center gap-2">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts"
        className="input p-2 border border-gray-400 rounded-md input-bordered w-full max-w-xs"
      />
      <button
        type="submit"
        className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium rounded-md px-4 py-2 transition">
        Search
      </button>
    </form>
  );
}
