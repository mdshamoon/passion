'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Cpu, 
  Zap, 
  Rocket, 
  MapPin, 
  Youtube, 
  Bot, 
  Printer, 
  Monitor,
  Sparkles
} from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import LabEquipment from '@/components/LabEquipment';
import ScientificFocus from '@/components/ScientificFocus';
import YoutubeChannels from '@/components/YoutubeChannels';
import CityExpansion from '@/components/CityExpansion';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
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
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Atom className="w-5 h-5 text-purple-400" />
              <span className="text-white">Quantum Computing</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white">Thorium Reactors</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center gap-4"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform glow-blue">
              Explore Labs
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 hover:scale-105 transition-transform">
              Join the Mission
            </button>
          </motion.div>
        </div>
      </section>

      {/* Lab Equipment Section */}
      <LabEquipment />

      {/* Scientific Focus Areas */}
      <ScientificFocus />

      {/* YouTube Channels */}
      <YoutubeChannels />

      {/* City Expansion */}
      <CityExpansion />

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
