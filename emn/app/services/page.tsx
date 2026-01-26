'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Wrench,
  Ship,
  Settings,
  Package,
  Users,
  Droplet,
  Hammer,
  Calculator,
  Building,
  HardHat,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import CTASection from '@/src/components/sections/CTASection';
import { Card, CardContent } from '@/src/components/ui/Card';
import Button from '@/src/components/ui/Button';
import { services } from '@/src/data/services';
import { fadeInUp, staggerContainer } from '@/src/lib/animations';

const iconMap: any = {
  Wrench,
  Ship,
  Settings,
  Package,
  Users,
  Droplet,
  Hammer,
  Calculator,
  Building,
  HardHat,
};

export default function ServicesPage() {
  // Hero images for the right side
  const heroImages = [
    { src: '/project/rcpl2.jpeg', alt: 'Marine Fabrication' },
    { src: '/project/worker3.jpeg', alt: 'Welding Services' },
    { src: '/project/project5.jpeg', alt: 'Ship Maintenance' },
    { src: '/project/piping4.jpeg', alt: 'Piping Installation' },
  ];

  return (
    <div className="pt-20">
      {/* Custom Hero - Text Left, Images Right */}
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full mb-4">
                  <span className="text-orange-400 font-semibold text-sm">
                    COMPREHENSIVE SOLUTIONS
                  </span>
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Our Services
                <span className="block text-orange-500 mt-2 text-3xl md:text-4xl lg:text-5xl">
                  Marine & Industrial Engineering
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Expert services for vessels, chemical plant structures, gas piping, offshore platforms, and maritime operations
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a 
                  href="#services" 
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  Explore Services
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="/contact" 
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Request Quote
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Images Grid - 2x2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              {/* Image 1 - Top Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  opacity: { delay: 0.3, duration: 0.5 },
                  scale: { delay: 0.3, duration: 0.5 }
                }}
                whileHover={{ scale: 1.05 }}
                className="relative h-48 md:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={heroImages[0].src}
                  alt={heroImages[0].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              </motion.div>

              {/* Image 2 - Top Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  opacity: { delay: 0.4, duration: 0.5 },
                  scale: { delay: 0.4, duration: 0.5 }
                }}
                whileHover={{ scale: 1.05 }}
                className="relative h-48 md:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={heroImages[1].src}
                  alt={heroImages[1].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent" />
              </motion.div>

              {/* Image 3 - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  opacity: { delay: 0.5, duration: 0.5 },
                  scale: { delay: 0.5, duration: 0.5 }
                }}
                whileHover={{ scale: 1.05 }}
                className="relative h-48 md:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={heroImages[2].src}
                  alt={heroImages[2].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              </motion.div>

              {/* Image 4 - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  opacity: { delay: 0.6, duration: 0.5 },
                  scale: { delay: 0.6, duration: 0.5 }
                }}
                whileHover={{ scale: 1.05 }}
                className="relative h-48 md:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={heroImages[3].src}
                  alt={heroImages[3].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering solutions tailored to your industry needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="pt-8">
                      {Icon && <Icon className="h-12 w-12 text-orange-500 mb-4" />}
                      <h3 className="text-2xl font-bold text-blue-900 mb-3">
                        {service.name}
                      </h3>
                      <p className="text-gray-700 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <p className="font-semibold text-blue-900 mb-2">
                          Key Capabilities:
                        </p>
                        <ul className="space-y-1">
                          {service.capabilities.map((cap, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-gray-600"
                            >
                              <CheckCircle className="h-4 w-4 text-orange-500 shrink-0" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <p className="font-semibold text-blue-900 mb-2">
                          Industries Served:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.industries.map((industry, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm"
                            >
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Link href="/contact">
                        <Button variant="primary" fullWidth>
                          Request Service
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to delivering excellence
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Initial assessment and project requirements discussion',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed planning, resource allocation, and timeline',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Professional service delivery with quality control',
              },
              {
                step: '04',
                title: 'Completion',
                description: 'Final inspection, certification, and handover',
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card hover={false} className="text-center h-full">
                  <CardContent className="pt-6">
                    <div className="text-5xl font-bold text-orange-500 mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need a Specific Service?"
        description="Contact us to discuss your marine engineering requirements"
        backgroundImage="/project/worker7.jpeg"
        overlayOpacity={75}
      />
    </div>
  );
}