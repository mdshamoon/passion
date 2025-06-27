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
                  <div className="aspect-video rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <iframe
                      src="https://www.youtube.com/embed/EK32jo7i5LQ"
                      title="Prime Numbers and the Riemann Hypothesis - Numberphile"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    "Prime Numbers and the Riemann Hypothesis" - Exploring one of mathematics' greatest unsolved problems
                  </p>
                </div>

                <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/20">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">Geometric Topology Advances</h3>
                  <p className="text-gray-300 mb-4">
                    Revolutionary techniques in understanding high-dimensional geometric structures and their applications.
                  </p>
                  <div className="aspect-video rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <iframe
                      src="https://www.youtube.com/embed/SXHHvoaSctc"
                      title="What is Topology? - 3Blue1Brown"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    "What is Topology?" - 3Blue1Brown's visual introduction to the mathematics of shape and space
                  </p>
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
                  <div className="aspect-video rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <iframe
                      src="https://www.youtube.com/embed/yO8lQWb6TZ4"
                      title="June Huh - Fields Medal Winner 2022"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    "June Huh - Fields Medal Winner" - Understanding breakthrough work in combinatorial geometry
                  </p>
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
                  <div className="aspect-video rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <iframe
                      src="https://www.youtube.com/embed/whNVIPiVl2o"
                      title="The Sphere Packing Problem - Numberphile"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    "The Sphere Packing Problem" - Numberphile explains how to pack spheres most efficiently in high dimensions
                  </p>
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
                <div className="aspect-video rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <iframe
                    src="https://www.youtube.com/embed/5EW2G14zs2g"
                    title="International Mathematical Olympiad - Numberphile"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  "International Mathematical Olympiad" - Challenging problems from the world's premier math competition
                </p>
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
                <div className="aspect-video rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <iframe
                    src="https://www.youtube.com/embed/SjSHVDfXHQ4"
                    title="The Millennium Prize Problems - Numberphile"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  "The Millennium Prize Problems" - Seven unsolved problems worth $1 million each
                </p>
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
                <h3 className="text-xl font-bold text-orange-400 mb-3">
                  <a 
                    href="https://en.wikipedia.org/wiki/Srinivasa_Ramanujan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-300 transition-colors underline decoration-dotted"
                  >
                    Srinivasa Ramanujan
                  </a>
                </h3>
                <p className="text-gray-300 text-sm">
                  Self-taught genius who made extraordinary contributions to mathematical analysis, number theory, and continued fractions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔢</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-3">
                  <a 
                    href="https://en.wikipedia.org/wiki/Brahmagupta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-300 transition-colors underline decoration-dotted"
                  >
                    Brahmagupta
                  </a>
                </h3>
                <p className="text-gray-300 text-sm">
                  7th-century mathematician who gave the first general solution to the linear Diophantine equation and rules for computing with zero.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📐</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">
                  <a 
                    href="https://en.wikipedia.org/wiki/Aryabhata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-300 transition-colors underline decoration-dotted"
                  >
                    Aryabhata
                  </a>
                </h3>
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
