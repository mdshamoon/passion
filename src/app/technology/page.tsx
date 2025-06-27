import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cutting Edge Technology - Scientific Curiosity Labs",
  description: "Latest developments in quantum computing, AI, and emerging technologies shaping the future",
};

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent mb-6">
              Cutting Edge Technology
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Exploring the frontiers of quantum computing, artificial intelligence, and revolutionary technologies that will define the next century
            </p>
          </div>

          {/* Quantum Computing */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-4xl">⚛️</span>
              Quantum Computing Revolution
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Latest Breakthroughs</h3>
                <div className="space-y-4 mb-6">
                  <div className="bg-cyan-500/10 rounded-2xl p-4 border border-cyan-500/20">
                    <h4 className="font-bold text-cyan-300 mb-2">IBM's 1000+ Qubit Processor</h4>
                    <p className="text-gray-300 text-sm">Revolutionary leap in quantum hardware scaling and error correction.</p>
                  </div>
                  <div className="bg-blue-500/10 rounded-2xl p-4 border border-blue-500/20">
                    <h4 className="font-bold text-blue-300 mb-2">Google's Quantum Supremacy 2.0</h4>
                    <p className="text-gray-300 text-sm">New algorithms achieving unprecedented computational advantages.</p>
                  </div>
                  <div className="bg-purple-500/10 rounded-2xl p-4 border border-purple-500/20">
                    <h4 className="font-bold text-purple-300 mb-2">Quantum Internet Protocols</h4>
                    <p className="text-gray-300 text-sm">Secure quantum communication networks becoming reality.</p>
                  </div>
                </div>
                
                <div className="aspect-video rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <iframe
                    src="https://www.youtube.com/embed/lvTqbM5Dq4Q"
                    title="How Quantum Computers Break The Internet - Veritasium"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  "How Quantum Computers Break The Internet" - Understanding quantum computing's revolutionary potential
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Applications & Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Drug Discovery</h4>
                      <p className="text-gray-300 text-sm">Simulating molecular interactions for faster pharmaceutical development.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Cryptography</h4>
                      <p className="text-gray-300 text-sm">Breaking current encryption while creating quantum-safe security.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Financial Modeling</h4>
                      <p className="text-gray-300 text-sm">Complex risk analysis and portfolio optimization at unprecedented scales.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Climate Modeling</h4>
                      <p className="text-gray-300 text-sm">Accurate climate predictions and environmental impact analysis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Artificial Intelligence */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-4xl">🤖</span>
              Artificial Intelligence Frontiers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-500/10 rounded-2xl p-6 border border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 mb-3">Large Language Models</h3>
                <p className="text-gray-300 text-sm mb-4">
                  GPT-4, Claude, and next-generation AI systems transforming human-computer interaction.
                </p>
                <div className="aspect-video rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <iframe
                    src="https://www.youtube.com/embed/PaCmpygFfXo"
                    title="How Large Language Models Work - 3Blue1Brown"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  "How Large Language Models Work" - Visual explanation of transformer architectures
                </p>
              </div>

              <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Computer Vision</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Advanced image recognition, autonomous vehicles, and medical imaging breakthroughs.
                </p>
                <div className="aspect-video rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <iframe
                    src="https://www.youtube.com/embed/kopoLzvh5jY"
                    title="The Future of AI - Two Minute Papers"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  "The Future of AI" - Latest breakthroughs in computer vision and AI
                </p>
              </div>

              <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Reinforcement Learning</h3>
                <p className="text-gray-300 text-sm mb-4">
                  AI agents mastering complex games, robotics, and real-world decision making.
                </p>
                <div className="aspect-video rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <iframe
                    src="https://www.youtube.com/embed/kopoLzvh5jY"
                    title="AlphaGo - The Movie | Full award-winning documentary"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  "AlphaGo Documentary" - How AI mastered the ancient game of Go through reinforcement learning
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">🚀 AI Impact on Society</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-400 mb-2">Positive Transformations</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Healthcare diagnostics and drug discovery</li>
                    <li>• Educational personalization and accessibility</li>
                    <li>• Climate change mitigation strategies</li>
                    <li>• Scientific research acceleration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">Challenges to Address</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Ethical AI development and deployment</li>
                    <li>• Job displacement and reskilling needs</li>
                    <li>• Privacy and security concerns</li>
                    <li>• AI safety and alignment research</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Emerging Technologies */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-4xl">🔬</span>
              Emerging Technologies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-orange-500/10 rounded-2xl p-6 border border-orange-500/20">
                  <h3 className="text-xl font-bold text-orange-400 mb-3">Fusion Energy</h3>
                  <p className="text-gray-300 mb-4">
                    Breakthrough in controlled nuclear fusion promising unlimited clean energy.
                  </p>
                  <div className="aspect-video rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <iframe
                      src="https://www.youtube.com/embed/LJ4W1g-6JiY"
                      title="Nuclear Fusion Explained - Kurzgesagt"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    "Nuclear Fusion Explained" - Kurzgesagt breaks down the science of fusion energy
                  </p>
                </div>

                <div className="bg-pink-500/10 rounded-2xl p-6 border border-pink-500/20">
                  <h3 className="text-xl font-bold text-pink-400 mb-3">Brain-Computer Interfaces</h3>
                  <p className="text-gray-300 mb-4">
                    Direct neural interfaces enabling thought-controlled devices and treatments.
                  </p>
                  <div className="aspect-video rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <iframe
                      src="https://www.youtube.com/embed/rsCul1sp4hQ"
                      title="Neuralink and the Future of Brain-Computer Interfaces"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    "Brain-Computer Interfaces" - Exploring the future of direct neural interfaces and thought-controlled technology
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-teal-500/10 rounded-2xl p-6 border border-teal-500/20">
                  <h3 className="text-xl font-bold text-teal-400 mb-3">Nanotechnology</h3>
                  <p className="text-gray-300 mb-4">
                    Manipulating matter at the atomic scale for revolutionary applications.
                  </p>
                  <div className="aspect-video rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <iframe
                      src="https://www.youtube.com/embed/yqLlgIaz1L0"
                      title="Nanotechnology: The Science of the Small - Veritasium"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    "Nanotechnology Explained" - How manipulating atoms is revolutionizing technology
                  </p>
                </div>

                <div className="bg-indigo-500/10 rounded-2xl p-6 border border-indigo-500/20">
                  <h3 className="text-xl font-bold text-indigo-400 mb-3">Space Technology</h3>
                  <p className="text-gray-300 mb-4">
                    Reusable rockets, Mars colonization, and space-based manufacturing.
                  </p>
                  <div className="aspect-video rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <iframe
                      src="https://www.youtube.com/embed/zqE-ultsWt0"
                      title="How SpaceX Lands Rockets - Real Engineering"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    "How SpaceX Lands Rockets" - The incredible engineering behind reusable rocket technology
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* India's Tech Leadership */}
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl p-8 border border-orange-500/20 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">🇮🇳 India's Tech Leadership Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-orange-400 mb-3">Global Tech Hub</h3>
                <p className="text-gray-300 text-sm">
                  Positioning India as the world's leading technology development and innovation center.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Research Excellence</h3>
                <p className="text-gray-300 text-sm">
                  Leading breakthrough research in quantum computing, AI, and emerging technologies.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Innovation Ecosystem</h3>
                <p className="text-gray-300 text-sm">
                  Building comprehensive infrastructure for technology development and commercialization.
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Our Technology Goals</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-cyan-400 mb-3">Short-term (2025-2027)</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Establish quantum computing research centers</li>
                    <li>• Launch AI development programs</li>
                    <li>• Create technology transfer networks</li>
                    <li>• Build industry-academia partnerships</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-400 mb-3">Long-term (2028+)</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Achieve quantum advantage in key applications</li>
                    <li>• Lead global AI safety research</li>
                    <li>• Pioneer fusion energy deployment</li>
                    <li>• Dominate space technology sector</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Shape the Technological Future</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join India's mission to lead the global technology revolution. From quantum computing to AI, be part of the breakthrough discoveries that will define the next century.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-semibold hover:scale-105 transition-transform">
                Explore Tech Research
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 hover:scale-105 transition-transform">
                Join Innovation Network
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
