import BlogDetails from "@/components/ui/BlogDetails";

interface blogId{
    params:{
        blogId:string
    }

}

const BlogDetailsPage = async({params}:blogId) => {
    // console.log(params);
const res=await fetch(`http://localhost:4000/blogs/${params.blogId}`);
const blog=await res.json();
    return (
        <div>
            <BlogDetails blog={blog} ></BlogDetails>
        </div>
    );
};

export default BlogDetailsPage;