'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Ship, Settings, Hammer, Calculator, ChevronRight } from 'lucide-react';
import HeroSection from '@/src/components/sections/HeroSection';
import CTASection from '@/src/components/sections/CTASection';
import { Card, CardContent } from '@/src/components/ui/Card';
import { projects } from '@/src/data/projects';
import { fadeInUp } from '@/src/lib/animations';

const iconMap: any = {
  'Oil & Gas': Building,
  'Shipbuilding': Ship,
  'Marine Services': Settings,
  'Port Operations': Hammer,
  'Naval': Ship,
  'Renewable Energy': Building,
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <HeroSection
        title="Our Projects"
        subtitle="Showcasing Excellence in Marine Engineering"
        description="Successful projects across maritime, offshore, and industrial sectors"
      />

      {/* Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  filter === cat
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, i) => {
                const Icon = iconMap[project.category] || Building;
                
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="h-full overflow-hidden">
                      {/* Project Image Placeholder */}
                      <div className="h-48 bg-linear-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                        <Icon className="h-24 w-24 text-white opacity-50" />
                      </div>
                      
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">
                            {project.category}
                          </span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                            {project.industry}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-blue-900 mb-3">
                          {project.name}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-gray-700 mb-2">
                            Services Used:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {project.services.slice(0, 2).map((service, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                              >
                                {service}
                              </span>
                            ))}
                            {project.services.length > 2 && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                +{project.services.length - 2} more
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <button className="text-orange-500 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                          View Details <ChevronRight className="h-4 w-4" />
                        </button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Project Success Metrics
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '98%', label: 'On-Time Completion' },
              { value: '100%', label: 'Safety Compliance' },
              { value: '95%', label: 'Client Satisfaction' },
              { value: '500+', label: 'Projects Delivered' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Have a Project in Mind?"
        description="Let's discuss how we can help bring your marine engineering project to life"
      />
    </div>
  );
}