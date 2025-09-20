import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BlogPage = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Static post data for both languages
  const posts = i18n.language === "ar"
    ? [
        {
          id: 1,
          title: "مستقبل تطوير الويب في 2024",
          excerpt: "استكشاف التقنيات والاتجاهات الناشئة التي ستشكل مشهد تطوير الويب هذا العام.",
          date: "15 يناير 2024",
          readTime: "5 دقائق قراءة"
        },
        {
          id: 2,
          title: "تصميم من أجل الوصول: دليل عملي",
          excerpt: "كيفية إنشاء تجارب رقمية شاملة تعمل للجميع بغض النظر عن القدرات.",
          date: "8 يناير 2024",
          readTime: "7 دقائق قراءة"
        },
        {
          id: 3,
          title: "تحسين أداء تطبيقات الجوال",
          excerpt: "استراتيجيات مثبتة لتحسين أوقات التحميل وتقليل استهلاك البطارية وتعزيز تجربة المستخدم.",
          date: "1 يناير 2024",
          readTime: "6 دقائق قراءة"
        }
      ]
    : [
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
          <h2 className="text-3xl font-bold text-[#3C3C3C] mb-4">{t("blog")}</h2>
          <p className="text-xl text-[#9AA0A6] max-w-3xl mx-auto">
            {t("blogsubtitle")}
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
                  className="bg-[#00AEEF] hover:bg-[#0099cc] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  {i18n.language === "ar" ? "اقرأ المزيد" : "Read More"} →
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/blog/all")}
            className="bg-[#00AEEF] hover:bg-[#0099cc] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            {i18n.language === "ar" ? "عرض جميع المقالات" : "View All Articles"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
