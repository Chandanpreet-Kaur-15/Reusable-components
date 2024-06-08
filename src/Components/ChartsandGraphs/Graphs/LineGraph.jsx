// LineGraph.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize chart on component mount
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7'],
        datasets: [{
          label: 'Sample Line Data',
          data: [10, 20, 15, 12, 2, 7, 3],
          fill: false,
          borderColor: ['rgba(75, 192, 192, 1)'],
          tension: 0.1,
        }, 
        {label: 'Line2',
          data: [5, 7, 3, 16],
          fill: true,
          borderColor: ['rgba(75, 192, 1, 1)'],
          tension: 0.1}
        ],
      },
      options: {
        aspectRatio: 5, // Set your custom aspect ratio here
      },
    });

    // Cleanup on component unmount
    return () => {
      myChart.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};

export default LineGraph;
