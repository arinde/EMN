'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, FileText, Bell, Mail } from 'lucide-react';
import HeroSection from '@/src/components/sections/HeroSection';
import { Card, CardContent } from '@/src/components/ui/Card';
import { fadeInUp, staggerContainer } from '../../src/lib/animations';

export default function PrivacyPolicy() {
  const lastUpdated = "January 26, 2026";

  const policySections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you request a quote, contact our engineering team, or sign up for industry updates. This may include your name, company email, phone number, and project specifications."
    },
    {
      icon: ShieldCheck,
      title: "How We Use Your Data",
      content: "Your data is used to provide marine fabrication services, process project quotes, ensure safety compliance, and improve our engineering solutions. We do not sell your personal information to third parties."
    },
    {
      icon: Lock,
      title: "Data Security",
      content: "We implement rigorous technical and organizational security measures to protect your data. Just as we prioritize safety on-site, we prioritize the security of your digital information against unauthorized access."
    },
    {
      icon: Bell,
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information. If you wish to exercise these rights regarding your project data, please contact our administrative office."
    }
  ];

  return (
    <div className="pt-20">
      {/* Mini Hero */}
      <section className="bg-blue-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/hero/offshore.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-orange-400 font-semibold uppercase tracking-widest">
              EMN Mechanical Fabrication Services Ltd
            </p>
            <p className="text-gray-300 mt-4 text-sm">Last Updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Summary Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          >
            {policySections.map((section, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <Card className="h-full border-l-4 border-l-orange-500">
                  <CardContent className="pt-6">
                    <section.icon className="h-8 w-8 text-blue-900 mb-4" />
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{section.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{section.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Text Area */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 prose prose-blue max-w-none"
          >
            <div className="flex items-center gap-2 mb-6">
              <FileText className="text-orange-500 h-6 w-6" />
              <h2 className="text-2xl font-bold text-blue-900 m-0">Detailed Provisions</h2>
            </div>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h4 className="text-lg font-bold text-blue-900 mb-2">1. Cookies and Tracking</h4>
                <p>
                  Our website uses essential cookies to ensure functionality and analytical cookies to help us 
                  understand how visitors interact with our service pages. You can manage cookie preferences 
                  through your browser settings.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-bold text-blue-900 mb-2">2. Industry Compliance</h4>
                <p>
                  As an ISO-certified organization, our data handling procedures align with international standards 
                  for quality and operational integrity. We retain project-related data only as long as necessary 
                  for legal and operational requirements.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-bold text-blue-900 mb-2">3. Third-Party Links</h4>
                <p>
                  Our site may contain links to partner organizations or industry regulators. We are not 
                  responsible for the privacy practices of external sites.
                </p>
              </section>

              <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 flex flex-col md:flex-row md:items-center justify-between gap-4 mt-12">
                <div>
                  <h4 className="font-bold text-blue-900 flex items-center gap-2">
                    <Mail className="h-5 w-5" /> Privacy Inquiries
                  </h4>
                  <p className="text-sm text-blue-800">Have questions about your data safety?</p>
                </div>
                <a href="mailto:kunlemustapha27@yahoo.com" className="inline-block px-6 py-2 bg-blue-900 text-white rounded-lg font-semibold hover:bg-orange-500 transition-colors">
                  Contact Privacy Officer
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}