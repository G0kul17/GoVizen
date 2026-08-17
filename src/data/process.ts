import { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Clarifying the real objective',
    description:
      'We dive deep into your target audience, core operational bottlenecks, and product goals. We strip away unnecessary complexity to define a sharp, focused MVP scope.',
    deliverables: ['Problem scope & requirement spec', 'Architecture blueprint', 'Clear milestones & timeline'],
    duration: 'Week 1'
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'Prototyping UX & visual systems',
    description:
      'We translate your requirements into responsive Figma wireframes, clean design systems, and clickable prototypes to test user flows before writing a single line of production code.',
    deliverables: ['Interactive design prototype', 'Component design tokens', 'User journey flow validation'],
    duration: 'Week 1–2'
  },
  {
    number: '03',
    title: 'Build',
    subtitle: 'High-velocity production engineering',
    description:
      'We build your product using modern TypeScript, modular React components, and secure backend integrations with continuous staging previews for transparent tracking.',
    deliverables: ['Clean, typed repository', 'Continuous staging preview', 'Automated testing & linting'],
    duration: 'Weeks 2–4'
  },
  {
    number: '04',
    title: 'Launch',
    subtitle: 'Deployment, verification & handover',
    description:
      'We deploy your product to secure cloud infrastructure, perform thorough performance audits and security verifications, and guide you through complete handover documentation.',
    deliverables: ['Cloud deployment & custom domain setup', 'System documentation & walkthrough', 'Post-launch monitoring'],
    duration: 'Final Phase'
  }
];
