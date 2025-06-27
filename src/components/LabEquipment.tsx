'use client';

import { motion } from 'framer-motion';
import { Bot, Printer, Monitor, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const equipmentData = [
  {
    id: 'robo-maze',
    title: 'Robo Maze Solver',
    description: 'AI-powered robot that navigates complex mazes using computer vision and pathfinding algorithms',
    icon: Bot,
    color: 'from-blue-500 to-cyan-500',
    features: ['Computer Vision', 'Path Finding', 'Machine Learning', 'Real-time Navigation']
  },
  {
    id: 'hologram',
    title: 'Holographic Display',
    description: 'Interactive 3D holographic projections for visualizing complex scientific concepts',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
    features: ['3D Visualization', 'Interactive Display', 'Real-time Rendering', 'Educational Content']
  },
  {
    id: '3d-printer',
    title: '3D Printer Lab',
    description: 'High-precision 3D printing for rapid prototyping and educational demonstrations',
    icon: Printer,
    color: 'from-green-500 to-teal-500',
    features: ['Rapid Prototyping', 'Multi-material', 'High Precision', 'Educational Models']
  },
  {
    id: 'dual-monitors',
    title: 'Dual Monitor Setup',
    description: 'Advanced computing station for data analysis, coding, and collaborative research',
    icon: Monitor,
    color: 'from-orange-500 to-red-500',
    features: ['Data Analysis', 'Collaborative Coding', 'Research Tools', 'Multi-display']
  }
];

function EquipmentCard({ equipment, index }: { equipment: typeof equipmentData[0], index: number }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 300;
    const height = 200;

    svg.attr('width', width).attr('height', height);

    // Create animated background pattern
    const defs = svg.append('defs');
    const gradient = defs.append('linearGradient')
      .attr('id', `gradient-${equipment.id}`)
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', 0).attr('y1', 0)
      .attr('x2', width).attr('y2', height);

    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', equipment.id === 'robo-maze' ? '#3b82f6' : 
                          equipment.id === 'hologram' ? '#8b5cf6' :
                          equipment.id === '3d-printer' ? '#10b981' : '#f97316')
      .attr('stop-opacity', 0.1);

    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', equipment.id === 'robo-maze' ? '#06b6d4' :
                          equipment.id === 'hologram' ? '#ec4899' :
                          equipment.id === '3d-printer' ? '#14b8a6' : '#ef4444')
      .attr('stop-opacity', 0.3);

    // Add animated circles
    const circles = svg.selectAll('.bg-circle')
      .data(Array.from({ length: 10 }))
      .enter()
      .append('circle')
      .attr('class', 'bg-circle')
      .attr('r', () => Math.random() * 20 + 5)
      .attr('cx', () => Math.random() * width)
      .attr('cy', () => Math.random() * height)
      .attr('fill', `url(#gradient-${equipment.id})`)
      .attr('opacity', 0.1);

    // Animate circles
    function animateCircles() {
      circles
        .transition()
        .duration(3000)
        .ease(d3.easeLinear)
        .attr('cy', function() {
          const currentY = +d3.select(this).attr('cy');
          return currentY > height ? -20 : currentY + 50;
        })
        .on('end', animateCircles);
    }

    animateCircles();
  }, [equipment.id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
        {/* Background SVG */}
        <svg ref={svgRef} className="absolute inset-0 w-full h-full" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${equipment.color} mb-4`}>
            <equipment.icon className="w-6 h-6 text-white" />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">{equipment.title}</h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">{equipment.description}</p>
          
          <div className="space-y-2">
            {equipment.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${equipment.color}`} />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Hover effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}

export default function LabEquipment() {
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
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Lab Equipment
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            State-of-the-art equipment designed to make learning interactive and engaging
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipmentData.map((equipment, index) => (
            <EquipmentCard key={equipment.id} equipment={equipment} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
