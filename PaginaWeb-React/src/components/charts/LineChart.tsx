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
  pData: any[],
  pFechas:string[],
  pTitulos:string[]
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
      text: 'Historial de reservas'
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

function LineChart ({pData,pFechas,pTitulos}:propLineChart) {
  const [chart, setChart] = useState(<></>)
  const labels = pFechas;
  const generarNumero=(numero:number)=>{
    return (Math.random()*numero).toFixed(0);
  }
   const colorRGB=()=>{
    var coolor = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
    return "rgb" + coolor;
  }
  const findNumReservas = (pTitulo:string)=>{
    let reservas=[0,0,0,0]
    for (let i = 0; i < labels.length; i++) {
      const date = labels[i];
      for (let j = 0; j < pData.length; j++) {
        const element = pData[j];
        if(element.Titulo===pTitulo){
          if(date===element.Fecha.substring(0,10)){
          console.log(i)
            reservas.splice(i,1, element.NumeroDeReservas)
          }
        }
      }
    }
    console.log(reservas)
    return reservas
  }
  let data = {
    labels,
    datasets: Object.values(pTitulos).map(item=>{
      let color = colorRGB()
      return {
        label: item,
        data: findNumReservas(item),
        borderColor: color,
        backgroundColor: color,
        yAxisID: 'y'
      }
    }),
 }

  useEffect(() => {

    console.log('----');
    console.log(pTitulos)
    setChart(()=>{
      return <Line options={options} data={data} />
    })
  }, [])
  return <>{chart}</>
}
export default LineChart
