import React from "react";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt: "Exploring emerging technologies and trends that will shape the web development landscape this year.",
      date: "January 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Designing for Accessibility: A Practical Guide",
      excerpt: "How to create inclusive digital experiences that work for everyone, regardless of ability.",
      date: "January 8, 2024",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Optimizing Mobile App Performance",
      excerpt: "Proven strategies to improve load times, reduce battery consumption, and enhance user experience.",
      date: "January 1, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3C3C3C] mb-4">Latest Insights</h2>
          <p className="text-xl text-[#9AA0A6] max-w-3xl mx-auto">
            Stay updated with our latest thoughts on technology, design trends, and industry best practices.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-[#00AEEF] to-[#1E3A8A]"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-[#9AA0A6] mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#3C3C3C] mb-3">{post.title}</h3>
                <p className="text-[#9AA0A6] mb-4">{post.excerpt}</p>
                <button
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="text-[#00AEEF] font-medium hover:text-[#0099cc] transition-colors duration-200"
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/blog/all")}
            className="bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2547a3] transition-colors duration-200"
          >
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
