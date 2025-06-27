'use client';

import { motion } from 'framer-motion';
import { MapPin, Building2, Users, Calendar, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const cities = [
  {
    id: 'lucknow',
    name: 'Lucknow',
    state: 'Uttar Pradesh',
    status: 'active',
    established: '2025',
    coordinates: { lat: 26.8467, lng: 80.9462 },
    population: '3.2M',
    features: ['Quantum Computing Lab', 'Robo Maze Arena', 'Holographic Display'],
    description: 'Our flagship lab in the City of Nawabs, pioneering scientific education',
    students: 150
  },
  {
    id: 'delhi',
    name: 'New Delhi',
    state: 'Delhi',
    status: 'planned-2025',
    established: 'Q3 2025',
    coordinates: { lat: 28.6139, lng: 77.2090 },
    population: '32.9M',
    features: ['Advanced Robotics', 'AI Research Center', 'Space Technology Lab'],
    description: 'Capital city expansion with focus on cutting-edge technology',
    students: 300
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    status: 'planned-2026',
    established: 'Q1 2026',
    coordinates: { lat: 12.9716, lng: 77.5946 },
    population: '12.3M',
    features: ['Biotech Labs', 'Software Engineering', 'Innovation Hub'],
    description: 'Silicon Valley of India - technology and innovation focused',
    students: 400
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    status: 'planned-2026',
    established: 'Q2 2026',
    coordinates: { lat: 19.0760, lng: 72.8777 },
    population: '20.4M',
    features: ['Marine Biology', 'Environmental Science', 'Clean Energy'],
    description: 'Financial capital focusing on environmental sustainability',
    students: 350
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    status: 'planned-2026',
    established: 'Q4 2026',
    coordinates: { lat: 17.3850, lng: 78.4867 },
    population: '10.0M',
    features: ['Pharmaceutical Research', 'Data Science', 'Medical Technology'],
    description: 'Cyberabad - hub for pharmaceutical and medical research',
    students: 250
  },
  {
    id: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    status: 'planned-2027',
    established: 'Q1 2027',
    coordinates: { lat: 13.0827, lng: 80.2707 },
    population: '11.5M',
    features: ['Automotive Engineering', 'Aerospace', 'Manufacturing Tech'],
    description: 'Detroit of India - automotive and aerospace engineering',
    students: 280
  }
];

function IndiaMap() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 500;
    const height = 400;

    svg.attr('width', width).attr('height', height);

    // Simple India outline (simplified coordinates)
    const indiaPath = "M200,50 L300,60 L350,100 L380,150 L370,200 L350,250 L320,300 L280,350 L200,360 L150,340 L120,300 L100,250 L110,200 L130,150 L170,100 Z";
    
    svg.append('path')
      .attr('d', indiaPath)
      .attr('fill', 'rgba(59, 130, 246, 0.1)')
      .attr('stroke', '#3b82f6')
      .attr('stroke-width', 2)
      .attr('opacity', 0.6);

    // Add cities
    const cityData = cities.map(city => ({
      ...city,
      x: ((city.coordinates.lng - 68) / (97 - 68)) * 280 + 100,
      y: ((37 - city.coordinates.lat) / (37 - 6)) * 300 + 50
    }));

    const cityGroups = svg.selectAll('.city')
      .data(cityData)
      .enter()
      .append('g')
      .attr('class', 'city')
      .attr('transform', d => `translate(${d.x}, ${d.y})`);

    // City markers
    cityGroups.append('circle')
      .attr('r', d => d.status === 'active' ? 12 : 8)
      .attr('fill', d => {
        switch(d.status) {
          case 'active': return '#10b981';
          case 'planned-2025': return '#f59e0b';
          case 'planned-2026': return '#3b82f6';
          case 'planned-2027': return '#8b5cf6';
          default: return '#6b7280';
        }
      })
      .attr('opacity', 0.8)
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 2);

    // City labels
    cityGroups.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', -20)
      .attr('fill', 'white')
      .attr('font-size', '12px')
      .attr('font-weight', 'bold')
      .text(d => d.name);

    // Pulsing animation for active city
    cityGroups.filter(d => d.status === 'active')
      .append('circle')
      .attr('r', 12)
      .attr('fill', 'none')
      .attr('stroke', '#10b981')
      .attr('stroke-width', 2)
      .attr('opacity', 0)
      .transition()
      .duration(2000)
      .ease(d3.easeLinear)
      .attr('r', 30)
      .attr('opacity', 0.5)
      .on('end', function() {
        d3.select(this).attr('r', 12).attr('opacity', 0);
      });

    // Connection lines (future expansion paths)
    const connections = [
      ['lucknow', 'delhi'],
      ['delhi', 'bangalore'],
      ['bangalore', 'mumbai'],
      ['mumbai', 'hyderabad'],
      ['hyderabad', 'chennai']
    ];

    connections.forEach(([source, target]) => {
      const sourceCity = cityData.find(c => c.id === source);
      const targetCity = cityData.find(c => c.id === target);
      
      if (sourceCity && targetCity) {
        svg.append('line')
          .attr('x1', sourceCity.x)
          .attr('y1', sourceCity.y)
          .attr('x2', targetCity.x)
          .attr('y2', targetCity.y)
          .attr('stroke', '#4f46e5')
          .attr('stroke-width', 1)
          .attr('opacity', 0.3)
          .attr('stroke-dasharray', '5,5');
      }
    });

  }, []);

  return <svg ref={svgRef} className="w-full h-full" />;
}

