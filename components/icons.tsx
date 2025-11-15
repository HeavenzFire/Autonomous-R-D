
import React from 'react';

type IconProps = {
  className?: string;
};

export const AtomIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="1" />
    <path d="M20.2 20.2c2.04-2.03.02-5.91-2.4-8.35s-6.32-4.44-8.35-2.4c-2.04 2.03-.02 5.91 2.4 8.35 2.42 2.43 6.32 4.44 8.35 2.4Z" />
    <path d="M3.8 3.8c-2.04 2.03-.02 5.91 2.4 8.35s6.32 4.44 8.35 2.4c2.04-2.03.02-5.91-2.4-8.35S5.84 1.76 3.8 3.8Z" />
    <path d="M12 22V2" />
  </svg>
);

const TheoreticalIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 2a10 10 0 1 0-10 10" />
        <path d="M2 12h20" />
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 2a10 10 0 1 0-10 10" />
        <path d="M12 22V2" />
        <path d="M12 22a10 10 0 1 0-10-10" />
        <path d="M12 22a10 10 0 1 0 10-10" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);

const EngineeringIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 20V10" />
    <path d="M18 20V4" />
    <path d="M6 20v-4" />
  </svg>
);

const BiotechIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 2H18a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-3.5" />
    <path d="M20 12h-8" />
    <path d="M9.5 22H6a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h3.5" />
    <path d="M4 12h8" />
    <path d="M12 2v20" />
  </svg>
);

const MaterialsIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 2 7.07 7.07a5 5 0 0 1 0 7.07L12 22l-7.07-7.07a5 5 0 0 1 0-7.07z" />
  </svg>
);

const EnergyIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m13 2-3 14v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4L11 2h2" />
  </svg>
);

const ComputerIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
);

const PhysicsIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 7.5a2.5 2.5 0 0 1-2.5 2.5h-1a2.5 2.5 0 0 1 0-5h1A2.5 2.5 0 0 1 21 7.5Z"/>
        <path d="M3 7.5a2.5 2.5 0 0 1 2.5 2.5h1a2.5 2.5 0 0 1 0-5h-1A2.5 2.5 0 0 1 3 7.5Z"/>
        <path d="M21 16.5a2.5 2.5 0 0 1-2.5 2.5h-1a2.5 2.5 0 0 1 0-5h1a2.5 2.5 0 0 1 2.5 2.5Z"/>
        <path d="M3 16.5a2.5 2.5 0 0 1 2.5 2.5h1a2.5 2.5 0 0 1 0-5h-1a2.5 2.5 0 0 1-2.5 2.5Z"/>
        <path d="M12 5V2"/>
        <path d="M12 22v-3"/>
        <path d="M19 12h3"/>
        <path d="M2 12h3"/>
        <path d="M4.9 19.1 7 17"/>
        <path d="M17 7l2.1-2.1"/>
        <path d="m7 7-2.1-2.1"/>
        <path d="m19.1 19.1-2.1-2.1"/>
    </svg>
);


const SpaceIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10Z"/>
        <path d="M12 12a5 5 0 1 0 5 5 5 5 0 0 0-5-5Z"/>
    </svg>
);


export const getCategoryIcon = (category: string): React.FC<IconProps> => {
  switch (category) {
    case 'Theoretical Breakthrough': return TheoreticalIcon;
    case 'Engineering Advance': return EngineeringIcon;
    case 'Biotechnology': return BiotechIcon;
    case 'Materials Science': return MaterialsIcon;
    case 'Energy': return EnergyIcon;
    case 'Computer Science': return ComputerIcon;
    case 'Physics': return PhysicsIcon;
    case 'Space Exploration': return SpaceIcon;
    default: return AtomIcon; // Fallback icon
  }
};
