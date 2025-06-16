import { Post } from "@/types/post";

export async function getFilteredPosts(query: string) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    if (!query) return posts;

    return posts.filter(
      (post: Post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.body.toLowerCase().includes(query.toLowerCase())
    );
  } catch (error) {
    console.log({ error });
    return [];
  }
}
