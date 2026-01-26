'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Ship,
  Anchor,
  Droplet,
  Package,
  Shield,
  Wrench,
  Building,
  Waves,
} from 'lucide-react';
import CTASection from '@/src/components/sections/CTASection';
import { Card, CardContent } from '@/src/components/ui/Card';
import { fadeInUp, staggerContainer } from '@/src/lib/animations';

export default function IndustriesPage() {
  const industries = [
    {
      icon: Ship,
      name: 'Marine & Offshore',
      description: 'Comprehensive services for vessels, offshore platforms, and marine installations. From routine maintenance to complex engineering projects.',
      challenges: [
        'Harsh marine environments',
        'Strict safety regulations',
        'Complex logistics',
        'Weather dependencies',
      ],
      solutions: [
        '24/7 emergency response',
        'Certified marine specialists',
        'Advanced equipment',
        'Weather contingency planning',
      ],
    },
    {
      icon: Droplet,
      name: 'Oil & Gas',
      description: 'Specialized solutions for oil and gas marine operations including offshore platforms, tankers, and processing facilities.',
      challenges: [
        'High-pressure systems',
        'Hazardous environments',
        'Regulatory compliance',
        'Zero-tolerance for failures',
      ],
      solutions: [
        'ATEX certified equipment',
        'Explosion-proof systems',
        'Strict quality protocols',
        'Comprehensive testing',
      ],
    },
    {
      icon: Wrench,
      name: 'Shipbuilding & Repair',
      description: 'Expert shipyard services and vessel repair for commercial, naval, and specialized maritime vessels.',
      challenges: [
        'Complex structural work',
        'Tight deadlines',
        'Classification requirements',
        'Quality standards',
      ],
      solutions: [
        'Experienced welders',
        'Modern fabrication facilities',
        'Class society approvals',
        'Project management',
      ],
    },
    {
      icon: Anchor,
      name: 'Port Operations',
      description: 'Port equipment maintenance, infrastructure support, and specialized services for harbor operations.',
      challenges: [
        'Operational continuity',
        'Heavy-duty equipment',
        'High throughput demands',
        'Diverse vessel types',
      ],
      solutions: [
        'Rapid response teams',
        'Equipment rentals',
        'Preventive maintenance',
        'Logistics coordination',
      ],
    },
    {
      icon: Package,
      name: 'Maritime Logistics',
      description: 'Supply chain and logistics solutions tailored for maritime operations and shipping companies.',
      challenges: [
        'Complex supply chains',
        'International regulations',
        'Time-sensitive deliveries',
        'Cost optimization',
      ],
      solutions: [
        'Integrated logistics',
        'Global network',
        'Real-time tracking',
        'Customs expertise',
      ],
    },
    {
      icon: Shield,
      name: 'Naval & Defense',
      description: 'Certified services for naval vessels with security clearance and defense-grade standards.',
      challenges: [
        'Security protocols',
        'Military specifications',
        'Classified operations',
        'Highest reliability',
      ],
      solutions: [
        'Security-cleared personnel',
        'Military-grade materials',
        'Strict documentation',
        'Confidentiality assured',
      ],
    },
    {
      icon: Building,
      name: 'Petrochemical Marine Transport',
      description: 'Specialized services for chemical tankers and petrochemical marine transportation.',
      challenges: [
        'Chemical compatibility',
        'Contamination prevention',
        'Safety regulations',
        'Environmental protection',
      ],
      solutions: [
        'Chemical-resistant materials',
        'Specialized coatings',
        'Safety protocols',
        'Environmental compliance',
      ],
    },
    {
      icon: Waves,
      name: 'Offshore Renewable Energy',
      description: 'Marine construction and maintenance for offshore wind farms and renewable energy installations.',
      challenges: [
        'Remote locations',
        'Environmental sensitivity',
        'Weather exposure',
        'Foundation complexity',
      ],
      solutions: [
        'Specialized vessels',
        'Environmental safeguards',
        'Advanced monitoring',
        'Sustainable practices',
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Custom Hero with Text Left, Images Right */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Industries We Serve
                <span className="block text-orange-500 mt-2">Specialized Solutions</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Tailored marine engineering services for diverse industry needs across maritime, industrial, and chemical sectors
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a 
                  href="#industries" 
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center"
                >
                  Explore Industries
                </a>
                <a 
                  href="/contact" 
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Interlocking Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px] gap-3"
            >
              {/* Image 1 - Top Left (Marine & Offshore) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute top-0 left-0 w-[48%] h-[45%] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/hero/offshore.jpg"
                  alt="Marine & Offshore Operations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-transparent" />
              </motion.div>

              {/* Image 2 - Top Right (Oil & Gas) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-12 right-0 w-[48%] h-[48%] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/project/piping6.jpeg"
                  alt="Oil & Gas Industry"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-transparent" />
              </motion.div>

              {/* Image 3 - Bottom Left (Shipbuilding) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-0 w-[48%] h-[48%] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/hero/shpMain.jpg"
                  alt="Shipbuilding & Repair"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/30 to-transparent" />
              </motion.div>

              {/* Image 4 - Bottom Right (Port Operations) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 right-0 w-[48%] h-[45%] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/projectImages/pipes.jpeg"
                  alt="Port Operations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 to-transparent" />
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep understanding of sector-specific challenges and proven solutions
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {industries.map((industry, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="pt-8">
                    <industry.icon className="h-16 w-16 text-orange-500 mb-4" />
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      {industry.name}
                    </h3>
                    <p className="text-gray-700 mb-6">{industry.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-3">
                          Industry Challenges:
                        </h4>
                        <ul className="space-y-2">
                          {industry.challenges.map((challenge, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-orange-500 mr-2">•</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-3">
                          Our Solutions:
                        </h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Stats */}
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
              Cross-Industry Experience
            </h2>
            <p className="text-xl text-gray-300">
              Diverse expertise across maritime sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '8+', label: 'Industries Served' },
              { value: '200+', label: 'Companies Partnered' },
              { value: '35+', label: 'Countries Reached' },
              { value: '99%', label: 'Client Retention' },
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
        title="Industry-Specific Solutions"
        description="Contact us to discuss how we can address your sector's unique challenges"
        backgroundImage="/images/cta-background.jpg"
        overlayOpacity={85}
      />
    </div>
  );
}