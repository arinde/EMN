'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronDown, Anchor } from 'lucide-react';
import Button from '@/components/ui/Button';
import { fadeInUp } from '../../lib/animations';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  showScrollIndicator?: boolean;
  fullHeight?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  showScrollIndicator = false,
  fullHeight = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative flex items-center justify-center bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden ${
        fullHeight ? 'h-screen' : 'h-96 md:h-125'
      }`}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDM2YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iIzFmMmQzZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          {fullHeight && (
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6"
            >
              <Anchor className="h-16 w-16 text-orange-500 mx-auto mb-4" />
            </motion.div>
          )}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {title}
            {subtitle && (
              <span className="block text-orange-500 mt-2">{subtitle}</span>
            )}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              {description}
            </p>
          )}
          
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCTA && (
                <Link href={primaryCTA.href}>
                  <Button
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight className="h-5 w-5" />}
                  >
                    {primaryCTA.text}
                  </Button>
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href}>
                  <Button
                    variant="outline"
                    size="lg"
                    icon={<ChevronRight className="h-5 w-5" />}
                    className="bg-white text-blue-900 border-white hover:bg-gray-100"
                  >
                    {secondaryCTA.text}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-white opacity-50" />
        </motion.div>
      )}
    </section>
  );
}