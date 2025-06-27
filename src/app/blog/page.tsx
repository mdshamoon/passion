import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Scientific Curiosity Labs",
  description: "Latest insights, updates, and thoughts on scientific research and innovation",
};

// Sample blog posts - you can replace these with your actual content
const blogPosts = [
  {
    id: 1,
    title: "Starting the Scientific Revolution in Lucknow",
    excerpt: "Why we chose Lucknow as the birthplace of India's scientific curiosity movement and what it means for the future of research in India.",
    date: "2024-12-15",
    category: "Mission",
    readTime: "5 min read",
    author: "Scientific Curiosity Labs",
    featured: true,
    videoPlaceholder: "Lab Setup Progress in Lucknow"
  },
  {
    id: 2,
    title: "The Power of Physical Labs in Digital Age",
    excerpt: "In an era of virtual everything, why hands-on physical laboratories remain irreplaceable for true scientific learning and innovation.",
    date: "2024-12-10",
    category: "Education",
    readTime: "7 min read",
    author: "Scientific Curiosity Labs",
    featured: false,
    videoPlaceholder: "Physical vs Virtual Learning Comparison"
  },
  {
    id: 3,
    title: "Arduino Projects That Sparked Scientific Curiosity",
    excerpt: "Real stories from our prototype workshops where simple Arduino projects led to breakthrough thinking and innovative solutions.",
    date: "2024-12-05",
    category: "Technology",
    readTime: "6 min read",
    author: "Scientific Curiosity Labs",
    featured: false,
    videoPlaceholder: "Arduino Project Showcase"
  },
  {
    id: 4,
    title: "India's Path to Mathematical Excellence",
    excerpt: "Analyzing how India can build upon its rich mathematical heritage to lead global research in pure and applied mathematics.",
    date: "2024-11-28",
    category: "Mathematics",
    readTime: "8 min read",
    author: "Scientific Curiosity Labs",
    featured: false,
    videoPlaceholder: "Mathematical Research in India"
  },
  {
    id: 5,
    title: "Quantum Computing: India's Next Frontier",
    excerpt: "Exploring opportunities and challenges for India to become a quantum computing superpower in the next decade.",
    date: "2024-11-20",
    category: "Technology",
    readTime: "10 min read",
    author: "Scientific Curiosity Labs",
    featured: false,
    videoPlaceholder: "Quantum Computing Roadmap for India"
  },
  {
    id: 6,
    title: "Building Robots That Inspire Young Minds",
    excerpt: "How robot racing competitions and maze-solving challenges are creating the next generation of engineers and innovators.",
    date: "2024-11-15",
    category: "Robotics",
    readTime: "5 min read",
    author: "Scientific Curiosity Labs",
    featured: false,
    videoPlaceholder: "Student Robot Competition Highlights"
  }
];

const categories = ["All", "Mission", "Education", "Technology", "Mathematics", "Robotics"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Insights, updates, and thoughts on building India's scientific future through curiosity-driven research and innovation
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 bg-white/10 text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-300 border border-white/20 hover:border-emerald-400/40"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 mb-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                  Featured
                </span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-xs border border-blue-500/30">
                  {post.category}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">{post.title}</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full text-white font-semibold hover:scale-105 transition-transform"
                  >
                    Read Full Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className="aspect-video bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-600">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-gray-300 font-medium">{post.videoPlaceholder}</p>
                    <p className="text-gray-500 text-sm mt-1">[YouTube Video Placeholder]</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <div key={post.id} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-emerald-400/30 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                    post.category === 'Technology' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                    post.category === 'Mathematics' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                    post.category === 'Education' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                    post.category === 'Robotics' ? 'bg-orange-500/20 text-orange-300 border-orange-500/30' :
                    'bg-gray-500/20 text-gray-300 border-gray-500/30'
                  }`}>
                    {post.category}
                  </span>
                </div>

                <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600 mb-4">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-gray-300 text-xs">{post.videoPlaceholder}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl p-8 border border-emerald-500/20 mt-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights on scientific research, lab updates, and breakthrough discoveries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full text-white font-semibold hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold text-white mb-6">Join the Conversation</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Have ideas, questions, or want to contribute to our mission? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full text-white font-semibold hover:scale-105 transition-transform">
                Contact Us
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 hover:scale-105 transition-transform">
                Contribute Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
