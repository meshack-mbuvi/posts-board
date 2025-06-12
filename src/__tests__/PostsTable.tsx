import PostTable from "@/components/PostTable";
import { Post } from "@/types/post";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("PostTable", () => {
  it("renders post data correctly", () => {
    const posts: Post[] = [
      { id: 1, userId: 2, title: "Test Title", body: "Test Body" },
    ];

    render(<PostTable posts={posts} currentPage={1} pageSize={10} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Body")).toBeInTheDocument();
  });
});