function CityCard({ city, index }: { city: typeof cities[0], index: number }) {
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'active': return 'from-green-500 to-emerald-500';
      case 'planned-2025': return 'from-yellow-500 to-orange-500';
      case 'planned-2026': return 'from-blue-500 to-cyan-500';
      case 'planned-2027': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case 'active': return 'Now Active';
      case 'planned-2025': return 'Coming 2025';
      case 'planned-2026': return 'Planned 2026';
      case 'planned-2027': return 'Planned 2027';
      default: return 'Future';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{city.name}</h3>
          <p className="text-gray-400 text-sm">{city.state}</p>
        </div>
        <div className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(city.status)} rounded-full`}>
          <span className="text-white text-xs font-semibold">{getStatusText(city.status)}</span>
        </div>
      </div>

      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{city.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Calendar className="w-3 h-3" />
          <span>{city.established}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Users className="w-3 h-3" />
          <span>{city.students} students</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Building2 className="w-3 h-3" />
          <span>{city.population} population</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <MapPin className="w-3 h-3" />
          <span>Lab Center</span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <h4 className="text-sm font-semibold text-white">Key Features:</h4>
        {city.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${getStatusColor(city.status)}`} />
            {feature}
          </div>
        ))}
      </div>

      {city.status === 'active' && (
        <button className="w-full flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white text-sm font-semibold hover:scale-105 transition-transform">
          Visit Lab
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </motion.div>
  );
}

export default function CityExpansion() {
  const [selectedPhase, setSelectedPhase] = useState('all');

  const phases = [
    { id: 'all', label: 'All Cities', count: cities.length },
    { id: 'active', label: 'Active', count: cities.filter(c => c.status === 'active').length },
    { id: '2025', label: '2025 Plan', count: cities.filter(c => c.status.includes('2025')).length },
    { id: '2026', label: '2026 Plan', count: cities.filter(c => c.status.includes('2026')).length },
    { id: '2027', label: '2027 Plan', count: cities.filter(c => c.status.includes('2027')).length },
  ];

  const filteredCities = selectedPhase === 'all' 
    ? cities 
    : cities.filter(city => {
        if (selectedPhase === 'active') return city.status === 'active';
        return city.status.includes(selectedPhase);
      });

  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent mb-6">
            Expanding Across India
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From Lucknow to major metropolitan cities - building a network of scientific curiosity labs
          </p>
        </motion.div>

        {/* Phase Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setSelectedPhase(phase.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedPhase === phase.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {phase.label} ({phase.count})
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* India Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/20 rounded-3xl p-8 flex items-center justify-center"
          >
            <IndiaMap />
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Expansion Timeline</h3>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/20">
                <h4 className="text-lg font-bold text-green-400 mb-2">Phase 1: Foundation (2025)</h4>
                <p className="text-gray-300 text-sm mb-3">Establishing our flagship lab in Lucknow with core equipment and initial programs</p>
                <div className="flex items-center gap-2 text-sm text-green-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  1 Active Lab • 150 Students
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl p-6 border border-yellow-500/20">
                <h4 className="text-lg font-bold text-yellow-400 mb-2">Phase 2: Capital Expansion (2025-2026)</h4>
                <p className="text-gray-300 text-sm mb-3">Expanding to Delhi and southern tech hubs</p>
                <div className="flex items-center gap-2 text-sm text-yellow-300">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  4 Planned Labs • 1,000+ Students
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/20">
                <h4 className="text-lg font-bold text-blue-400 mb-2">Phase 3: National Network (2027)</h4>
                <p className="text-gray-300 text-sm mb-3">Complete network across major Indian cities</p>
                <div className="flex items-center gap-2 text-sm text-blue-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  6+ Labs • 2,000+ Students
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-white mb-4">Impact Goals</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">10,000+</div>
                  <div className="text-xs text-gray-400">Students Impacted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">50+</div>
                  <div className="text-xs text-gray-400">Research Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">100+</div>
                  <div className="text-xs text-gray-400">Innovations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">25+</div>
                  <div className="text-xs text-gray-400">Industry Partners</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* City Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCities.map((city, index) => (
            <CityCard key={city.id} city={city} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
