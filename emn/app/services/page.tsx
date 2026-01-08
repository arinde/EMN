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
} from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';
import { fadeInUp, staggerContainer } from '@/lib/animations';

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
  return (
    <div className="pt-20">
      {/* Hero */}
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive Marine Engineering Solutions"
        description="Expert services for vessels, offshore platforms, and maritime operations"
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      />
    </div>
  );
}