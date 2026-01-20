
import React from 'react';
import SectionTitle from './SectionTitle';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Études de cas et réalisations concrètes" center>
          Portfolio / Projets
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 flex flex-col h-full">
              <div className="h-48 overflow-hidden bg-dark">
                <img
                  src={`https://picsum.photos/seed/${project.title}/600/400`}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full border border-accent/20">
                      {t}
                    </span>
                  ))}
                </div>
                <button className="text-white font-bold flex items-center group/btn text-sm hover:text-accent transition-colors">
                  Détails du projet
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
