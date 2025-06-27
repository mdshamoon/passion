import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curious Mathematics - Scientific Curiosity Labs",
  description: "Latest mathematics research, Fields Medal winners, and fascinating mathematical discoveries",
};

export default function MathematicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-6">
              Curious Mathematics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Exploring the cutting edge of mathematical research, breakthrough discoveries, and the brilliant minds pushing the boundaries of human knowledge
            </p>
          </div>

          {/* Latest in Mathematics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Recent Breakthroughs */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🏆</span>
                Recent Breakthroughs
              </h2>
              
              <div className="space-y-6">
                <div className="bg-indigo-500/10 rounded-2xl p-6 border border-indigo-500/20">
                  <h3 className="text-xl font-bold text-indigo-400 mb-3">Prime Gap Conjecture Progress</h3>
                  <p className="text-gray-300 mb-4">
                    New advances in understanding the distribution of prime numbers and gaps between consecutive primes.
                  </p>
                  <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-gray-300 text-sm">Prime Number Theory Explained</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/20">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">Geometric Topology Advances</h3>
                  <p className="text-gray-300 mb-4">
                    Revolutionary techniques in understanding high-dimensional geometric structures and their applications.
                  </p>
                  <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-gray-300 text-sm">Topology Visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fields Medal Spotlight */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🥇</span>
                Fields Medal Winners
              </h2>
              
              <div className="space-y-6">
                <div className="bg-yellow-500/10 rounded-2xl p-6 border border-yellow-500/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">2022</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-yellow-400">June Huh</h3>
                      <p className="text-gray-400 text-sm">Combinatorial Geometry</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Revolutionary work connecting combinatorics and algebraic geometry, proving fundamental conjectures.
                  </p>
                  <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-gray-300 text-sm">June Huh's Work Explained</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-500/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2022</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-400">Maryna Viazovska</h3>
                      <p className="text-gray-400 text-sm">Sphere Packing</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Solved the sphere packing problem in 8 and 24 dimensions using modular forms.
                  </p>
                  <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-gray-300 text-sm">Sphere Packing Problem</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Research Areas */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">🔬 Active Research Frontiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20">
                <h3 className="text-xl font-bold text-red-400 mb-3">Riemann Hypothesis</h3>
                <p className="text-gray-300 text-sm mb-4">
                  The holy grail of number theory - understanding the distribution of prime numbers.
                </p>
                <div className="text-xs text-gray-400">
                  Prize: $1,000,000 • Status: Unsolved
                </div>
              </div>

              <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-3">P vs NP Problem</h3>
                <p className="text-gray-300 text-sm mb-4">
                  The fundamental question of computational complexity theory.
                </p>
                <div className="text-xs text-gray-400">
                  Prize: $1,000,000 • Status: Unsolved
                </div>
              </div>

              <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Langlands Program</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Connecting number theory and representation theory in profound ways.
                </p>
                <div className="text-xs text-gray-400">
                  Status: Partially Proven
                </div>
              </div>

              <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Birch-Swinnerton-Dyer</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Deep connections between algebraic and analytic properties of elliptic curves.
                </p>
                <div className="text-xs text-gray-400">
                  Prize: $1,000,000 • Status: Unsolved
                </div>
              </div>

              <div className="bg-orange-500/10 rounded-2xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Quantum Algorithms</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Mathematical foundations of quantum computing and cryptography.
                </p>
                <div className="text-xs text-gray-400">
                  Status: Rapidly Evolving
                </div>
              </div>

              <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Machine Learning Theory</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Mathematical understanding of deep learning and neural networks.
                </p>
                <div className="text-xs text-gray-400">
                  Status: Active Research
                </div>
              </div>
            </div>
          </div>

          {/* Mathematical Competitions */}
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-3xl p-8 border border-pink-500/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">🏅 Mathematical Competitions & Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">International Mathematical Olympiad</h3>
                <p className="text-gray-300 mb-4">
                  The world's most prestigious mathematics competition for high school students.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Annual international competition</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">100+ countries participate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Advanced problem-solving skills</span>
                  </div>
                </div>
                <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm">IMO Problem Solutions</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Clay Millennium Problems</h3>
                <p className="text-gray-300 mb-4">
                  Seven of the most important unsolved problems in mathematics, each worth $1 million.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">$1,000,000 prize each</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Only 1 solved so far (Poincaré)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Define 21st century mathematics</span>
                  </div>
                </div>
                <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center border border-gray-600">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm">Millennium Problems Overview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indian Mathematical Excellence */}
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl p-8 border border-orange-500/20 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">🇮🇳 Indian Mathematical Heritage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧮</span>
                </div>
                <h3 className="text-xl font-bold text-orange-400 mb-3">Srinivasa Ramanujan</h3>
                <p className="text-gray-300 text-sm">
                  Self-taught genius who made extraordinary contributions to mathematical analysis, number theory, and continued fractions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔢</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Brahmagupta</h3>
                <p className="text-gray-300 text-sm">
                  7th-century mathematician who gave the first general solution to the linear Diophantine equation and rules for computing with zero.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📐</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Aryabhata</h3>
                <p className="text-gray-300 text-sm">
                  Ancient Indian mathematician-astronomer who approximated π and worked on trigonometry and algebra.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join the Mathematical Revolution</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of India's mathematical renaissance. Explore unsolved problems, learn from the greatest minds, and contribute to human knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform">
                Explore Math Problems
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 hover:scale-105 transition-transform">
                Join Research Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
