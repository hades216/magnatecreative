export interface CaseStudy {
  id: string;
  serviceId: string;
  title: string;
  client: string;
  description: string;
  image: string;
  results: string[];
  fullStory: string;
  stats: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'global-scale-expansion',
    serviceId: 'website-solution',
    title: 'Global Scale Expansion',
    client: 'DataStream Logistics',
    description: 'We partnered with DataStream to implement our high-performance web framework, resulting in a massive increase in measurable conversions.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop',
    results: [
      '150% increase in measurable conversions',
      '30% reduction in overall overhead',
      'Global deployment across 4 continents',
      'Zero downtime during migration'
    ],
    fullStory: 'DataStream Logistics faced significant challenges with their legacy infrastructure as they attempted to expand into European and Asian markets. Their previous platform suffered from high latency and frequent timeouts during peak usage. Our team stepped in to re-architect their entire front-end using a headless approach with React and Vite, supported by a globally distributed CDN. We also implemented automated scaling protocols that adjust resources in real-time based on traffic spikes. The result was not just a faster site, but a more resilient business operation that now handles millions of impressions monthly without a single hiccup.',
    stats: [
      { label: 'Conversion Boost', value: '150%' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Load Time', value: '-65%' }
    ]
  },
  {
    id: 'identity-restructure',
    serviceId: 'branding-and-media-strategy',
    title: 'Identity Restructure',
    client: 'NexaCore Systems',
    description: 'Establishing a cohesive, memorable identity that resonates across all digital channels and physical touchpoints.',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop',
    results: [
      '85% Brand recognition increase',
      'Consistent messaging across 12 platforms',
      'Unified design system for 400+ employees',
      'Premium market positioning achieved'
    ],
    fullStory: 'NexaCore Systems was a leader in industrial automation but struggled with a fragmented brand identity that felt outdated. We conducted deep market research and stakeholder interviews to craft a new narrative architecture. The result was a "Industrial Elegance" aesthetic that bridged the gap between heavy engineering and modern software. We delivered a comprehensive brand-book, a modular UI kit for their internal tools, and a high-impact media campaign that successfully repositioned them for a Series B funding round.',
    stats: [
      { label: 'Market Reach', value: 'x3' },
      { label: 'Brand Equity', value: '+120%' },
      { label: 'Lead Gen', value: '+45%' }
    ]
  },
  {
    id: 'algorithmic-dominance',
    serviceId: 'digital-marketing',
    title: 'Algorithmic Dominance',
    client: 'FinTech Elite',
    description: 'Data-driven marketing to expand reach and improve ROI through advanced distribution channels.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
    results: [
      'ROI increased by 220%',
      'Acquisition cost decreased by 40%',
      'Top 1% ranking for 50+ keywords',
      'Daily active user count doubled'
    ],
    fullStory: 'FinTech Elite was spending significantly on customer acquisition with diminishing returns. We implemented a custom attribution model and automated bidding strategies that leveraged machine learning to identify high-value segments. By shifting the focus from broad reach to algorithmic precision, we were able to slash waste and reinvest in high-performing channels. Our SEO strategy also secured primary rankings for critical industry terms, creating a sustainable organic moat that continues to grow monthly.',
    stats: [
      { label: 'ROI Growth', value: '220%' },
      { label: 'CPA', value: '-40%' },
      { label: 'Organic Traffic', value: '+310%' }
    ]
  }
];
