'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Atom, 
  Cpu, 
  Zap, 
  Rocket, 
  MapPin, 
  Youtube, 
  Bot, 
  ArrowRight,
  Beaker,
  Calculator,
  BookOpen,
  Play,
  Sparkles
} from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const features = [
    {
      icon: Beaker,
      title: "Physical Labs",
      description: "Hands-on experimentation with cutting-edge equipment",
      href: "/labs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Calculator,
      title: "Curious Mathematics",
      description: "Explore the beauty and power of mathematical thinking",
      href: "/mathematics",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Cutting-Edge Tech",
      description: "Quantum computing, AI, and emerging technologies",
      href: "/technology",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BookOpen,
      title: "Research & Insights",
      description: "Latest findings and scientific breakthroughs",
      href: "/blog",
      color: "from-orange-500 to-red-500"
    }
  ];

  const resources = [
    {
      icon: Youtube,
      title: "YouTube Channels",
      description: "Curated channels for scientific learning",
      href: "/resources/channels",
      count: "50+ channels"
    },
    {
      icon: Play,
      title: "Amazing Videos",
      description: "Mind-bending science videos",
      href: "/resources/videos",
      count: "100+ videos"
    },
    {
      icon: Zap,
      title: "Essential Sites",
      description: "Top scientific resources online",
      href: "/resources/sites",
      count: "75+ sites"
    }
  ];

  return (
    <main className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              Scientific Curiosity Labs
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Igniting the spark of scientific discovery across India, starting from Lucknow. 
              We&apos;re building interactive labs to inspire the next generation of researchers and innovators.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-white">Starting in Lucknow</span>
            </div>
            {/* <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Atom className="w-5 h-5 text-purple-400" />
              <span className="text-white">Quantum Computing</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white">Thorium Reactors</span>
            </div> */}
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Bot className="w-5 h-5 text-green-400" />
              <span className="text-white">Interactive Labs</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/mission"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Our Mission
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/labs"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Explore Labs
              <Rocket className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our <span className="text-purple-400">Focus Areas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dive deep into the fascinating world of science through our carefully curated sections
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={feature.href}>
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {feature.description}
                      </p>
                      <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                        <span className="text-sm font-medium">Explore</span>
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Curated <span className="text-cyan-400">Resources</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Handpicked content from across the web to fuel your scientific curiosity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={resource.href}>
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-sm text-purple-400 font-medium">
                          {resource.count}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {resource.description}
                      </p>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="text-sm font-medium">Browse Collection</span>
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-md rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Scientific Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of building India&apos;s future in science and technology. Start your journey with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/mission"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/blog"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Read Our Blog
                <BookOpen className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Scientific Curiosity Labs
            </span>
          </div>
          <p className="text-gray-400 mb-6">
            Inspiring the next generation of Indian scientists and researchers
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <span>© 2025 Scientific Curiosity Labs</span>
            <span>•</span>
            <span>Made with passion for science</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
