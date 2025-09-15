import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";

const HomePage = async () => {
  const res=await fetch("http://localhost:4000/blogs");
  const blogs=await res.json();
  return (
    <>
      <LatestBlogs blogs={blogs}></LatestBlogs>
    </>
  );
};

export default HomePage;
