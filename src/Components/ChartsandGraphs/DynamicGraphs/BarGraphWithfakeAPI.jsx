// import React, { useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';

// const BarGraphWithFakeAPI = () => {
//   const chartRef = useRef(null);
//   const chartInstanceRef = useRef(null);
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:3004/students');
//       const jsonData = await response.json();
//       console.log("Fetched data: ", jsonData);
//       setChartData(jsonData);
//       updateChart();
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const updateChart = () => {
//     const ctx = chartRef.current.getContext('2d');

//     // Destroy the previous chart
//     if (chartInstanceRef.current) {
//       chartInstanceRef.current.destroy();
//     }

//     // Create a new chart with the updated data
//     chartInstanceRef.current = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: chartData.map(dataPoint => dataPoint.label),
//         datasets: [{
//           label: 'Bar Graph Data',
//           data: chartData.map(dataPoint => dataPoint.value),
//           backgroundColor: 'rgba(75, 192, 192, 0.7)',
//           borderWidth: 1,
//         }],
//       },
//     });
//   };

//   return (
//     <div>
//       <canvas ref={chartRef} width="400" height="200"></canvas>
//     </div>
//   );
// };

// export default BarGraphWithFakeAPI;


// import React, { useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';

// const BarGraphWithFakeAPI = () => {
//   const chartRef = useRef(null);
//   const chartInstanceRef = useRef(null);
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:3004/students');
//       const jsonData = await response.json();
//       console.log("Fetched data: ", jsonData);
//       setChartData(jsonData);
//       updateChart();
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const updateChart = () => {
//     const ctx = chartRef.current.getContext('2d');

//     // Destroy the previous chart
//     if (chartInstanceRef.current) {
//       chartInstanceRef.current.destroy();
//     }

//     // Create a new chart with the updated data
//     chartInstanceRef.current = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: chartData.map(student => student.name),
//         datasets: [{
//           label: 'Bar Graph Data',
//           data: chartData.map(student => student.age), // You can use a different property based on your requirements
//           backgroundColor: 'rgba(75, 192, 192, 0.7)',
//           borderWidth: 1,
//         }],
//       },
//     });
//   };

//   return (
//     <div>
//       <canvas ref={chartRef} width="400" height="200"></canvas>
//     </div>
//   );
// };

// export default BarGraphWithFakeAPI;



// import React, { useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';

// const BarGraphWithFakeAPI = () => {
//   const chartRef = useRef(null);
//   const chartInstanceRef = useRef(null);
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('barGraphData'));

//     if (storedData) {
//       setChartData(storedData);
//       updateChart(storedData);
//     } else {
//       fetchData();
//     }
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:3600/weeks');
//       const jsonData = await response.json();
//       console.log("Fetched data: ", jsonData);
//       setChartData(jsonData);
//       updateChart(jsonData);
//       // Save the fetched data to localStorage
//       localStorage.setItem('barGraphData', JSON.stringify(jsonData));
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const updateChart = (data) => {
//     const ctx = chartRef.current.getContext('2d');

//     // Destroy the previous chart
//     if (chartInstanceRef.current) {
//       chartInstanceRef.current.destroy();
//     }

//     // Create a new chart with the updated data
//     chartInstanceRef.current = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: data.map(weeks => weeks.name),
//         datasets: [{
//           label: 'Bar Graph Data',
//           data: data.map(weeks => parseInt(weeks.year)),
//           backgroundColor: 'rgba(75, 192, 192, 0.7)',
//           borderWidth: 1,
//         }],
//       },
//       options: {
//         aspectRatio: 4,
//         scales: {
//           x: {
//             grid: {
//               display: false,
//             },
//           },
//           y: {
//             grid: {
//               display: false,
//             },
//             beginAtZero: true,
//           },
//         },
//         plugins: {
//           legend: {
//             display: true,
//             position: 'top',
//           },
//         },
//         layout: {
//           padding: {
//             left: 100, 
//             right: 100, 
//             top: 0, 
//             bottom: 0, 
//           },
//         },
//         scales: {
//           x: {
//             barPercentage: 0.5, // Adjust the width of the bars (0.5 means 50% of the available space)
//           },
//         },
//       },
     
//     });
//   };

//   const chartwidth = 100

//   return (
//     <div>
//       <canvas ref={chartRef} width={chartwidth} height="200"></canvas>
//     </div>
//   );
// };

// export default BarGraphWithFakeAPI;



import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const BarGraphWithFakeAPI = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('barGraphData'));

    if (storedData) {
      setChartData(storedData);
      updateChart(storedData);
    } else {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3700/weeks');
      const jsonData = await response.json();
      console.log("Fetched data: ", jsonData);
      setChartData(jsonData);
      updateChart(jsonData);
      // Save the fetched data to localStorage
      localStorage.setItem('barGraphData', JSON.stringify(jsonData));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateChart = (data) => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy the previous chart
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart with the updated data
    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(weeks => weeks.name),
        datasets: [{
          label: 'Bar Graph Data',
          data: data.map(weeks => parseInt(weeks.year)),
          backgroundColor: 'rgba(75, 192, 192, 0.7)',
          borderWidth: 1,
          barPercentage: 0.3, // Adjust the width of the bars (0.5 means 50% of the available space)
        }],
      },
      options: {
        aspectRatio: 4,
        scales: {
          x: {
            grid: {
              display: true,
            },
          },
          y: {
            grid: {
              display: true,
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        layout: {
          padding: {
            left: 10, 
            right: 10, 
            top: 0, 
            bottom: 0, 
          },
        },
        categorySpacing: 0, 
      },
    });
  };

  const chartwidth = 100

  return (
    <div>
      <canvas ref={chartRef} width={chartwidth} height="200"></canvas>
    </div>
  );
};

export default BarGraphWithFakeAPI;
