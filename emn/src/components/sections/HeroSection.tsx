'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronDown, Anchor } from 'lucide-react';
import Button from '@/src/components/ui/Button';
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
  backgroundImages?: string[];
  autoPlayInterval?: number;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  showScrollIndicator = false,
  fullHeight = false,
  backgroundImages = [],
  autoPlayInterval = 5000,
}: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasImages = backgroundImages.length > 0;

  useEffect(() => {
    if (!hasImages || backgroundImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [hasImages, backgroundImages.length, autoPlayInterval]);

  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${
        fullHeight ? 'h-screen' : 'h-96 md:h-125'
      }`}
    >
      {/* Background Image Carousel */}
      {hasImages ? (
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={backgroundImages[currentImageIndex]}
                alt={`EMN Fabrication Work ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center' }}
              />
            </motion.div>
          </AnimatePresence>
          {/* Dark Overlay with Blue Tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/65 to-blue-900/70" />
        </div>
      ) : (
        // Fallback gradient background if no images
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900" />
          <div className="absolute inset-0 bg-black opacity-40" />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDM2YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iIzFmMmQzZCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-10" />
          </div>
        </>
      )}

      {/* Carousel Indicators (Dots) */}
      {hasImages && backgroundImages.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-orange-500 w-8 h-2 rounded-full'
                  : 'bg-white/50 hover:bg-white/75 w-2 h-2 rounded-full'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

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
              <Anchor className="h-16 w-16 text-orange-500 mx-auto mb-4 drop-shadow-lg" />
            </motion.div>
          )}
          
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            {title}
            {subtitle && (
              <span className="block text-orange-500 mt-2 text-xl md:text-2xl lg:text-3xl">{subtitle}</span>
            )}
          </h1>
          
          {description && (
            <p className="text-base md:text-lg lg:text-xl text-gray-100 mb-8 max-w-4xl mx-auto drop-shadow-lg">
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
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20"
        >
          <ChevronDown className="h-8 w-8 text-white opacity-50 drop-shadow-lg" />
        </motion.div>
      )}
    </section>
  );
}