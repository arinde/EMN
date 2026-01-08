'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { fadeInUp } from '../../lib/animations';

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  bgGradient?: string;
}

export default function CTASection({
  title,
  description,
  primaryCTA = { text: 'Contact Us', href: '/contact' },
  secondaryCTA = { text: 'Request Quote', href: '/quote' },
  bgGradient = 'from-orange-500 to-orange-600',
}: CTASectionProps) {
  return (
    <section className={`py-20 bg-linear-to-r ${bgGradient}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCTA && (
              <Link href={primaryCTA.href}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-orange-500 hover:bg-gray-100"
                >
                  {primaryCTA.text}
                </Button>
              </Link>
            )}
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-blue-900 text-white hover:bg-blue-800"
                >
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}