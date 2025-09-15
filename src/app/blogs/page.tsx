import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";


const Blogspage = async () => {
  const res = await fetch("http://localhost:4000/blogs", {
    cache: "no-store", 
  });
  const blogs: Blog[] = await res.json();

  return (
    <section className="px-6 py-12 bg-base-100 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Latest All Blogs From{" "}
          <span className="text-accent">Blogiz</span>
        </h1>

        {/* Subtitle / description */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12">
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </p>
      </div>

      {/* Blogs grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogspage;
