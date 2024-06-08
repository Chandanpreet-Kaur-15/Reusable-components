// Graph.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize chart on component mount
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
          label: 'Sample Data',
          data: [10, 20, 15],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        }],
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

export default Graph;
