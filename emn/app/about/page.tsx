'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, CheckCircle } from 'lucide-react';
import HeroSection from '@/src/components/sections/HeroSection';
import CTASection from '@/src/components/sections/CTASection';
import { Card, CardContent } from '@/src/components/ui/Card';
import { COMPANY_INFO, CORE_VALUES } from '@/src/lib/constants';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/src/lib/animations';

export default function AboutPage() {
  const team = [
    {
      name: 'Engr Kunle Mustapha',
      role: 'Chief Executive Officer',
      bio: '25+ years in marine operations and engineering leadership',
    },
    {
      name: 'Sarah Martinez',
      role: 'Head of Engineering',
      bio: 'Expert in marine fabrication and structural design',
    },
    {
      name: 'Michael Chen',
      role: 'Operations Director',
      bio: 'Logistics and project management specialist',
    },
    {
      name: 'Dr. Emily Roberts',
      role: 'Safety & Compliance Officer',
      bio: 'Maritime safety certification and compliance expert',
    },
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'ISO 14001:2015 Environmental Management',
    'ISO 45001:2018 Occupational Health & Safety',
    'IMO Compliance Certification',
    'SOLAS Standards Compliance',
    'Classification Society Approvals',
    'Welding Certification (AWS/ASME)',
    'Maritime Labour Convention Compliance',
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <HeroSection
        title="About Us"
        subtitle="Leading Marine Engineering Solutions Since 2014"
        description="Delivering excellence in marine & industrial engineering and fabrication services"
      />

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                {COMPANY_INFO.name} was founded in {COMPANY_INFO.founded} with a vision to provide world-class engineering and fabrication services to the maritime, oil & gas, food & beverages and chemical industries.  Including offshore fabrication and maritime support. With over {new Date().getFullYear() - COMPANY_INFO.founded} years of experience, we've grown from working with Niger Dock Plc Fze as a fabricating firm sub-contractor to a comprehensive engineering, marine construction and installation buinsess that has global competitive edge serving clients across West Africa and beyond.
              </p>
              <p>
                Our journey began serving local shipyards and has expanded to supporting major offshore oil & gas operations, international shipping companies, and chemical industries. We've built our reputation on delivering quality workmanship, maintaining the highest safety standards, and providing responsive service when our clients need us most.
              </p>
              <p>
                 Today, we're proud to be the trusted partner for vessel maintenance, marine construction, and specialized maritime services across Nigeria and beyond. Starting operations in 2014 as a fabricating firm at Niger Dock Plc Fze, we have evolved into a full-service engineering, marine construction, and installation business with a global competitive edge.
              </p>
              <p>

As a trusted sub-contractor with Niger Dock Plc Fze and major contractor with Reliance Chemical Products Ltd and Insignal, we have demonstrated our commitment to excellence through systemic and disciplined management of operations. We hold ourselves to the highest ethical standards and behave in ways that earn the trust of our clients across the oil and gas, chemical, and maritime sectors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <Card hover={false} className="bg-blue-900 text-white h-full">
                <CardContent className="pt-8">
                  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                  <p className="text-lg text-gray-200">
                   To be recognized by our customers as providing the world's best fabrication and marine service while valuing our people, providing an injury-free workplace, respecting the environment and adhering to the highest standards of integrity and financial discipline.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <Card hover={false} className="bg-orange-500 text-white h-full">
                <CardContent className="pt-8">
                  <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                  <p className="text-lg">
                    To be a company of motivated people dedicated to achieving operational excellence in an accident-free environment and to be our client's best partner in providing the most suitable industrial solutions by diligently retaining and improving on our capabilities to deliver customized and efficient solutions to solve our clients' challenges
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {CORE_VALUES.map((value, i) => {
              const icons: any = { 'Safety First': Shield, 'Quality Excellence': Award, 'Expert Team': Users, 'Reliability': CheckCircle };
              const Icon = icons[value.title];
              
              return (
                <motion.div key={i} variants={fadeInUp}>
                  <Card hover={false} className="text-center h-full bg-gray-50">
                    <CardContent className="pt-6">
                      <Icon className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts leading our marine engineering services
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card hover className="text-center h-full">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 bg-linear-to-br from-blue-900 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-orange-500 font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
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
              Certifications & Accreditations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Maintaining the highest industry standards and compliance
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <Award className="h-12 w-12 text-orange-500 mx-auto mb-3" />
                <p className="text-white font-semibold">{cert}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Join Our Team of Experts"
        description="Explore career opportunities in marine engineering excellence"
        primaryCTA={{ text: 'View Careers', href: '/contact' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
      />
    </div>
  );
}