
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-blue-900/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>Disponible pour de nouveaux défis</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight mb-6">
            Optimisation & <span className="text-accent italic">Sécurité</span> des Infrastructures IT
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Administrateur Systèmes passionné par la gestion des environnements critiques,
            l'automatisation des processus et la robustesse des systèmes.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="CV/Oussama_Touderti_CV.pdf" 
              download="Oussama_Touderti_CV.pdf"
              className="px-8 py-4 bg-accent hover:bg-accentDark text-white font-bold rounded-xl transition-all shadow-lg shadow-accent/25 flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <span>Télécharger mon CV</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <a href="#portfolio" className="px-8 py-4 border border-white/10 hover:border-white/30 hover:bg-white/5 text-white font-bold rounded-xl transition-all flex items-center justify-center">
              Voir mes projets
            </a>
          </div>

          <div className="mt-16 flex items-center space-x-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">3+</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Ans d'Expérience</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">50+</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Serveurs Gérés</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">99.9%</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Disponibilité</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero visual detail */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3">
        <div className="relative">
          <div className="absolute inset-0 bg-accent/10 blur-[50px]"></div>
          <img
            src="https://picsum.photos/id/160/800/800"
            alt="Workstation tech"
            className="rounded-2xl border border-white/10 grayscale opacity-40"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
