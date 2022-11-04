import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import { DataAnalisis } from '../../types';
import { useState, useEffect } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
interface propLineChart {
  pData: DataAnalisis[],
  pFechas:string[]
}

const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Multi Axis'
    }
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false
      }
    }
  }
}

function LineChart ({pData,pFechas}:propLineChart) {
  

  const [chart, setChart] = useState(<></>)
  const labels = pFechas;
  const getdataSets = Object.values(pData).map(item=>{
    return {
      label: item.Titulo,
      data: pFechas.map(() => faker.datatype.number({ min: 0, max: 10 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y'
    }
  })
  let data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
 }
 
  useEffect(() => {

    console.log('----');
    console.log(data)
    setChart(()=>{
      return <Line options={options} data={data} />
    })
  }, [])
  return <>{chart}</>
}
export default LineChart
