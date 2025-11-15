
import React, { useState } from 'react';
import type { Discovery } from '../types';
import { getCategoryIcon } from './icons';

interface TimelineItemProps {
  discovery: Discovery;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ discovery, isLeft }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = getCategoryIcon(discovery.category);

  const alignmentClass = isLeft ? 'sm:items-start sm:pr-8' : 'sm:items-end sm:pl-8 sm:text-right';
  const cardPositionClass = isLeft ? 'sm:mr-auto' : 'sm:ml-auto';
  const dotPositionClass = isLeft ? 'sm:left-1/2 sm:-ml-3' : 'sm:left-1/2 sm:-ml-3';
  const yearPositionClass = isLeft ? 'sm:text-right sm:pr-16' : 'sm:text-left sm:pl-16';

  return (
    <div className="mb-12 flex flex-col sm:flex-row items-center w-full">
      {/* Year */}
      <div className={`w-full sm:w-1/2 order-1 ${yearPositionClass}`}>
        <p className="text-3xl font-bold font-orbitron text-cyan-400">{discovery.year}</p>
      </div>

      {/* Dot on the timeline */}
      <div className={`absolute w-6 h-6 bg-gray-800 rounded-full border-4 border-cyan-500 z-10 ${dotPositionClass}`}></div>

      {/* Card */}
      <div className={`w-full sm:w-1/2 p-1 order-2 ${cardPositionClass}`}>
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-4 bg-gray-800 rounded-lg shadow-lg border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <h3 className={`font-bold text-lg ${isLeft ? '' : 'sm:w-full'}`}>{discovery.title}</h3>
            <div className="flex-shrink-0 ml-4 p-2 bg-cyan-900/50 rounded-full">
                <Icon className="w-6 h-6 text-cyan-300" />
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-400">{discovery.summary}</p>
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-cyan-400/10">
              <p className="text-gray-300 text-sm leading-relaxed">{discovery.details}</p>
              <p className="mt-3 text-xs text-cyan-400 font-semibold bg-cyan-900/50 inline-block px-2 py-1 rounded">
                Category: {discovery.category}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
