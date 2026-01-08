'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Wrench,
  Ship,
  Settings,
  Package,
  Users,
  Droplet,
  Hammer,
  Calculator,
  Building,
  HardHat,
  ChevronRight,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { fadeInUp, staggerContainer } from '../../lib/animations';

const iconMap: { [key: string]: any } = {
  Wrench,
  Ship,
  Settings,
  Package,
  Users,
  Droplet,
  Hammer,
  Calculator,
  Building,
  HardHat,
};

interface Service {
  icon: string;
  name: string;
  description: string;
  href?: string;
}

interface ServicesGridProps {
  services?: Service[];
  columns?: 2 | 3 | 4;
}

const defaultServices: Service[] = [
  { icon: 'Wrench', name: 'Welding & Fabrication', description: 'Expert structural and pipe welding services' },
  { icon: 'Ship', name: 'Ship Hull Maintenance', description: 'Comprehensive hull inspection and repair' },
  { icon: 'Settings', name: 'Marine Valve Services', description: 'Installation, testing, and certification' },
  { icon: 'Package', name: 'Marine Logistics', description: 'Supply chain and project management' },
  { icon: 'Users', name: 'Certified Labour Supply', description: 'Skilled marine technicians and welders' },
  { icon: 'Droplet', name: 'Sand Blasting & Painting', description: 'Surface preparation and coatings' },
  { icon: 'Hammer', name: 'Equipment Rentals', description: 'Specialized marine tools and equipment' },
  { icon: 'Calculator', name: 'Gas Freeing & Calibration', description: 'Tank cleaning and volume certification' },
  { icon: 'Building', name: 'Sulphonation Plant', description: 'Chemical processing services' },
  { icon: 'HardHat', name: 'Marine Construction', description: 'Design and engineering solutions' },
];

export default function ServicesGrid({ services = defaultServices, columns = 3 }: ServicesGridProps) {
  const gridCols = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive marine engineering solutions for vessels, offshore platforms, and maritime operations
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={`grid grid-cols-1 md:grid-cols-2 ${gridCols[columns]} gap-8`}
        >
          {services.map((service, i) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div key={i} variants={fadeInUp}>
                <Link href={service.href || '/services'}>
                  <Card className="h-full">
                    <CardHeader>
                      {IconComponent && <IconComponent className="h-12 w-12 text-orange-500 mb-4" />}
                      <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{service.description}</CardDescription>
                      <div className="flex items-center text-orange-500 font-semibold">
                        Learn More <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}