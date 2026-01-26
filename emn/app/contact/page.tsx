'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';
import HeroSection from '@/src/components/sections/HeroSection';
import { Card, CardContent } from '@/src/components/ui/Card';
import Button from '@/src/components/ui/Button';
import { COMPANY_INFO } from '@/src/lib/constants';
import { validateEmail, validatePhone } from '@/src/lib/utils';
import { fadeInUp, slideInLeft, slideInRight } from '@/src/lib/animations';
import { services } from '@/src/data/services';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Load saved draft from localStorage on mount
  useEffect(() => {
    const savedDraft = localStorage.getItem('contact_form_draft');
    if (savedDraft) {
      try {
        setFormData(JSON.parse(savedDraft));
      } catch (e) {
        console.error('Error loading draft:', e);
      }
    }
  }, []);

  // Save draft to localStorage whenever form data changes
  useEffect(() => {
    if (formData.name || formData.email || formData.phone || formData.message) {
      localStorage.setItem('contact_form_draft', JSON.stringify(formData));
    }
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Method 1: Using mailto (opens email client)
      /*
      const subject = `Contact Form: ${formData.service || 'General Inquiry'}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'N/A'}
Service: ${formData.service || 'N/A'}

Message:
${formData.message}
      `.trim();

      const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoLink;
*/
      // Alternative Method 2: Using FormSubmit.co (uncomment to use)
      
      const response = await fetch('https://formsubmit.co/ajax/arindevictor8@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`,
          _template: 'table',
        })
      });

      if (!response.ok) throw new Error('Failed to send');
      

      // Alternative Method 3: Using Web3Forms (uncomment to use)
      /*
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          subject: `New Contact from ${formData.name}`,
        })
      });

      const result = await response.json();
      if (!result.success) throw new Error('Failed to send');
      */

      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Clear localStorage draft
      localStorage.removeItem('contact_form_draft');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const clearDraft = () => {
    if (confirm('Are you sure you want to clear the saved draft?')) {
      localStorage.removeItem('contact_form_draft');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: COMPANY_INFO.phone,
      link: `tel:${COMPANY_INFO.phone}`,
    },
    {
      icon: Phone,
      title: '24/7 Emergency',
      content: COMPANY_INFO.emergency,
      link: `tel:${COMPANY_INFO.emergency}`,
      highlight: true,
    },
    {
      icon: Mail,
      title: 'Email',
      content: COMPANY_INFO.email,
      link: `mailto:${COMPANY_INFO.email}`,
    },
    {
      icon: MapPin,
      title: 'Head Office',
      content: COMPANY_INFO.address,
      link: '#',
    },
    {
      icon: MapPin,
      title: 'Branch Address',
      content: COMPANY_INFO.address2,
      link: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: COMPANY_INFO.hours,
      link: '#',
    },
  ];

  const hasDraft = formData.name || formData.email || formData.phone || formData.message;

  return (
    <div className="pt-20">
      {/* Hero */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in Touch with Our Team"
        description="We're here to help with your marine engineering needs"
      />

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Contact us for inquiries, quotes, or emergency support. We're available 24/7 for urgent marine engineering needs.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <Card
                    key={i}
                    hover={false}
                    className={info.highlight ? 'border-2 border-orange-500' : ''}
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <info.icon
                          className={`h-6 w-6 ${
                            info.highlight ? 'text-orange-500' : 'text-blue-900'
                          } shrink-0`}
                        />
                        <div>
                          <p className="font-semibold text-blue-900 mb-1">
                            {info.title}
                          </p>
                          {info.link !== '#' ? (
                            <a
                              href={info.link}
                              className="text-gray-600 hover:text-orange-500 transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-gray-600 text-sm">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInRight}
              className="lg:col-span-2"
            >
              <Card hover={false}>
                <CardContent className="pt-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-blue-900">
                      Send Us a Message
                    </h2>
                    {hasDraft && (
                      <button
                        onClick={clearDraft}
                        className="text-sm text-gray-500 hover:text-red-600 transition-colors"
                      >
                        Clear Draft
                      </button>
                    )}
                  </div>

                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-green-900">
                          Message prepared successfully!
                        </p>
                        <p className="text-sm text-green-700">
                          Your email client should open. If not, please email us directly at {COMPANY_INFO.email}
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-900">
                          Something went wrong
                        </p>
                        <p className="text-sm text-red-700">
                          Please email us directly at {COMPANY_INFO.email}
                        </p>
                      </div>
                    </div>
                  )}

                  {hasDraft && (
                    <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-700">
                        💾 Draft saved automatically
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-orange-500'
                        } focus:ring-2 focus:outline-none transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-gray-300 focus:ring-orange-500'
                          } focus:ring-2 focus:outline-none transition-all`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.phone
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-gray-300 focus:ring-orange-500'
                          } focus:ring-2 focus:outline-none transition-all`}
                          placeholder="+234 123 456 7890"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Company & Service */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all"
                        >
                          <option value="">Select a service</option>
                          {services.map(service => (
                            <option key={service.id} value={service.name}>
                              {service.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-orange-500'
                        } focus:ring-2 focus:outline-none transition-all resize-none`}
                        placeholder="Tell us about your project or inquiry..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      loading={isSubmitting}
                      icon={<Send className="h-5 w-5" />}
                    >
                      {isSubmitting ? 'Preparing...' : 'Send Message'}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              Visit Our Facility
            </h2>
            <p className="text-xl text-gray-600">
              Located in Lagos, Nigeria - Serving West Africa and beyond
            </p>
          </motion.div>

          <Card hover={false} className="overflow-hidden">
            <div className="h-96 bg-linear-to-br from-blue-200 to-blue-300 flex items-center justify-center">
              <MapPin className="h-24 w-24 text-blue-900 opacity-30" />
              <p className="text-blue-900 font-semibold ml-4">
                Interactive Map Placeholder
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}