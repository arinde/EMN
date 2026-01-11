'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/src/components/ui/Button';
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
  backgroundImage?: string; // New prop for background image
  overlayOpacity?: number; // Control overlay darkness (0-100)
}

export default function CTASection({
  title,
  description,
  primaryCTA = { text: 'Contact Us', href: '/contact' },
  secondaryCTA = { text: 'Request Quote', href: '/quote' },
  bgGradient = 'from-gray-500 to-gray-600',
  backgroundImage,
  overlayOpacity = 70, // Default 70% opacity
}: CTASectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image or Gradient */}
      {backgroundImage ? (
        <>
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt="CTA Background"
              fill
              className="object-cover"
              quality={90}
            />
          </div>
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-linear-to-r from-orange-600 to-orange-700"
            style={{ opacity: overlayOpacity / 100 }}
          />
        </>
      ) : (
        // Fallback gradient if no image
        <div className={`absolute inset-0 bg-linear-to-r ${bgGradient}`} />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            {title}
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCTA && (
              <Link href={primaryCTA.href}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-orange-500 hover:bg-gray-100 shadow-xl"
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
                  className="bg-blue-900 text-white hover:bg-blue-800 shadow-xl"
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