import React, {useState, useEffect, useRef} from "react"
import Chart from 'chart.js/auto';

const BarChart = () => {
    const chartInstanceRef = useRef(null);
    const [name, setName] = useState([]);
    const [value, setValue] = useState([]);

    useEffect( () => {

        const labelName = [];
        const labelValue = [];

        const Record = async () => {
            const dataReq = await fetch("http://localhost:3001/chartData");
            const dataStore = await dataReq.json();

            for (let i=0; i<dataStore.length; i++){
                labelName.push(dataStore[i].label);
                labelValue.push(dataStore[i].value);

            }
            setName(labelName);
            setValue(labelValue);
        }
        getRecord();
    }, []);
    const chartRef = useRef(null);

      // Check if chartRef and chartRef.current are defined before accessing getContext
    if (chartRef.current && chartRef.current.getContext) {
        const ctx = chartRef.current.getRecord('2d');
    }
  
        // Destroy the previous chart instance
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          label: name,
          datasets: [{
            label: 'Sample Data',
            value: value,
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
}

export default BarChart;