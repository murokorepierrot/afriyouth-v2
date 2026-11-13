'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const labData: any = {
  'advanced-coding-lab': {
    title: 'Advanced Coding Lab',
    description: 'Full-stack software engineering, progressive database indexing, state architectural patterns, and production-ready APIs built for scaling.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
    curriculum: ['JavaScript & TypeScript', 'React & Next.js', 'Node.js & Express', 'Databases (SQL/NoSQL)', 'System Design', 'API Development'],
    requirements: ['Basic understanding of programming', 'A laptop and stable internet', 'Passion for problem-solving', 'Commitment to 12 weeks of intensive learning'],
    careers: ['Full-Stack Developer', 'Backend Engineer', 'Frontend Developer', 'Software Architect'],
  },
  'high-fidelity-studio': {
    title: 'High-Fidelity Studio',
    description: 'Interactive product experience frameworks, detailed layout structuring, custom design pattern design, and beautiful typography curation.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop',
    curriculum: ['UI/UX Principles', 'Figma & Prototyping', 'Design Systems', 'Typography & Color Theory', 'User Research', 'Accessibility (a11y)'],
    requirements: ['Basic understanding of design', 'A laptop and stable internet', 'Creativity and attention to detail', 'Commitment to 12 weeks of intensive learning'],
    careers: ['UI/UX Designer', 'Product Designer', 'Visual Designer', 'Design Systems Engineer'],
  },
  'incubation-business': {
    title: 'Incubation & Business',
    description: 'Venture logic roadmapping, investor deck structuring, technical advisory pipelines, and cross-continental network matching structures.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop',
    curriculum: ['Business Model Canvas', 'Market Research', 'Investor Pitching', 'Financial Modeling', 'Go-to-Market Strategy', 'Legal & Compliance'],
    requirements: ['A startup idea or early-stage project', 'Commitment to 6 months of incubation', 'Desire to scale across Africa', 'Willingness to collaborate'],
    careers: ['Founder', 'Product Manager', 'Business Analyst', 'Growth Strategist'],
  },
};

export default function LabPage() {
  const params = useParams();
  const slug = params.slug as string;
  const lab = labData[slug];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!lab) {
    return <div className="p-20 text-center text-white">Lab not found</div>;
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans overflow-x-hidden">
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#030712]/90 backdrop-blur-md border-b border-slate-800 py-4 px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-black text-white">A</div>
          <span className="text-xl font-bold tracking-tight">AfriYouth <span className="text-blue-500 font-light">Labs</span></span>
        </Link>
        <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">← Back to Home</Link>
      </nav>

      <div className={`pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 border border-slate-800">
          <img src={lab.image} alt={lab.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent" />
          <h1 className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-3xl md:text-6xl font-black text-white">{lab.title}</h1>
        </div>

        <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12">{lab.description}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Curriculum</h2>
            <ul className="space-y-2 text-slate-300">
              {lab.curriculum.map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-2"><span className="text-blue-500">✓</span> {item}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">Requirements</h2>
            <ul className="space-y-2 text-slate-300">
              {lab.requirements.map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-2"><span className="text-emerald-500">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-indigo-400">Career Paths</h2>
          <div className="flex flex-wrap gap-2">
            {lab.careers.map((item: string, i: number) => (
              <span key={i} className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30">{item}</span>
            ))}
          </div>
        </div>
        
        <Link href="/#join" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
          Apply for this Lab
        </Link>
      </div>
    </main>
  );
}
