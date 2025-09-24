// components/LatestInsights.tsx
import Image from "next/image"

type Insight = {
  title: string
  excerpt: string
  category: string
  featured?: boolean
  image: string
  readTime: string
  date: string
  link: string
}

const insights: Insight[] = [
  {
    title: "The Purpose of the Communication Management Plan",
    excerpt:
      "Working in a waterfall or predictive project management environment, I've encountered countless planning documents. Yet, amidst all these...",
    category: "Project Management",
    featured: true,
    image: "/Robotics.jpg", // put your local or remote image
    readTime: "8 min read",
    date: "Recent",
    link: "#",
  },
  {
    title:
      "Ethical Strategies for Obtaining Reviews on Upwork: Tips for Fresh Profiles",
    excerpt:
      "As a freelancer on Upwork, winning contracts and closing leads can be challenging, especially for those with fresh profiles. Learn ethical and...",
    category: "Upwork Strategy",
    image: "/ai.jpg",
    readTime: "6 min read",
    date: "Recent",
    link: "#",
  },
]

export default function LatestInsights() {
  return (
    <div id="testimonials">
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-center mb-2">Latest Insights</h2>
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
        Expert insights on business development, project management, and freelancing success
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {insights.map((post, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
          >
            {/* Image */}
            <div className="relative w-full h-52">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              {/* Category Badge */}
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-md">
                {post.category}
              </span>
              {post.featured && (
                <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-md">
                  Featured
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between h-full">
              {/* Meta */}
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2">{post.title}</h3>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Button */}
              <a
                href={post.link}
                className="inline-block text-blue-600 border border-blue-600 rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-50 transition text-center"
              >
                Read Full Article →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}
