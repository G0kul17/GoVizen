import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'department-record-management-system',
    title: 'Department Record Management System',
    category: 'Custom Software & Data Governance',
    tagline: 'High-security organizational archive and automated document indexing platform',
    problem:
      'Fragmented physical files and unorganized digital storage caused multi-day document retrieval delays, security permission gaps, and high risk of compliance audit failures.',
    solution:
      'Architected a centralized, role-based records management platform with cryptographic access logs, automated metadata indexing, instant full-text search, and multi-tier department approval workflows.',
    impact: 'Reduced record retrieval time by 90% and eliminated duplicate document storage across department nodes.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'RBAC', 'Document Indexing'],
    features: [
      'Multi-tiered role-based access control (Admin, Approver, Viewer)',
      'Automated document metadata extraction and indexing',
      'Tamper-evident audit logging with exportable compliance reports',
      'Sub-second fuzzy search across 50,000+ indexed archival files',
      'Configurable document retention schedules and automated archival'
    ],
    metrics: [
      { label: 'Retrieval Speed', value: '< 250ms' },
      { label: 'Security Audit', value: '100% Pass' },
      { label: 'File Capacity', value: '50k+ Docs' },
      { label: 'Search Accuracy', value: '99.4%' }
    ],
    accentColor: '#00F5A0',
    visualType: 'records',
    clientType: 'Institutional / Enterprise',
    timeline: '4 Weeks',
    architectureDetails:
      'Built with a modular React frontend communicating over typed REST endpoints to a Node/PostgreSQL service layer with row-level security and automated S3-compatible encrypted asset storage.'
  },
  {
    id: 'nco-code-identifier',
    title: 'NCO Code Identifier',
    category: 'AI Solutions & Classification',
    tagline: 'Intelligent occupational taxonomy search and automated classification engine',
    problem:
      'Manual matching of unstructured job descriptions to standardized National Classification of Occupations (NCO) codes was tedious, inconsistent, and highly prone to human classification error.',
    solution:
      'Engineered an intelligent NLP-powered classification engine that semantically parses natural-language job roles, maps hierarchical skill trees, and accurately suggests canonical NCO codes with confidence scoring.',
    impact: 'Accelerated job profile classification from 15 minutes per entry to under 3 seconds with 94%+ matching precision.',
    tags: ['Python', 'NLP & Embeddings', 'FastAPI', 'React', 'Vector Search', 'Taxonomy Engine'],
    features: [
      'Semantic fuzzy matching against complex multi-level NCO occupational hierarchies',
      'Real-time confidence scoring and alternative taxonomy recommendations',
      'Batch CSV upload and automated multi-record classification pipeline',
      'Self-learning feedback loop for human-in-the-loop validation',
      'Exportable JSON and spreadsheet format integrations'
    ],
    metrics: [
      { label: 'Matching Precision', value: '94.8%' },
      { label: 'Latency per Query', value: '< 80ms' },
      { label: 'Time Saved', value: '96%' },
      { label: 'Hierarchical Depth', value: '5 Levels' }
    ],
    accentColor: '#38BDF8',
    visualType: 'classifier',
    clientType: 'Public Sector & HR Tech',
    timeline: '3 Weeks',
    architectureDetails:
      'Leverages lightweight high-performance vector embeddings, TF-IDF hybrid retrieval, and an ultra-fast FastAPI microservice cached through Redis and wrapped in a clean, high-contrast dashboard.'
  },
  {
    id: 'smart-placement-analytics',
    title: 'Smart Placement Analytics',
    category: 'Web Application & BI Dashboard',
    tagline: 'Real-time cohort skill-gap visualization and recruitment intelligence portal',
    problem:
      'Educators and placement officers lacked unified real-time visibility into student skill readiness, company hiring trends, and historical cohort performance metrics.',
    solution:
      'Designed and deployed an interactive business intelligence portal featuring predictive skill readiness indexing, automated recruiter shortlist generators, and cohort comparative analytics.',
    impact: 'Delivered instant actionable clarity to coordinators and improved candidate-to-role matching efficiency.',
    tags: ['Next.js / React', 'TypeScript', 'D3.js Charts', 'Tailwind CSS', 'SQL Analytics'],
    features: [
      'Dynamic cohort performance heatmaps and skill distribution bell curves',
      'Custom recruiter portal with multi-filter candidate shortlisting',
      'Automated placement drive scheduling and interview status trackers',
      'Predictive readiness scoring based on assessment results and project portfolios',
      'One-click institutional reporting with PDF generation'
    ],
    metrics: [
      { label: 'Data Points Tracked', value: '120k+' },
      { label: 'Shortlist Generation', value: 'Instant' },
      { label: 'Cohort Coverage', value: '100%' },
      { label: 'Coordinator Efficiency', value: '4.5x' }
    ],
    accentColor: '#F59E0B',
    visualType: 'analytics',
    clientType: 'Higher Education & Bootcamps',
    timeline: '5 Weeks',
    architectureDetails:
      'Engineered with high-density React charting components, server-side data aggregation pipelines, and reactive client state for snappy multi-variable slicing and filtering.'
  },
  {
    id: 'offline-coding-platform',
    title: 'Offline Coding Platform',
    category: 'Developer Tools & Systems',
    tagline: 'Zero-cloud local execution environment for uninterrupted classroom programming',
    problem:
      'Unstable internet connectivity in labs and remote institutions routinely halted computer science exams, student submissions, and automated code grading.',
    solution:
      'Constructed a robust, completely self-contained offline code runner and automated evaluation workbench that operates natively on local networks without requiring internet connectivity.',
    impact: 'Ensured 100% exam continuity and zero downtime across multiple computer labs regardless of network outages.',
    tags: ['Electron', 'WebAssembly', 'TypeScript', 'Sandboxed Runtime', 'Local SQLite'],
    features: [
      'Zero-dependency local sandbox supporting C, C++, Java, Python, and JavaScript',
      'Automated test case verification with memory and execution time limits',
      'Air-gapped local database synchronization for exam result exports',
      'Tamper-resistant offline submission packaging and cryptographic checksums',
      'Intuitive code editor with syntax highlighting and instant diagnostics'
    ],
    metrics: [
      { label: 'Uptime Reliability', value: '100%' },
      { label: 'Languages Supported', value: '5+ Core' },
      { label: 'Eval Execution Time', value: '< 150ms' },
      { label: 'Network Dependency', value: '0 KB' }
    ],
    accentColor: '#A855F7',
    visualType: 'code-sandbox',
    clientType: 'Institutions & Coding Academies',
    timeline: '6 Weeks',
    architectureDetails:
      'Combines an isolated subprocess worker pool with sandboxed resource quotas, local SQLite state management, and an air-gap verification protocol.'
  }
];
