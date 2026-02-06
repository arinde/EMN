'use client';

import { motion } from 'framer-motion';
import {
  Wrench,
  Settings,
  Box,
  Award,
  Cpu,
  Shield,
  CheckCircle,
} from 'lucide-react';
import HeroSection from '@/src/components/sections/HeroSection';
import CTASection from '@/src/components/sections/CTASection';
import { Card, CardContent } from '@/src/components/ui/Card';
import { fadeInUp, staggerContainer } from '@/src/lib/animations';

export default function CapabilitiesPage() {
  const capabilities = [
    {
      category: 'Equipment & Machinery',
      icon: Wrench,
      items: [
        'Advanced TIG/MIG/Arc Welding Equipment',
        'CNC Plasma Cutting Machines',
        'Hydraulic Press Brake Systems',
        'Portable Machining Equipment',
        'Valve Testing & Calibration Systems',
        'Gas Detection Equipment',
        'Ultrasonic Testing Equipment',
        'Sand Blasting & Coating Systems',
        'Mobile Cranes & Lifting Gear',
        'Portable Welding Generators',
      ],
    },
    {
      category: 'Materials & Specifications',
      icon: Box,
      items: [
        'Marine-Grade Steel (Various Grades)',
        'Aluminum Alloys (5000 & 6000 Series)',
        'Stainless Steel (304, 316, Duplex)',
        'Specialized Nickel Alloys',
        'High-Strength Low-Alloy Steel',
        'Anti-Corrosion Coatings',
        'Marine Paint Systems',
        'Thermal Spray Coatings',
        'Gaskets & Sealing Materials',
        'High-Performance Adhesives',
      ],
    },
    {
      category: 'Certifications & Standards',
      icon: Award,
      items: [
        'ISO 9001:2015 Quality Management',
        'ISO 14001:2015 Environmental',
        'ISO 45001:2018 Health & Safety',
        'IMO SOLAS Compliance',
        'ASME Boiler & Pressure Vessel Code',
        'AWS Welding Certifications',
        'DNV GL Classification Approval',
        'Lloyd\'s Register Certification',
        'Bureau Veritas Approval',
        'American Bureau of Shipping (ABS)',
      ],
    },
    {
      category: 'Software & Technology',
      icon: Cpu,
      items: [
        'AutoCAD 2D/3D Design',
        'SolidWorks Marine Design',
        'Inventor Professional',
        'NavisWorks Project Review',
        'MS Project Management Software',
        'SAP ERP System',
        'Digital Inspection Systems',
        '3D Scanning & Modeling',
        'FEA Analysis Software',
        'Project Tracking Platforms',
      ],
    },
    {
      category: 'Quality Control',
      icon: Settings,
      items: [
        'Non-Destructive Testing (NDT)',
        'Radiographic Testing (RT)',
        'Ultrasonic Testing (UT)',
        'Magnetic Particle Testing (MT)',
        'Dye Penetrant Testing (PT)',
        'Visual Inspection Protocols',
        'Dimensional Verification',
        'Material Traceability Systems',
        'Pressure Testing Facilities',
        'Third-Party Inspection Support',
      ],
    },
    {
      category: 'Safety & Compliance',
      icon: Shield,
      items: [
        'OSHA Safety Standards',
        'ISM Code Compliance',
        'ISPS Security Protocols',
        'Permit to Work Systems',
        'Risk Assessment Procedures',
        'Emergency Response Plans',
        'Confined Space Entry Protocols',
        'Hot Work Permits',
        'Environmental Protection Plans',
        'Incident Reporting Systems',
      ],
    },
  ];

  const technicalSpecs = [
    { spec: 'Maximum Welding Thickness', value: '100mm' },
    { spec: 'Cutting Capacity', value: '150mm Steel' },
    { spec: 'Crane Lifting Capacity', value: '50 Tons' },
    { spec: 'Pressure Testing Range', value: 'Up to 400 bar' },
    { spec: 'Temperature Rating', value: '-50°C to +400°C' },
    { spec: 'Working Area Coverage', value: 'West Africa Region' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <HeroSection
        title="Our Capabilities"
        subtitle="State-of-the-Art Equipment & Expertise"
        description="Advanced technology and certified processes for superior marine engineering"
      />

      {/* Capabilities Overview */}
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
              Comprehensive Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading equipment, materials, and certifications
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {capabilities.map((capability, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="pt-8">
                    <capability.icon className="h-12 w-12 text-orange-500 mb-4" />
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      {capability.category}
                    </h3>
                    <ul className="space-y-2">
                      {capability.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600">
              Our operational capabilities and technical limits
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {technicalSpecs.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card hover={false}>
                  <CardContent className="pt-6 text-center">
                    <p className="text-gray-600 mb-2">{item.spec}</p>
                    <p className="text-3xl font-bold text-orange-500">
                      {item.value}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Quality Assurance Process
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our comprehensive quality control ensures every project meets or exceeds industry standards and client expectations.
              </p>
              <ul className="space-y-4">
                {[
                  'Pre-project material verification and testing',
                  'In-process inspection at critical stages',
                  'Non-destructive testing (NDT) procedures',
                  'Final inspection and certification',
                  'Complete documentation and traceability',
                  'Third-party verification when required',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-blue-900 to-blue-700 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Capacity Highlights</h3>
              <div className="space-y-6">
                {[
                  { label: 'Welding Production', value: '5000+ hrs/month' },
                  { label: 'Fabrication Capacity', value: '500 tons/month' },
                  { label: 'Project Teams', value: '10 concurrent projects' },
                  { label: 'Response Time', value: '< 24 hours emergency' },
                  { label: 'Quality Rate', value: '99.5% first-time pass' },
                ].map((item, i) => (
                  <div key={i} className="border-b border-white/20 pb-4">
                    <p className="text-gray-300 text-sm mb-1">{item.label}</p>
                    <p className="text-2xl font-bold text-orange-500">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Display */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Recognized Excellence
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Certified by leading international standards organizations
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['ISO 9001', 'ISO 14001', 'ISO 45001', 'IMO SOLAS', 'AWS', 'DNV GL', 'Lloyd\'s', 'ABS'].map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center"
                >
                  <div className="text-center">
                    <Award className="h-12 w-12 text-orange-500 mx-auto mb-2" />
                    <p className="text-white font-bold">{cert}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Specific Capabilities?"
        description="Contact us to discuss your technical requirements and capabilities needs"
      />
    </div>
  );
}