'use client';

import { motion } from 'framer-motion';
import { Youtube, ExternalLink, Users, BookOpen } from 'lucide-react';
import { useState } from 'react';

const youtubeChannels = [
  {
    id: 'veritasium',
    name: 'Veritasium',
    description: 'Science education channel exploring physics, engineering, and fascinating phenomena',
    subscribers: '14.1M',
    category: 'Science Education',
    thumbnail: 'https://yt3.ggpht.com/ytc/AMLnZu_Q-NDQZn5XGfj5HjOVe3GJg6N8c6ZPOFr-kPIE=s240-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@veritasium',
    highlight: 'Physics & Engineering'
  },
  {
    id: 'kurzgesagt',
    name: 'Kurzgesagt – In a Nutshell',
    description: 'Animated educational content about science, space, technology, biology, history and philosophy',
    subscribers: '20.4M',
    category: 'Science Animation',
    thumbnail: 'https://yt3.ggpht.com/ytc/AMLnZu_Qb0RKFMb1CW3qzwPLo6gFQFYlArJfYKVNqIaX=s240-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@kurzgesagt',
    highlight: 'Space & Technology'
  },
  {
    id: 'minutephysics',
    name: 'MinutePhysics',
    description: 'Physics concepts explained simply using hand-drawn diagrams',
    subscribers: '5.26M',
    category: 'Physics',
    thumbnail: 'https://yt3.ggpht.com/ytc/AMLnZu_N1p_A_2wF9wGkK9CKgvNBmZaQIgdTjZI3JuNB=s240-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@minutephysics',
    highlight: 'Physics Simplified'
  },
  {
    id: 'scishow',
    name: 'SciShow',
    description: 'Exploring the unexpected in everything from tiny tardigrades to the universe itself',
    subscribers: '7.15M',
    category: 'Science',
    thumbnail: 'https://yt3.ggpht.com/ytc/AMLnZu_R4DjTB7h-o6BhgEbxKnJGzKj1IWlQqo7KmGvw=s240-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@SciShow',
    highlight: 'General Science'
  },
  {
    id: 'numberphile',
    name: 'Numberphile',
    description: 'Mathematics videos that make numbers interesting and accessible',
    subscribers: '4.56M',
    category: 'Mathematics',
    thumbnail: 'https://yt3.ggpht.com/ytc/AMLnZu_tE8_-yrqhY-XdqKJrBJ3kF3-1e6BgG7oBvmhb=s240-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@numberphile',
    highlight: 'Mathematics'
  },
  {
    id: 'thebrain',
    name: 'The Brain Scoop',
    description: 'Natural history museum specimens and biological sciences',
    subscribers: '572K',
    category: 'Biology',
    thumbnail: 'https://yt3.ggpht.com/ytc/AMLnZu_YDzOIY2jb1RgTq8E1JdECq5Lv7l3S4c6tJjE8=s240-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@thebrainscoop',
    highlight: 'Natural History'
  },
  {
    id: 'crashcourse',
    name: 'Crash Course',
    description: 'Educational content covering science, history, literature, and more',
    subscribers: '14.6M',
    category: 'Education',
    thumbnail: 'https://yt3.ggpht.com/ytc/AMLnZu_9RJ8kMfPb5VHhc7qtg-Q3oJ7uPxX8VjZFXhAJ=s240-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@crashcourse',
    highlight: 'Comprehensive Learning'
  },
  {
    id: 'tedx',
    name: 'TED',
    description: 'Ideas worth spreading - talks by inspiring speakers on science, technology, and innovation',
    subscribers: '38.2M',
    category: 'Talks',
    thumbnail: 'https://yt3.ggpht.com/ytc/AMLnZu_Z-3A8BdKQy8wPW1xDMCCEXm3j9lDr_kRlDKhE=s240-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/@TED',
    highlight: 'Innovation Talks'
  }
];

function ChannelCard({ channel, index }: { channel: typeof youtubeChannels[0], index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-start gap-4">
        <div className="relative">
          {!imageError ? (
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center">
              <Youtube className="w-8 h-8 text-white" />
            </div>
          ) : (
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center">
              <Youtube className="w-8 h-8 text-white" />
            </div>
          )}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
            <Youtube className="w-3 h-3 text-white" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors">
              {channel.name}
            </h3>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Users className="w-3 h-3" />
              {channel.subscribers}
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-xs text-blue-300 border border-blue-500/20">
              {channel.category}
            </span>
            <span className="px-2 py-1 bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-full text-xs text-green-300 border border-green-500/20">
              {channel.highlight}
            </span>
          </div>

          <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
            {channel.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <BookOpen className="w-3 h-3" />
              <span>Educational Content</span>
            </div>
            
            <a
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-red-600/20 hover:bg-red-600/30 rounded-full text-xs text-red-300 border border-red-500/20 hover:border-red-400/40 transition-all duration-200"
            >
              Visit Channel
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function YoutubeChannels() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-purple-500 to-blue-400 bg-clip-text text-transparent mb-6">
            Inspiring YouTube Channels
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover amazing channels that spark scientific curiosity and make learning engaging
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {youtubeChannels.map((channel, index) => (
            <ChannelCard key={channel.id} channel={channel} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-red-600/10 to-purple-600/10 backdrop-blur-md rounded-2xl p-8 border border-red-500/20">
            <Youtube className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Join the Learning Revolution</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              These channels have inspired millions of learners worldwide. Subscribe to expand your scientific horizons 
              and discover the wonders of our universe through engaging, high-quality educational content.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full" />
                <span>Physics & Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>Space & Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Biology & Nature</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>Mathematics</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
