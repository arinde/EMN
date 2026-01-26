'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileCheck, AlertCircle, HardHat, Gavel, } from 'lucide-react';
import { Card, CardContent } from '@/src/components/ui/Card';
import { fadeInUp, staggerContainer } from '../../src/lib/animations';

export default function TermsOfService() {
  const currentYear = new Date().getFullYear();

  const terms = [
    {
      icon: HardHat,
      title: "Service Provision",
      content: "All engineering and fabrication services provided by EMN Mechanical are subject to specific project contracts. These terms govern the general use of our digital platforms and initial consultations."
    },
    {
      icon: HardHat,
      title: "Safety & Compliance",
      content: "Users and clients must adhere to all maritime safety protocols outlined during on-site services. EMN Mechanical operates under strict ISO standards and local maritime regulations."
    },
    {
      icon: FileCheck,
      title: "Intellectual Property",
      content: "All technical drawings, engineering designs, and website content are the exclusive property of EMN Mechanical Fabrication Services Ltd unless otherwise stated in a project contract."
    },
    {
      icon: AlertCircle,
      title: "Limitation of Liability",
      content: "While we strive for engineering perfection, EMN Mechanical is not liable for damages arising from improper use of fabricated equipment or unauthorized modifications by third parties."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/hero/fabrication.jpg" alt="Engineering" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <Scale className="h-16 w-16 text-orange-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Please read these terms carefully before utilizing our services or engineering platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {terms.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <item.icon className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Legal Text Block */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="prose prose-blue max-w-none border-t border-gray-100 pt-16"
          >
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700">
                  By accessing the EMN Mechanical Fabrication Services Ltd website or engaging in our marine engineering services, 
                  you agree to be bound by these terms, all applicable laws, and regulations. If you do not agree, 
                  you are prohibited from using this site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Use License</h2>
                <p className="text-gray-700">
                  Permission is granted to temporarily download one copy of the materials (information or software) on 
                  EMN Mechanical's website for personal, non-commercial transitory viewing only. This is the grant 
                  of a license, not a transfer of title.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Governing Law</h2>
                <p className="text-gray-700">
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction 
                  in which EMN Mechanical operates, and you irrevocably submit to the exclusive jurisdiction of the 
                  courts in that State or location.
                </p>
              </section>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <Gavel className="h-5 w-5 text-orange-500" /> Legal Disclaimer
                </h3>
                <p className="text-sm text-gray-600 italic">
                  The materials on this website are provided on an 'as is' basis. EMN Mechanical Fabrication Services Ltd 
                  makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                  including, without limitation, implied warranties or conditions of merchantability.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mt-16 text-center text-gray-400 text-sm">
            © {currentYear} EMN Mechanical Fabrication Services Ltd. All Rights Reserved.
          </div>
        </div>
      </section>
    </div>
  );
}