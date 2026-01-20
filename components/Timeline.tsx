
import React from 'react';
import SectionTitle from './SectionTitle';
import { EXPERIENCES, EDUCATION } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experiences */}
          <div>
            <SectionTitle subtitle="Mon parcours en entreprise">
              Expériences
            </SectionTitle>
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-12 group">
                  <div className="absolute left-0 top-0 mt-1 h-10 w-10 rounded-full border border-accent bg-dark flex items-center justify-center z-10 group-hover:bg-accent transition-colors duration-300">
                    <div className="h-3 w-3 rounded-full bg-accent group-hover:bg-white"></div>
                  </div>
                  <div>
                    <span className="text-accent font-bold text-sm uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-xl font-display font-bold text-white mt-1">{exp.role}</h3>
                    <p className="text-gray-400 font-semibold mb-3">{exp.company}</p>
                    <p className="text-gray-400 leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-white/5 border border-white/10 rounded uppercase text-gray-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <SectionTitle subtitle="Fondations académiques">
              Formation
            </SectionTitle>
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-6 bg-surface rounded-2xl border border-white/5 hover:bg-white/5 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <span className="text-accent font-bold">{edu.year}</span>
                  </div>
                  <p className="text-gray-400">{edu.school}</p>
                  <div className="mt-4 flex items-center text-accent text-sm font-semibold">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Diplôme Validé
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/20">
               <h4 className="text-white font-bold mb-2">Certifications & Formations continues</h4>
               <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• ITIL Foundation v4 (En cours)</li>
                  <li>• CCNA 1, 2 & 3 - Cisco Networking Academy</li>
                  <li>• VMware vSphere 7 Install, Configure, Manage</li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
