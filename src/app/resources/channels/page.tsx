'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Users, Play, Star } from 'lucide-react';

const channels = [
  {
    name: "Veritasium",
    description: "Engineering and science videos that make complex concepts accessible",
    subscribers: "13.8M",
    category: "Physics & Engineering",
    url: "https://www.youtube.com/@veritasium",
    featured: true
  },
  {
    name: "3Blue1Brown",
    description: "Visual mathematics explanations with beautiful animations",
    subscribers: "4.89M",
    category: "Mathematics",
    url: "https://www.youtube.com/@3blue1brown",
    featured: true
  },
  {
    name: "SciShow",
    description: "Quick, accessible science content covering diverse topics",
    subscribers: "7.2M",
    category: "General Science",
    url: "https://www.youtube.com/@SciShow",
    featured: false
  },
  {
    name: "Kurzgesagt",
    description: "Animated explanations of science, philosophy, and technology",
    subscribers: "20.4M",
    category: "Science Communication",
    url: "https://www.youtube.com/@kurzgesagt",
    featured: true
  },
  {
    name: "Physics Girl",
    description: "Physics concepts explained through experiments and demonstrations",
    subscribers: "1.87M",
    category: "Physics",
    url: "https://www.youtube.com/@physicsgirl",
    featured: false
  },
  {
    name: "Numberphile",
    description: "Mathematical concepts and interesting numbers explored",
    subscribers: "4.37M",
    category: "Mathematics",
    url: "https://www.youtube.com/@numberphile",
    featured: false
  },
  {
    name: "MIT OpenCourseWare",
    description: "Free courses from MIT covering all scientific disciplines",
    subscribers: "1.8M",
    category: "Education",
    url: "https://www.youtube.com/@mitocw",
    featured: true
  },
  {
    name: "Smarter Every Day",
    description: "Engineering and physics through high-speed cameras and experiments",
    subscribers: "11.1M",
    category: "Engineering",
    url: "https://www.youtube.com/@smartereveryday",
    featured: false
  },
  {
    name: "Vsauce",
    description: "Mind-bending questions about reality, consciousness, and existence",
    subscribers: "17.8M",
    category: "Philosophy of Science",
    url: "https://www.youtube.com/@vsauce1",
    featured: true
  },
  {
    name: "Two Minute Papers",
    description: "Latest AI and computer graphics research explained simply",
    subscribers: "1.32M",
    category: "AI & Computing",
    url: "https://www.youtube.com/@twominutepapers",
    featured: false
  }
];

const categories = ["All", "Physics & Engineering", "Mathematics", "General Science", "Education", "AI & Computing"];

export default function ChannelsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredChannels = selectedCategory === "All" 
    ? channels 
    : channels.filter(channel => channel.category === selectedCategory);

  const featuredChannels = channels.filter(channel => channel.featured);

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
            Curated <span className="text-purple-400">YouTube Channels</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-300 mb-8"
          >
            Handpicked channels that ignite scientific curiosity and make learning engaging
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Channels */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Star className="w-8 h-8 text-yellow-400 mr-3" />
            Featured Channels
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {channel.name}
                    </h3>
                    <div className="flex items-center text-slate-400 text-sm mt-1">
                      <Users className="w-4 h-4 mr-1" />
                      {channel.subscribers} subscribers
                    </div>
                  </div>
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {channel.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-purple-500/30 text-purple-300 rounded-full text-xs">
                    {channel.category}
                  </span>
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Play className="w-4 h-4 mr-1" />
                    <span className="text-sm">Visit</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* All Channels */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">All Channels</h2>
          
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
            {filteredChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                layout
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {channel.name}
                    </h3>
                    <div className="flex items-center text-slate-400 text-sm mt-1">
                      <Users className="w-4 h-4 mr-1" />
                      {channel.subscribers} subscribers
                    </div>
                  </div>
                  {channel.featured && <Star className="w-5 h-5 text-yellow-400" />}
                </div>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {channel.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-purple-500/30 text-purple-300 rounded-full text-xs">
                    {channel.category}
                  </span>
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Play className="w-4 h-4 mr-1" />
                    <span className="text-sm">Visit</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
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
              Discover More Science Content
            </h3>
            <p className="text-slate-300 mb-6">
              Know a great science channel we should feature? Let us know and help build 
              the ultimate collection of educational content.
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Suggest a Channel
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
