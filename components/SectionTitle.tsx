
import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, subtitle, center = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4">
        {children}
        <span className="text-accent">.</span>
      </h2>
      {subtitle && <p className="text-gray-400 max-w-2xl text-lg">{subtitle}</p>}
      <div className={`h-1.5 w-20 bg-accent mt-4 ${center ? 'mx-auto' : ''} rounded-full`}></div>
    </div>
  );
};

export default SectionTitle;
