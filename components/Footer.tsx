
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <a href="#" className="font-display text-2xl font-bold tracking-tight text-white group">
            Oussama TOUDERTI<span className="text-accent transition-all group-hover:pl-1">.</span>
          </a>
          <p className="text-gray-500 text-sm mt-2">
            Administrateur Systèmes | Infrastructure & Sécurité
          </p>
        </div>

        <div className="flex flex-wrap justify-center space-x-6 md:space-x-8 text-sm text-gray-500 my-4 md:my-0">
          <a href="#about" className="hover:text-accent transition-colors">À propos</a>
          <a href="#skills" className="hover:text-accent transition-colors">Compétences</a>
          <a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>

        <div className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Oussama Touderti. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
