import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'High-performance web applications & modern digital storefronts',
    description:
      'We build blazingly fast, responsive, and scalable web apps tailored to your business operations. Engineered with clean architecture, modern React, TypeScript, and rock-solid performance.',
    iconName: 'Globe',
    badge: 'Core Engine',
    capabilities: [
      'Full-Stack React & Next.js Apps',
      'High-conversion landing experiences',
      'API design & serverless architecture',
      'Optimized Core Web Vitals & SEO'
    ],
    deliverables: [
      'Production-ready codebase',
      'Fully responsive UI across all devices',
      'Automated deployment pipeline',
      'Performance audit report'
    ]
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    subtitle: 'Practical intelligent tools & custom LLM integrations',
    description:
      'No novelty gimmicks — we embed AI where it actually saves time and creates concrete business value. From custom NLP classification engines and semantic search to private LLM assistants.',
    iconName: 'Sparkles',
    badge: 'High ROI',
    capabilities: [
      'LLM & Gemini API workflows',
      'Custom vector search & RAG systems',
      'Automated document & data classification',
      'Semantic matching & recommendation engines'
    ],
    deliverables: [
      'Tuned AI pipeline & API integration',
      'Evaluation benchmarks & accuracy metrics',
      'Cost-optimized inference routing',
      'Admin control & feedback dashboards'
    ]
  },
  {
    id: 'automation',
    title: 'Automation Systems',
    subtitle: 'Eliminating repetitive friction & connective workflows',
    description:
      'We connect your disparate tools, databases, and services into seamless automated pipelines. Reduce human error, accelerate operational throughput, and let software do the tedious work.',
    iconName: 'Zap',
    badge: 'Efficiency',
    capabilities: [
      'Custom webhook & API integrations',
      'Data extraction & ETL pipelines',
      'Automated notifications & alerting bots',
      'Business process orchestration'
    ],
    deliverables: [
      'Self-healing automated pipelines',
      'Error logging & alert triggers',
      'Data transformation scripts',
      'Operational documentation'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    subtitle: 'Intuitive user journeys & razor-sharp design systems',
    description:
      'Great software is effortless to use. We design clean, high-contrast interfaces with thoughtful micro-interactions, mathematical typography, and friction-free user flows.',
    iconName: 'Layout',
    badge: 'User-First',
    capabilities: [
      'Product architecture & wireframing',
      'Figma design systems & token libraries',
      'Interactive prototyping & user validation',
      'Accessibility & WCAG compliance'
    ],
    deliverables: [
      'Complete interactive Figma designs',
      'Modular component style guide',
      'Responsive design variants',
      'Production-ready asset exports'
    ]
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    subtitle: 'Tailor-made internal tools & standalone platforms',
    description:
      'When off-the-shelf software falls short, we architect custom portals, management systems, and specialized tools built exactly around your specific operational workflows.',
    iconName: 'Code2',
    badge: 'Tailored',
    capabilities: [
      'Internal operations dashboards',
      'Role-based data management portals',
      'Offline-first and sandboxed workbenches',
      'Secure multi-tier client portals'
    ],
    deliverables: [
      'Bespoke software architecture',
      'Role & permission governance engine',
      'Data backup & recovery protocols',
      'Comprehensive developer handover'
    ]
  }
];
