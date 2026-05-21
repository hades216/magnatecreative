import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Layers, ShieldCheck, Zap, Globe, Cpu, Database } from 'lucide-react';

export const ArchitecturePage = () => {
  const principles = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Modular Ecosystems",
      description: "We build systems using decoupled architectures, allowing for independent scaling and maintenance of individual components without system-wide disruption."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Edge-First Performance",
      description: "Leveraging globally distributed edge networks to minimize latency and ensure instantaneous content delivery regardless of user location."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Hardened Security",
      description: "Implementing zero-trust protocols and end-to-end encryption across all data layers, ensuring enterprise-grade protection from the ground up."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Scalable Persistence",
      description: "Utilizing distributed database architectures that grow horizontally, providing high availability and consistent performance under extreme loads."
    }
  ];

  const stack = [
    { category: "Frontend", tools: ["React 18+", "TypeScript", "Tailwind CSS", "Motion", "Vite"] },
    { category: "Backend", tools: ["Node.js", "Express", "TypeScript", "GraphQL", "Python"] },
    { category: "Infrastructure", tools: ["AWS", "Google Cloud", "Kubernetes", "Terraform", "Docker"] },
    { category: "Database", tools: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"] }
  ];

  return (
    <div className="w-full pt-32 pb-24 px-6 md:px-10 min-h-screen z-10 relative bg-background">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center text-primary-fixed text-sm mb-12 hover:opacity-80 transition-opacity uppercase tracking-widest font-bold">
          <ChevronLeft className="w-4 h-4 mr-2" /> Back to Nexus
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="font-label-sm tracking-[0.4em] text-primary-fixed mb-4 inline-block uppercase text-[10px]">Technical Blueprint</span>
          <h1 className="font-headline-lg text-5xl md:text-8xl text-on-background leading-[0.9] tracking-tighter italic mb-10">
            System <span className="text-stroke">Architecture</span>
          </h1>
          <p className="text-on-surface-variant text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
            Magnate's digital infrastructures are engineered for extreme scalability, absolute security, and algorithmic precision. We don't just build websites; we architect ecosystems.
          </p>
        </motion.div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/30 border border-outline-variant mb-32">
          {principles.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background p-10 flex flex-col gap-6"
            >
              <div className="text-primary-fixed">{p.icon}</div>
              <h3 className="font-display-sm text-2xl text-on-background tracking-tight">{p.title}</h3>
              <p className="text-on-surface-variant font-light text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="mb-32">
          <h2 className="font-headline-lg text-3xl md:text-4xl text-on-background mb-16 italic tracking-tight">The <span className="text-primary-fixed">Engine</span> Room</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {stack.map((item) => (
              <div key={item.category}>
                <h4 className="font-label-sm text-[10px] tracking-[0.3em] text-on-surface-variant uppercase mb-8 border-b border-outline-variant pb-2">{item.category}</h4>
                <ul className="space-y-4">
                  {item.tools.map((tool) => (
                    <li key={tool} className="text-on-background font-light text-sm flex items-center gap-2">
                       <span className="w-1 h-1 bg-primary-fixed rounded-full"></span>
                       {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Reliability Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 md:p-20 border border-outline-variant bg-surface/30 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
            <Globe className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <h3 className="font-headline-lg text-4xl text-on-background mb-6">Built for the <br/>Global Scale</h3>
            <p className="text-on-surface-variant max-w-xl font-light mb-10">
              Our architecture handles millions of concurrent requests with sub-100ms latency across any geographical node. Through advanced load balancing and database sharding, we ensure that as your business grows, your infrastructure responds instantaneously.
            </p>
            <div className="flex flex-wrap gap-12">
              <div>
                <div className="text-4xl font-bold text-primary-fixed mb-2 tracking-tighter">99.99%</div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface">Uptime SLA</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2 tracking-tighter">&lt; 85ms</div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface">Avg. Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-on-background mb-2 tracking-tighter">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface">Data Sovereignty</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
