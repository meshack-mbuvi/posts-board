import FilterForm from "@/components/FilterForm";
import Pagination from "@/components/Pagination";
import PostTable from "@/components/PostTable";
import { getFilteredPosts } from "@/lib/getFilteredPosts";

const POSTS_PER_PAGE = 10;

export default async function Home(props: {
  searchParams: Promise<{
    page?: string;
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;

  const page = parseInt(searchParams?.page || "1");
  const query = searchParams?.query || "";

  const allPosts = await getFilteredPosts(query);

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const currentPosts = allPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen mt-4 p-8 pb-20 sm:p-20">
      <h1 className="text-4xl font-semibold text-center text-indigo-500 underline decoration-indigo-400 tracking-tight mb-6">
        Explore Posts with Filters & Pagination
      </h1>

      <main className="flex flex-col gap-6 row-start-2 items-center sm:items-start">
        <FilterForm initialQuery={query} />
        <PostTable posts={currentPosts} />
        <Pagination currentPage={page} totalPages={totalPages} />
      </main>
    </div>
  );
}
