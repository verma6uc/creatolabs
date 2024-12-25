'use client';

import { AISimulation } from '../Simulation/AISimulation';

export function SimulationSection() {
  return (
    <section 
      id="simulation"
      className="relative w-full min-h-screen"
    >
      <AISimulation />
    </section>
  );
}
