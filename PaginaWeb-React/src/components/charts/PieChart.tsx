import { useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { Course, DataAnalisis } from '../../types';

ChartJS.register(ArcElement, Tooltip, Legend)

interface propPieChart {
  pData: any[]
}


function PieChart ({pData}:propPieChart) {
  const [chart, setChart] = useState(<></>)
  useEffect(() => {
    const data = {
      labels: Object.values(pData as DataAnalisis[]).map((item)=>{return item.Titulo}),
      datasets: [
        {
          label: 'Cantidad de reservvas',
          data:  Object.values(pData as DataAnalisis[]).map((item)=>{return item.NumeroDeReservas}),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    }
    setChart(() => {
      return <Pie data={data} />
    })
  }, [])
  return <>{chart}</>
}

export default PieChart
