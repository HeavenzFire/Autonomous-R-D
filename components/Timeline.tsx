
import React from 'react';
import type { Discovery } from '../types';
import TimelineItem from './TimelineItem';

interface TimelineProps {
  discoveries: Discovery[];
}

const Timeline: React.FC<TimelineProps> = ({ discoveries }) => {
  if (discoveries.length === 0) {
    return null;
  }

  return (
    <div className="relative mt-12 px-4">
      {/* The vertical line */}
      <div className="absolute left-1/2 -ml-[2px] h-full w-1 bg-cyan-400/20"></div>
      
      {discoveries.map((discovery, index) => (
        <TimelineItem key={`${discovery.year}-${index}`} discovery={discovery} isLeft={index % 2 === 0} />
      ))}
    </div>
  );
};

export default Timeline;
