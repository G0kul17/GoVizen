export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  visualType: 'records' | 'classifier' | 'analytics' | 'code-sandbox';
  clientType: string;
  timeline: string;
  architectureDetails: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  capabilities: string[];
  deliverables: string[];
  badge: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  bio: string;
  skills: string[];
  github?: string;
  linkedin?: string;
}

export interface Differentiator {
  title: string;
  description: string;
  highlight: string;
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}
