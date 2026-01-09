'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, Clock, Shield, Star, Quote } from 'lucide-react';
import HeroSection from '@/src/components/sections/HeroSection';
import StatsSection from '@/src/components/sections/StatsSection';
import ServicesGrid from '@/src/components/sections/ServicesGrid';
import CTASection from '@/src/components/sections/CTASection';
import { Card, CardContent } from '@/src/components/ui/Card';
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
              Trusted by leading maritime companies for excellence in marine engineering
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
              What our clients say about our marine engineering services
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
      />
    </div>
  );
}