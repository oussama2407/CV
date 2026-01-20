
import React from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle subtitle="Une vision rigoureuse de l'informatique">
              À propos de moi
            </SectionTitle>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Je suis <span className="text-white font-bold">Oussama Touderti</span>, Administrateur Systèmes passionné par l'exploitation et la sécurité des infrastructures IT.
              </p>
              <p>
                Avec plusieurs années d'expérience dans des environnements dynamiques, je me spécialise dans la gestion des incidents, la virtualisation, la sauvegarde, la sécurité et l'automatisation des processus IT.
              </p>
              <p>
                Mon approche repose sur la rigueur et la méthodologie <span className="text-accent italic">ITIL</span> pour garantir la disponibilité, la performance et la sécurité des systèmes. Je crois fermement que l'infrastructure doit être un facilitateur invisible mais robuste pour le business.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-4 bg-dark/50 border border-white/5 rounded-xl">
                <h4 className="text-accent font-bold mb-1">Rigueur</h4>
                <p className="text-sm text-gray-400">Application stricte des process et documentation systématique.</p>
              </div>
              <div className="p-4 bg-dark/50 border border-white/5 rounded-xl">
                <h4 className="text-accent font-bold mb-1">Curiosité</h4>
                <p className="text-sm text-gray-400">Veille technologique constante sur le Cloud et l'IaC.</p>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="aspect-square relative rounded-3xl overflow-hidden border-2 border-accent/20">
                <img
                  src="https://picsum.photos/id/1/600/600"
                  alt="Oussama Touderti professional"
                  className="object-cover w-full h-full filter brightness-75 hover:scale-105 transition-transform duration-700"
                />
             </div>
             {/* Float badge */}
             <div className="absolute -bottom-6 -right-6 p-8 bg-accent rounded-3xl shadow-2xl animate-bounce-slow">
                <span className="block text-4xl font-bold text-white italic">"Ready"</span>
                <span className="text-white/80 text-sm font-semibold tracking-widest uppercase">To scale</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
