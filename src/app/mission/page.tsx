import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission - Scientific Curiosity Labs",
  description: "Our mission to generate scientific curiosity and advance Indian research beyond China and USA",
};

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              Our Mission
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              To generate scientific curiosity across multiple fields and position India as a global leader in research and innovation
            </p>
          </div>

          {/* Main Mission Statement */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">🎯 Primary Objective</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Our mission is to <strong className="text-blue-400">generate scientific curiosity</strong> in different fields including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-3">🔢 Mathematics</h3>
                <p className="text-gray-300">Advanced mathematical research, problem-solving, and theoretical discoveries</p>
              </div>
              <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-3">🔬 Science</h3>
                <p className="text-gray-300">Physics, chemistry, biology, and interdisciplinary research</p>
              </div>
              <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-3">🧠 Psychology</h3>
                <p className="text-gray-300">Cognitive science, behavioral research, and human understanding</p>
              </div>
              <div className="bg-orange-500/10 rounded-2xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-3">⚡ Electronics</h3>
                <p className="text-gray-300">Hardware innovation, circuit design, and electronic systems</p>
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl p-8 border border-red-500/20 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">🇮🇳 Vision for India</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              We want to take <strong className="text-red-400">India ahead of China and USA</strong> in terms of research output, innovation, and scientific breakthroughs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">🥇</div>
                <h3 className="text-lg font-semibold text-white mb-2">Research Leadership</h3>
                <p className="text-sm text-gray-400">Surpass global research output</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">💡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Innovation Hub</h3>
                <p className="text-sm text-gray-400">Become the world's innovation center</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">🚀</div>
                <h3 className="text-lg font-semibold text-white mb-2">Scientific Excellence</h3>
                <p className="text-sm text-gray-400">Lead in breakthrough discoveries</p>
              </div>
            </div>
          </div>

          {/* How We'll Achieve This */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">🛠️ Our Approach</h2>
            <p className="text-lg text-gray-300 mb-6">
              We're <strong className="text-blue-400">starting our journey</strong> by creating physical labs that will:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Arduino-Based Electronics Labs</h3>
                  <p className="text-gray-300">Hands-on experience with microcontrollers, sensors, and IoT projects</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Holographic Displays</h3>
                  <p className="text-gray-300">3D visualization for complex scientific concepts and data</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Robotics Competitions</h3>
                  <p className="text-gray-300">Robot races and challenges to spark engineering creativity</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="bg-black/20 rounded-3xl p-8 border border-white/10 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">📺 Learn More About Our Mission</h2>
            <div className="aspect-video bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-600">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-gray-300 font-medium">Mission Explanation Video</p>
                <p className="text-gray-500 text-sm mt-2">[YouTube Video Placeholder]</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4 text-center">
              This video will explain our comprehensive approach to advancing Indian research
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
            <p className="text-lg text-gray-300 mb-8">
              Be part of the movement to make India a global research superpower
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform">
                Explore Our Labs
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 hover:scale-105 transition-transform">
                Support Our Cause
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
