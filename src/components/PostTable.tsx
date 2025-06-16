"use client";

import { Post } from "@/types/post";
import React from "react";

interface Props {
  posts: Post[];
}

const PostTable: React.FC<Props> = ({ posts }) => {
  return (
    <div className="overflow-x-auto w-full rounded-lg shadow-md border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr className="font-semibold text-gray-700">
            <th className="px-4 py-3 text-left">ID</th>
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">Body</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {posts.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center text-gray-500 py-6">
                No posts found.
              </td>
            </tr>
          ) : (
            posts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 whitespace-nowrap text-gray-800">
                  {post.id}
                </td>
                <td className="px-4 py-3 capitalize text-gray-800">
                  {post.title}
                </td>
                <td className="px-4 py-3 capitalize text-gray-600">
                  {post.body}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
