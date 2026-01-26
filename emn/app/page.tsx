'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, Clock, Shield, Star, Quote, ChevronRight } from 'lucide-react';
import HeroSection from '@/src/components/sections/HeroSection';
import StatsSection from '@/src/components/sections/StatsSection';
import ServicesGrid from '@/src/components/sections/ServicesGrid';
import CTASection from '@/src/components/sections/CTASection';
import { Card, CardContent } from '@/src/components/ui/Card';
import Button from '@/src/components/ui/Button';
import { testimonials } from '../src/data/testimonials';
import { fadeInUp, staggerContainer } from '../src/lib/animations';

export default function HomePage() {
  const whyChooseUs = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'ISO certified with highest industry standards',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Reliable project completion and deadlines',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Comprehensive safety protocols and compliance',
    },
    {
      icon: Star,
      title: '24/7 Support',
      description: 'Emergency response for urgent marine needs',
    },
  ];

  // Hero background carousel images
  const heroImages = [
    '/hero/fabrication.jpg',
    '/hero/welding-1.png',
    '/hero/shpMain.jpg',
    '/hero/chemical.jpg',
    '/hero/offshore.jpg',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Background Carousel */}
      <HeroSection
        title="EMN MECHANICAL FABRICATION SERVICES LTD"
        subtitle="Safety & Quality"
        description="Excellence in Marine Fabrication & Construction. Delivering world-class engineering solutions for oil & gas, chemical, and maritime industries with proven operational excellence since 2014."
        primaryCTA={{ text: 'Get a Quote', href: '/quote' }}
        secondaryCTA={{ text: 'Our Services', href: '/services' }}
        showScrollIndicator
        fullHeight
        backgroundImages={heroImages}
        autoPlayInterval={5000}
      />

      {/* Stats Section */}
      <StatsSection />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Featured Projects Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our excellence in marine fabrication and engineering across diverse projects
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Offshore Platform Maintenance',
                category: 'Oil & Gas',
                image: '/project/project6.jpeg',
                description: 'Complete maintenance and structural reinforcement of offshore platform',
              },
              {
                title: 'Chemical Tanker Retrofit',
                category: 'Marine Services',
                image: '/project/project10.jpeg',
                description: 'Full vessel upgrade including valve systems and tank modifications',
              },
              {
                title: 'Ship Hull Repair',
                category: 'Shipbuilding',
                image: '/project/overhead4.jpeg',
                description: 'Emergency hull repair and restoration for cargo vessel',
              },
              {
                title: 'Port Equipment Fabrication',
                category: 'Port Operations',
                image: '/project/project9.jpeg',
                description: 'Custom loading equipment for port authority expansion',
              },
              {
                title: 'Tank Calibration Project',
                category: 'Industrial',
                image: '/project/project3.jpeg',
                description: 'Complete gas freeing and calibration for storage terminal',
              },
              {
                title: 'Naval Vessel Maintenance',
                category: 'Naval',
                image: '/project/piping4.jpeg',
                description: 'Comprehensive maintenance and protective coating application',
              },
            ].map((project, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Link href="/projects">
                  <Card className="h-full overflow-hidden group">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-orange-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          View Project Details →
                        </span>
                      </div>
                    </div>

                    <CardContent className="pt-6">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="flex items-center text-orange-500 font-semibold text-sm">
                        View Details <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" size="lg" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading maritime and chemical companies for excellence in engineering
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card hover={false} className="text-center h-full">
                  <CardContent className="pt-6">
                    <item.icon className="h-16 w-16 text-orange-500 mx-auto mb-4" />
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

      {/* Testimonials */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What our clients say about our engineering services
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.slice(0, 3).map((testimonial, i) => (
              <motion.div key={testimonial.id} variants={fadeInUp}>
                <Card hover={false} className="h-full">
                  <CardContent className="pt-6">
                    <Quote className="h-8 w-8 text-orange-500 mb-4" />
                    <p className="text-gray-700 mb-4">{testimonial.text}</p>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-orange-500 text-orange-500"
                        />
                      ))}
                    </div>
                    <p className="font-bold text-blue-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                    <p className="text-xs text-gray-500">{testimonial.industry}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="text-orange-500 hover:text-orange-400 font-semibold text-lg"
            >
              View All Testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Get in touch with our marine engineering experts for a consultation"
        backgroundImage="/hero/shpMain.jpg"
        overlayOpacity={75}
      />
    </div>
  );
}