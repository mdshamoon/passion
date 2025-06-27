'use client';

import { motion } from 'framer-motion';
import { Atom, Zap, Cpu, Database } from 'lucide-react';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const focusAreas = [
  {
    id: 'quantum-computing',
    title: 'Quantum Computing',
    description: 'Exploring quantum mechanics principles for next-generation computing solutions',
    icon: Atom,
    progress: 45,
    highlights: [
      'Quantum algorithms research',
      'Superposition and entanglement',
      'Quantum error correction',
      'Applications in cryptography'
    ],
    color: '#8b5cf6'
  },
  {
    id: 'thorium-reactors',
    title: 'Thorium-Based Reactors',
    description: 'Advancing clean nuclear energy with thorium fuel cycles for sustainable power',
    icon: Zap,
    progress: 65,
    highlights: [
      'Molten salt reactor technology',
      'Nuclear fuel cycle optimization',
      'Safety system design',
      'Waste reduction strategies'
    ],
    color: '#f59e0b'
  }
];

function QuantumVisualization() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 400;
    const height = 300;

    svg.attr('width', width).attr('height', height);

    // Create quantum state visualization
    const quantumStates = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: (i % 4) * 100 + 50,
      y: Math.floor(i / 4) * 100 + 75,
      state: Math.random() > 0.5 ? 1 : 0,
      phase: Math.random() * Math.PI * 2
    }));

    const stateGroups = svg.selectAll('.quantum-state')
      .data(quantumStates)
      .enter()
      .append('g')
      .attr('class', 'quantum-state')
      .attr('transform', d => `translate(${d.x}, ${d.y})`);

    // Add quantum state circles
    stateGroups.append('circle')
      .attr('r', 20)
      .attr('fill', d => d.state ? '#8b5cf6' : '#06b6d4')
      .attr('opacity', 0.7)
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 2);

    // Add quantum state labels
    stateGroups.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .attr('fill', 'white')
      .attr('font-size', '12px')
      .text(d => d.state ? '|1⟩' : '|0⟩');

    // Add entanglement lines
    const entanglements = [
      [0, 1], [2, 3], [4, 5], [6, 7], [0, 4], [1, 5]
    ];

    svg.selectAll('.entanglement')
      .data(entanglements)
      .enter()
      .append('line')
      .attr('class', 'entanglement')
      .attr('x1', d => quantumStates[d[0]].x)
      .attr('y1', d => quantumStates[d[0]].y)
      .attr('x2', d => quantumStates[d[1]].x)
      .attr('y2', d => quantumStates[d[1]].y)
      .attr('stroke', '#f093fb')
      .attr('stroke-width', 1)
      .attr('opacity', 0.3)
      .attr('stroke-dasharray', '5,5');

    // Animate quantum states
    function animateQuantumStates() {
      stateGroups.selectAll('circle')
        .transition()
        .duration(2000)
        .attr('fill', () => Math.random() > 0.5 ? '#8b5cf6' : '#06b6d4')
        .attr('r', () => 15 + Math.random() * 10)
        .on('end', animateQuantumStates);
    }

    animateQuantumStates();
  }, []);

  return <svg ref={svgRef} className="w-full h-full" />;
}

function ThoriumVisualization() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 400;
    const height = 300;

    svg.attr('width', width).attr('height', height);

    // Create reactor core visualization
    const centerX = width / 2;
    const centerY = height / 2;

    // Main reactor vessel
    svg.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', 80)
      .attr('fill', 'none')
      .attr('stroke', '#f59e0b')
      .attr('stroke-width', 3)
      .attr('opacity', 0.8);

    // Fuel channels
    const fuelChannels = Array.from({ length: 6 }, (_, i) => {
      const angle = (i / 6) * Math.PI * 2;
      return {
        x: centerX + Math.cos(angle) * 40,
        y: centerY + Math.sin(angle) * 40,
        angle
      };
    });

    const channelGroups = svg.selectAll('.fuel-channel')
      .data(fuelChannels)
      .enter()
      .append('g')
      .attr('class', 'fuel-channel');

    channelGroups.append('rect')
      .attr('x', d => d.x - 8)
      .attr('y', d => d.y - 20)
      .attr('width', 16)
      .attr('height', 40)
      .attr('fill', '#f59e0b')
      .attr('opacity', 0.6)
      .attr('rx', 3);

    // Control rods
    const controlRods = Array.from({ length: 3 }, (_, i) => {
      const angle = (i / 3) * Math.PI * 2 + Math.PI / 6;
      return {
        x: centerX + Math.cos(angle) * 60,
        y: centerY + Math.sin(angle) * 60,
        inserted: Math.random() > 0.5
      };
    });

    const rodGroups = svg.selectAll('.control-rod')
      .data(controlRods)
      .enter()
      .append('g')
      .attr('class', 'control-rod');

    rodGroups.append('rect')
      .attr('x', d => d.x - 3)
      .attr('y', d => d.y - (d.inserted ? 30 : 15))
      .attr('width', 6)
      .attr('height', d => d.inserted ? 30 : 15)
      .attr('fill', '#64748b')
      .attr('opacity', 0.8);

    // Heat flow animation
    const heatParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: centerX + (Math.random() - 0.5) * 160,
      y: centerY + (Math.random() - 0.5) * 160,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2
    }));

    const particles = svg.selectAll('.heat-particle')
      .data(heatParticles)
      .enter()
      .append('circle')
      .attr('class', 'heat-particle')
      .attr('r', 2)
      .attr('fill', '#ef4444')
      .attr('opacity', 0.6);

    function animateHeat() {
      heatParticles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        const dx = particle.x - centerX;
        const dy = particle.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 100) {
          particle.x = centerX + (Math.random() - 0.5) * 60;
          particle.y = centerY + (Math.random() - 0.5) * 60;
        }
      });

      particles
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);

      requestAnimationFrame(animateHeat);
    }

    animateHeat();
  }, []);

  return <svg ref={svgRef} className="w-full h-full" />;
}

function FocusAreaCard({ area, index }: { area: typeof focusAreas[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600">
              <area.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{area.title}</h3>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${area.progress}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                  />
                </div>
                <span className="text-sm text-gray-400">{area.progress}%</span>
              </div>
            </div>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">{area.description}</p>

          <div className="space-y-3">
            {area.highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: area.color }}
                />
                <span className="text-gray-300 text-sm">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-black/20 rounded-2xl p-6 min-h-[300px] flex items-center justify-center">
          {area.id === 'quantum-computing' ? (
            <QuantumVisualization />
          ) : (
            <ThoriumVisualization />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ScientificFocus() {
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
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Scientific Focus Areas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering research in cutting-edge technologies that will shape India&apos;s future
          </p>
        </motion.div>

        <div className="space-y-12">
          {focusAreas.map((area, index) => (
            <FocusAreaCard key={area.id} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
