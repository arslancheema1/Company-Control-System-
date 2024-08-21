import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const ProgressGraph = ({ modules }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const completedModules = modules.filter((module) => module.completed).length;
    const remainingModules = modules.length - completedModules;

    const progressPercentages = modules.map((module) => module.percentage);
    const averageCompletion =
      progressPercentages.reduce((a, b) => a + b, 0) / modules.length;

    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'Remaining'],
        datasets: [
          {
            data: [completedModules, remainingModules],
            backgroundColor: ['#0FA4AF', '#964734'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Ensures the canvas can resize
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: `Overall Progress: ${averageCompletion.toFixed(2)}%`,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [modules]);

  return (
    <div className="progress-graph" style={{ position: 'relative', height: '250px' }}>
      <h3>Progress Graph</h3>
      <canvas ref={chartRef} style={{ width: '100%', height: '100%' }}></canvas>
    </div>
  );
};

export default ProgressGraph;
