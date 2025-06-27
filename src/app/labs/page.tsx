import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physical Labs - Scientific Curiosity Labs",
  description: "Hands-on physical labs with Arduino setups, holograms, and robot races to inspire scientific learning",
};

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-green-400 bg-clip-text text-transparent mb-6">
              Physical Labs
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The heart of our mission - hands-on, interactive laboratories that bring science to life
            </p>
            <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 rounded-full border border-green-500/30">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-medium">Starting Soon in Lucknow</span>
            </div>
          </div>

          {/* Lab Equipment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Arduino Labs */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Arduino-Based Electronics</h2>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Hands-on experience with microcontrollers, sensors, and real-world applications. Students will build everything from smart home systems to environmental monitors.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Microcontroller Programming</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Sensor Integration & IoT</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Circuit Design & PCB Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Real-world Project Applications</span>
                </div>
              </div>
              {/* Video Placeholder */}
              <div className="aspect-video bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-600 mb-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-300 font-medium">Arduino Lab Demo</p>
                </div>
              </div>
            </div>

            {/* Hologram Lab */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">✨</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Holographic Displays</h2>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                3D holographic projections that make abstract concepts tangible. Perfect for visualizing molecular structures, mathematical equations, and complex data.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">3D Molecular Visualization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Mathematical Concept Modeling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Interactive Data Exploration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Collaborative Learning Experiences</span>
                </div>
              </div>
              {/* Video Placeholder */}
              <div className="aspect-video bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-600 mb-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-300 font-medium">Hologram Technology</p>
                </div>
              </div>
            </div>

            {/* Robot Racing */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">🤖</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Robot Racing & Competitions</h2>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Competitive robotics that combines engineering, programming, and problem-solving. From maze-solving robots to autonomous racing machines.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Autonomous Navigation Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-gray-300">Computer Vision & AI</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Mechanical Design & Engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Team Collaboration & Competition</span>
                </div>
              </div>
              {/* Video Placeholder */}
              <div className="aspect-video bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-600 mb-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-300 font-medium">Robot Racing Championship</p>
                </div>
              </div>
            </div>

            {/* 3D Printing & Prototyping */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-orange-400/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">🏗️</span>
                </div>
                <h2 className="text-2xl font-bold text-white">3D Printing & Rapid Prototyping</h2>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Turn ideas into reality with advanced 3D printing technology. From concept to prototype in hours, not weeks.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">CAD Design & Modeling</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300">Multi-material Printing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">Functional Prototype Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Product Innovation Process</span>
                </div>
              </div>
              {/* Video Placeholder */}
              <div className="aspect-video bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-600 mb-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-300 font-medium">3D Printing Innovation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Physical Labs Matter */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">🎯 Why Physical Labs Are Essential</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤚</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Hands-On Learning</h3>
                <p className="text-gray-300">Theory becomes practice when students can touch, build, and experiment with real equipment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation Catalyst</h3>
                <p className="text-gray-300">Physical labs spark creativity and inspire students to think beyond conventional boundaries.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌟</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Real Impact</h3>
                <p className="text-gray-300">Students see immediate results of their work, building confidence and scientific curiosity.</p>
              </div>
            </div>
          </div>

          {/* Launch Timeline */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">🚀 Launch Timeline</h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-4 h-4 bg-green-400 rounded-full mt-2 relative z-10"></div>
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">Phase 1: Lucknow Lab (2025)</h3>
                    <p className="text-gray-300">Launch our flagship physical lab with all core equipment and initial student programs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-4 h-4 bg-blue-400 rounded-full mt-2 relative z-10"></div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-2">Phase 2: Delhi Expansion (Late 2025)</h3>
                    <p className="text-gray-300">Expand to the capital with advanced equipment and university partnerships.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-4 h-4 bg-purple-400 rounded-full mt-2 relative z-10"></div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-400 mb-2">Phase 3: National Network (2026-2027)</h3>
                    <p className="text-gray-300">Establish labs in major cities across India with specialized equipment and research partnerships.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build the Future?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us in creating India's most advanced physical science labs. Be part of the revolution that will transform how science is learned and practiced.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold hover:scale-105 transition-transform">
                Visit Our Labs
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 hover:scale-105 transition-transform">
                Support This Initiative
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
