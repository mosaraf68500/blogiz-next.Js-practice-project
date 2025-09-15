// Blog interface
export interface Blog {
  id: string;
  title: string;
  description: string;
  publish_date: string; // ISO date format (e.g., "2024-03-01")
  author_name: string;
  blog_image: string;
  total_likes: string; // যদি সংখ্যা লাগে তবে number ব্যবহার করতে পারো
}
