import FilterForm from "@/components/FilterForm";
import Pagination from "@/components/Pagination";
import PostTable from "@/components/PostTable";
import { getFilteredPosts } from "@/lib/getFilteredPosts";

interface PageProps {
  searchParams?: {
    page?: string;
    query?: string;
  };
}

const POSTS_PER_PAGE = 10;

export default async function Home({ searchParams }: PageProps) {
  const page = parseInt(searchParams?.page || "1");
  const query = searchParams?.query || "";

  const allPosts = await getFilteredPosts(query);

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const currentPosts = allPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-semibold text-center text-indigo-600 underline underline-offset-4 decoration-indigo-400 tracking-tight mb-6">
        Explore Posts with Filters & Pagination
      </h1>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <FilterForm initialQuery={query} />
        <PostTable
          posts={currentPosts}
          currentPage={page}
          pageSize={POSTS_PER_PAGE}
        />
        <Pagination currentPage={page} totalPages={totalPages} />
      </main>
    </div>
  );
}
