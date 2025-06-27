'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Clock, Eye, ThumbsUp } from 'lucide-react';

const videos = [
  {
    title: "The Map of Physics",
    creator: "Domain of Science",
    duration: "7:30",
    views: "6.2M",
    category: "Physics Overview",
    description: "A comprehensive visual map showing how all areas of physics connect and relate to each other.",
    url: "https://www.youtube.com/watch?v=ZihywtixUYo",
    featured: true,
    thumbnail: "https://i.ytimg.com/vi/ZihywtixUYo/maxresdefault.jpg"
  },
  {
    title: "The Most Important Algorithm Of All Time",
    creator: "Veritasium",
    duration: "20:45",
    views: "4.1M",
    category: "Computer Science",
    description: "How the Fast Fourier Transform revolutionized everything from music to medicine.",
    url: "https://www.youtube.com/watch?v=nmgFG7PUHfo",
    featured: true,
    thumbnail: "https://i.ytimg.com/vi/nmgFG7PUHfo/maxresdefault.jpg"
  },
  {
    title: "What is 0 to the power of 0?",
    creator: "Eddie Woo",
    duration: "12:18",
    views: "2.8M",
    category: "Mathematics",
    description: "A deep dive into one of mathematics' most debated questions.",
    url: "https://www.youtube.com/watch?v=BRRolKTlF6Q",
    featured: false,
    thumbnail: "https://i.ytimg.com/vi/BRRolKTlF6Q/maxresdefault.jpg"
  },
  {
    title: "How Quantum Computers Break The Internet",
    creator: "Veritasium",
    duration: "30:21",
    views: "8.7M",
    category: "Quantum Computing",
    description: "Understanding how quantum computers threaten current cryptography and internet security.",
    url: "https://www.youtube.com/watch?v=lvTqbM5Dq4Q",
    featured: true,
    thumbnail: "https://i.ytimg.com/vi/lvTqbM5Dq4Q/maxresdefault.jpg"
  },
  {
    title: "The Strange Physics Principle That Shapes Reality",
    creator: "Veritasium",
    duration: "23:47",
    views: "5.9M",
    category: "Physics",
    description: "Exploring the principle of least action and its fundamental role in physics.",
    url: "https://www.youtube.com/watch?v=A-QIJaHc508",
    featured: false,
    thumbnail: "https://i.ytimg.com/vi/A-QIJaHc508/maxresdefault.jpg"
  },
  {
    title: "The Banach-Tarski Paradox",
    creator: "Vsauce",
    duration: "25:10",
    views: "14.2M",
    category: "Mathematics",
    description: "How to mathematically turn one sphere into two identical spheres.",
    url: "https://www.youtube.com/watch?v=s86-Z-CbaHA",
    featured: true,
    thumbnail: "https://i.ytimg.com/vi/s86-Z-CbaHA/maxresdefault.jpg"
  },
  {
    title: "The Science of Thinking",
    creator: "Veritasium",
    duration: "18:32",
    views: "3.4M",
    category: "Cognitive Science",
    description: "How our brains process information and make decisions.",
    url: "https://www.youtube.com/watch?v=UBVV8pch1dM",
    featured: false,
    thumbnail: "https://i.ytimg.com/vi/UBVV8pch1dM/maxresdefault.jpg"
  },
  {
    title: "Why It's Almost Impossible to Make a Purple LED",
    creator: "Veritasium",
    duration: "13:24",
    views: "2.1M",
    category: "Materials Science",
    description: "The fascinating physics behind LED technology and color production.",
    url: "https://www.youtube.com/watch?v=CuF-KqLCocM",
    featured: false,
    thumbnail: "https://i.ytimg.com/vi/CuF-KqLCocM/maxresdefault.jpg"
  },
  {
    title: "The Infinite Hotel Paradox",
    creator: "TED-Ed",
    duration: "4:35",
    views: "7.8M",
    category: "Mathematics",
    description: "Understanding infinity through Hilbert's famous thought experiment.",
    url: "https://www.youtube.com/watch?v=Uj3_KqkI9Zo",
    featured: true,
    thumbnail: "https://i.ytimg.com/vi/Uj3_KqkI9Zo/maxresdefault.jpg"
  },
  {
    title: "How AI Discovered a Faster Matrix Multiplication Algorithm",
    creator: "Two Minute Papers",
    duration: "8:45",
    views: "1.2M",
    category: "AI & Computing",
    description: "DeepMind's AlphaTensor discovers new mathematical algorithms.",
    url: "https://www.youtube.com/watch?v=fDAPJ7rvcUw",
    featured: false,
    thumbnail: "https://i.ytimg.com/vi/fDAPJ7rvcUw/maxresdefault.jpg"
  }
];

const categories = ["All", "Physics", "Mathematics", "Computer Science", "Quantum Computing", "AI & Computing", "Materials Science"];

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos = selectedCategory === "All" 
    ? videos 
    : videos.filter(video => video.category === selectedCategory || video.category.includes(selectedCategory));

  const featuredVideos = videos.filter(video => video.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Fascinating <span className="text-purple-400">Science Videos</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-300 mb-8"
          >
            Mind-bending videos that will change how you see the world around you
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Videos */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <ThumbsUp className="w-8 h-8 text-yellow-400 mr-3" />
            Must-Watch Videos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="aspect-video bg-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white/60 group-hover:text-white/80 transition-colors" />
                  </div>
                  <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-white text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-purple-400 text-sm mb-2">{video.creator}</p>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-slate-400 text-xs">
                      <Eye className="w-4 h-4 mr-1" />
                      {video.views} views
                    </div>
                    <span className="px-2 py-1 bg-purple-500/30 text-purple-300 rounded-full text-xs">
                      {video.category}
                    </span>
                  </div>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Video
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* All Videos */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Video Library</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                layout
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="aspect-video bg-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white/60 group-hover:text-white/80 transition-colors" />
                  </div>
                  <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-white text-xs">
                    {video.duration}
                  </div>
                  {video.featured && (
                    <div className="absolute top-2 left-2 bg-yellow-500 px-2 py-1 rounded text-black text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-md font-bold text-white group-hover:text-purple-300 transition-colors mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-purple-400 text-sm mb-2">{video.creator}</p>
                  <p className="text-slate-300 text-sm mb-3 leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-slate-400 text-xs">
                      <Eye className="w-3 h-3 mr-1" />
                      {video.views}
                    </div>
                    <div className="flex items-center text-slate-400 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {video.duration}
                    </div>
                  </div>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors text-sm"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="py-16 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Found an Amazing Science Video?
            </h3>
            <p className="text-slate-300 mb-6">
              Help us curate the best science content by suggesting videos that 
              sparked your curiosity and changed your perspective.
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Suggest a Video
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
