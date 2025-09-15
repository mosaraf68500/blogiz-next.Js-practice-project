import { Blog } from "@/types";
import React from "react";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({blogs}:{blogs: Blog[]}) => {
  return (
    <section className="px-6 py-12 bg-base-100 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Latest Blogs From{" "}
          <span className="text-accent">Blogiz</span>
        </h1>

        {/* Subtitle / description */}
        <p className="text-base md:text-lg text-gray-800 dark:text-gray-500 mb-8">
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </p>

        
      </div>

      <div className="grid grid-cols-2 gap-4 w-90% mx-auto my-6">
        {
          blogs .slice(0,2) .map(blog=><LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>)
        }
      </div>

      <div className="grid grid-cols-3 gap-4 w-90% mx-auto">
        {
          blogs .slice(2,5) .map(blog=><BlogCard key={blog.id} blog={blog}></BlogCard>)
        }
      </div>
    </section>
  );
};

export default LatestBlogs;
