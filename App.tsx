
import React, { useState, useCallback } from 'react';
import type { Discovery } from './types';
import { generateDiscoveries } from './services/geminiService';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import Timeline from './components/Timeline';
import Loader from './components/Loader';
import InitialScreen from './components/InitialScreen';

const App: React.FC = () => {
  const [researchTopic, setResearchTopic] = useState<string>('');
  const [timeline, setTimeline] = useState<Discovery[]>([]);
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [simulationStarted, setSimulationStarted] = useState<boolean>(false);

  const runTimeStep = useCallback(async (years: number) => {
    setIsSimulating(true);
    setError(null);
    try {
      const lastDiscovery = timeline.length > 0 ? timeline[timeline.length - 1] : null;
      const newDiscoveries = await generateDiscoveries(researchTopic, currentYear, years, lastDiscovery);
      
      if (newDiscoveries.length > 0) {
        setTimeline(prev => [...prev, ...newDiscoveries]);
        const latestDiscoveryYear = newDiscoveries[newDiscoveries.length - 1].year;
        setCurrentYear(latestDiscoveryYear);
      } else {
        // If no discoveries, just advance the year to avoid getting stuck
        setCurrentYear(prev => prev + years);
      }

    } catch (err) {
      console.error(err);
      setError('Failed to generate discoveries. The AI might be pondering the limits of science. Please try again.');
    } finally {
      setIsSimulating(false);
    }
  }, [researchTopic, currentYear, timeline]);

  const handleStartSimulation = (topic: string) => {
    if (topic.trim()) {
      const startYear = new Date().getFullYear();
      setResearchTopic(topic);
      setTimeline([]);
      setCurrentYear(startYear);
      setError(null);
      setSimulationStarted(true);
      // Kick off the first time step automatically
      runTimeStep(5); 
    }
  };

  const handleReset = () => {
    setSimulationStarted(false);
    setResearchTopic('');
    setTimeline([]);
    setCurrentYear(new Date().getFullYear());
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-4 selection:bg-cyan-400/20">
      <div className="w-full max-w-4xl mx-auto">
        <Header onReset={handleReset} simulationStarted={simulationStarted} />
        {!simulationStarted ? (
          <InitialScreen onStart={handleStartSimulation} />
        ) : (
          <main className="mt-8">
            <h2 className="text-xl md:text-2xl text-cyan-400 font-orbitron text-center mb-2">
              Researching: <span className="font-bold text-white">{researchTopic}</span>
            </h2>
            <p className="text-center text-gray-400 mb-6">Current Year: {currentYear}</p>
            
            <ControlPanel onTimeJump={runTimeStep} isSimulating={isSimulating} />
            
            {isSimulating && timeline.length === 0 && (
                <div className="mt-8 text-center">
                    <Loader />
                    <p className="mt-4 text-cyan-300 animate-pulse">Initializing quantum research fields...</p>
                </div>
            )}
            
            {error && (
              <div className="mt-6 p-4 bg-red-900/50 border border-red-500 text-red-300 rounded-lg text-center">
                <p><strong>Simulation Error:</strong> {error}</p>
              </div>
            )}
            
            <Timeline discoveries={timeline} />

            {isSimulating && timeline.length > 0 && (
                 <div className="mt-8 text-center flex items-center justify-center">
                    <Loader />
                    <p className="ml-4 text-cyan-300 animate-pulse">Accelerating time... new breakthroughs on the horizon.</p>
                </div>
            )}

          </main>
        )}
      </div>
    </div>
  );
};

export default App;
