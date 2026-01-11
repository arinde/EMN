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
import HeroSection from '@/src/components/sections/HeroSection';
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
      name: 'Maritime & industiral Logistics',
      description: 'Supply chain and logistics solutions tailored for maritime operations, industrial operations and shipping companies.',
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
      name: 'Chemical Industry',
      description: 'Certified services for Chemical production facilities and industrial processes.',
      challenges: [
        'Corrosive materials',
        'Modern Fabrication standards',
        'Safety regulations',
        'Highest reliability',
      ],
      solutions: [
        'Best grade materials',
        'Advanced fabrication techniques',
        'Safety-first protocols',
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
      {/* Hero */}
      <HeroSection
        title="Industries We Serve"
        subtitle="Specialized Solutions Across Maritime Sectors"
        description="Tailored marine engineering services for diverse industry needs"
      />

      {/* Industries Overview */}
      <section className="py-20 bg-white">
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
              { value: '10+', label: 'Companies Partnered' },
              { value: '5+', label: 'Countries Reached' },
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
      />
    </div>
  );
}