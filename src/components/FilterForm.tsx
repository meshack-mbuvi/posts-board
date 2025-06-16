"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  initialQuery: string;
}

export default function FilterForm({ initialQuery }: Props) {
  const [query, setQuery] = useState(initialQuery);
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateQuery = () => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    params.set("page", "1");

    router.push(`/?${params.toString()}`);
  };

  useEffect(() => {
    const debouncedTimeout = setTimeout(() => {
      updateQuery();
    }, 500);

    return () => clearTimeout(debouncedTimeout);
  }, [query]);

  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Search post"
          className="outline rounded flex-1 outline-gray-200 px-4 py-2"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />

        {query && (
          <button
            className="rounded-md bg-red-500 cursor-pointer text-white px-4 py-2"
            onClick={() => setQuery("")}>
            X
          </button>
        )}
      </div>
    </div>
  );
}
