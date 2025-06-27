'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Atom, ChevronDown } from 'lucide-react';
import { navigationItems, resourceCategories } from '@/lib/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const pathname = usePathname();

  // Debug: log the current pathname
  console.log('Current pathname:', pathname);

  // Helper function to check if a nav item is active
  const isActiveItem = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname.startsWith(href + '/');
  };

  // Check if we're on any resources page
  const isResourcesActive = pathname.startsWith('/resources');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <Atom className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Scientific Curiosity Labs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              if (item.name === 'Resources') {
                return (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                        isResourcesActive
                          ? 'text-blue-400 bg-blue-400/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {isResourcesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-black/80 backdrop-blur-md rounded-lg border border-white/10 shadow-xl"
                      >
                        {resourceCategories.map((category) => (
                          <Link
                            key={category.name}
                            href={category.href}
                            className={`block px-4 py-3 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                              pathname === category.href
                                ? 'text-blue-400 bg-blue-400/10'
                                : 'text-gray-300 hover:text-white hover:bg-white/10'
                            }`}
                            onClick={() => setIsResourcesOpen(false)}
                          >
                            <div className="font-medium">{category.name}</div>
                            <div className={`text-xs ${
                              pathname === category.href ? 'text-blue-300' : 'text-gray-400'
                            }`}>
                              {category.description}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isActiveItem(item.href)
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            {navigationItems.map((item) => {
              const isActive = item.name === 'Resources' 
                ? isResourcesActive
                : isActiveItem(item.href);
              
              if (item.name === 'Resources') {
                return (
                  <div key={item.name}>
                    <div className={`px-3 py-2 rounded-lg font-medium ${
                      isResourcesActive
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-gray-300'
                    }`}>
                      {item.name}
                    </div>
                    {/* Mobile Resources Submenu */}
                    <div className="pl-6 mt-1 space-y-1">
                      {resourceCategories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                            pathname === category.href
                              ? 'text-blue-400 bg-blue-400/10'
                              : 'text-gray-400 hover:text-white hover:bg-white/10'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
