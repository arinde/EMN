export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  capabilities: string[];
  industries: string[];
  slug: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  services: string[];
  images: string[];
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  industry: string;
  text: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  challenges: string[];
  solutions: string[];
  relevantServices: string[];
  slug: string;
}

export interface Capability {
  id: string;
  category: string;
  items: string[];
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
}

export interface QuoteFormData extends FormData {
  projectType: string;
  materials?: string;
  quantity?: string;
  timeline?: string;
  budget?: string;
  files?: File[];
}