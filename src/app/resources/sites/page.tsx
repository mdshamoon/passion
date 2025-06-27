'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Globe, Zap, Database, Calculator, Atom } from 'lucide-react';

const sites = [
  {
    title: "ArXiv.org",
    description: "Free distribution service and open-access archive for scholarly articles in physics, mathematics, computer science, and more",
    url: "https://arxiv.org/",
    category: "Research Papers",
    icon: BookOpen,
    featured: true,
    tags: ["Physics", "Mathematics", "Computer Science", "Preprints"]
  },
  {
    title: "Wolfram MathWorld",
    description: "The web's most extensive mathematical resource, created and maintained by Eric Weisstein",
    url: "https://mathworld.wolfram.com/",
    category: "Mathematics",
    icon: Calculator,
    featured: true,
    tags: ["Mathematics", "Encyclopedia", "Reference", "Advanced"]
  },
  {
    title: "NASA's Scientific Visualization Studio",
    description: "Stunning visualizations of scientific data from NASA's research and missions",
    url: "https://svs.gsfc.nasa.gov/",
    category: "Visualization",
    icon: Globe,
    featured: false,
    tags: ["Space", "Earth Science", "Climate", "Visualization"]
  },
  {
    title: "Brilliant.org",
    description: "Interactive courses in math, science, and computer science with hands-on problem solving",
    url: "https://brilliant.org/",
    category: "Learning Platform",
    icon: Zap,
    featured: true,
    tags: ["Interactive Learning", "Problem Solving", "STEM"]
  },
  {
    title: "Physics World",
    description: "The world's leading physics magazine featuring news, analysis, and insights from the physics community",
    url: "https://physicsworld.com/",
    category: "News & Analysis",
    icon: Atom,
    featured: false,
    tags: ["Physics News", "Research", "Industry", "Technology"]
  },
  {
    title: "Khan Academy",
    description: "Free world-class education for anyone, anywhere with comprehensive courses in STEM subjects",
    url: "https://www.khanacademy.org/",
    category: "Education",
    icon: BookOpen,
    featured: true,
    tags: ["Free Education", "Video Lessons", "Practice", "All Levels"]
  },
  {
    title: "Desmos Graphing Calculator",
    description: "Advanced online graphing calculator and mathematical visualization tool",
    url: "https://www.desmos.com/calculator",
    category: "Tools",
    icon: Calculator,
    featured: false,
    tags: ["Graphing", "Visualization", "Mathematics", "Free Tool"]
  },
  {
    title: "National Institute of Standards and Technology (NIST)",
    description: "Physical constants, measurement standards, and scientific data from the US government",
    url: "https://www.nist.gov/",
    category: "Reference",
    icon: Database,
    featured: false,
    tags: ["Standards", "Constants", "Measurements", "Government"]
  },
  {
    title: "Quantum Computing Playground",
    description: "Browser-based quantum computing simulator for learning and experimentation",
    url: "http://www.quantumplayground.net/",
    category: "Interactive Tools",
    icon: Atom,
    featured: true,
    tags: ["Quantum Computing", "Simulation", "Interactive", "Learning"]
  },
  {
    title: "PhET Interactive Simulations",
    description: "Interactive math and science simulations from the University of Colorado Boulder",
    url: "https://phet.colorado.edu/",
    category: "Simulations",
    icon: Zap,
    featured: false,
    tags: ["Simulations", "Physics", "Chemistry", "Free", "Education"]
  },
  {
    title: "TED-Ed",
    description: "Educational videos and lessons that make learning engaging and accessible",
    url: "https://ed.ted.com/",
    category: "Educational Content",
    icon: BookOpen,
    featured: false,
    tags: ["Video Lessons", "Animation", "Diverse Topics", "Quality Content"]
  },
  {
    title: "Coursera",
    description: "Online courses from top universities and companies worldwide",
    url: "https://www.coursera.org/",
    category: "Online Courses",
    icon: Globe,
    featured: true,
    tags: ["University Courses", "Certificates", "Specializations", "Career"]
  }
];

const categories = ["All", "Research Papers", "Mathematics", "Learning Platform", "Tools", "Simulations", "Education"];

export default function SitesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSites = selectedCategory === "All" 
    ? sites 
    : sites.filter(site => site.category === selectedCategory);

  const featuredSites = sites.filter(site => site.featured);

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
            Essential <span className="text-purple-400">Science Sites</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-300 mb-8"
          >
            Curated collection of the most valuable scientific resources on the web
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Sites */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Zap className="w-8 h-8 text-yellow-400 mr-3" />
            Essential Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSites.map((site, index) => {
              const IconComponent = site.icon;
              return (
                <motion.div
                  key={site.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                        <IconComponent className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {site.title}
                        </h3>
                        <span className="text-purple-400 text-sm">{site.category}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                    {site.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {site.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Visit Site
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* All Sites */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Complete Directory</h2>
          
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
            {filteredSites.map((site, index) => {
              const IconComponent = site.icon;
              return (
                <motion.div
                  key={site.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  layout
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-2 bg-purple-500/20 rounded-lg mr-3">
                        <IconComponent className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                          {site.title}
                        </h3>
                        <span className="text-purple-400 text-sm">{site.category}</span>
                      </div>
                    </div>
                    {site.featured && (
                      <div className="px-2 py-1 bg-yellow-500 text-black rounded text-xs font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {site.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {site.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {site.tags.length > 3 && (
                      <span className="px-2 py-1 bg-slate-500/20 text-slate-400 rounded text-xs">
                        +{site.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors text-sm"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Visit Site
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="py-16 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">{sites.length}</div>
              <div className="text-slate-300">Curated Sites</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">{categories.length - 1}</div>
              <div className="text-slate-300">Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">{featuredSites.length}</div>
              <div className="text-slate-300">Featured Resources</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="py-16 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Know a Great Science Resource?
            </h3>
            <p className="text-slate-300 mb-6">
              Help us build the most comprehensive collection of scientific resources 
              by suggesting sites that have advanced your understanding.
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Suggest a Site
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
