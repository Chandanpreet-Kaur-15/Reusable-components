// PieChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize chart on component mount
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [{
          data: [30, 50, 20],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
          ],
          hoverOffset: 4,
        }],
      },
      options: {
        radius: 200,
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

export default PieChart;
