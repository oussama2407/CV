
import React from 'react';
import SectionTitle from './SectionTitle';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Maîtrise technique et outils d'exploitation" center>
          Compétences Techniques
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div key={idx} className="p-8 bg-surface rounded-2xl border border-white/5 hover:border-accent/20 transition-all group">
              <h3 className="text-xl font-display font-bold text-white mb-8 border-l-4 border-accent pl-4">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-accent font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-dark rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent group-hover:bg-blue-400 transition-all duration-1000 ease-out rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {['Résolution de problèmes', 'Communication', 'Travail en équipe', 'Gestion du temps', 'Esprit d\'analyse'].map((soft) => (
            <span key={soft} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-accent/40 transition-all cursor-default">
              {soft}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
