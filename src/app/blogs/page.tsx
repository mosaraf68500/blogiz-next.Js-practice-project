'use client';

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";

const Blogspage = () => {
  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery("");

  if (isLoading) {
    return <p className="text-center mt-12">Loading blogs...</p>;
  }

  if (isError) {
    return <p className="text-center mt-12 text-red-500">Error: {error?.toString()}</p>;
  }

  return (
    <section className="px-6 py-12 bg-base-100 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Latest All Blogs From <span className="text-accent">Blogiz</span>
        </h1>

        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12">
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </p>
      </div>

      {/* Blogs grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog: Blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <p className="text-center col-span-full">No blogs found.</p>
        )}
      </div>
    </section>
  );
};

export default Blogspage;
