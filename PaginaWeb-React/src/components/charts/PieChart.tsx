import { useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { DataAnalisis } from '../../types'

ChartJS.register(ArcElement, Tooltip, Legend)

interface propPieChart {
  pData: any[]
}
const generarNumero = (numero: number) => {
  return (Math.random() * numero).toFixed(0)
}
const colorRGB = () => {
  const coolor = '(' + generarNumero(255) + ',' + generarNumero(255) + ',' + generarNumero(255) + ', 0.5)'
  return 'rgba' + coolor
}

function PieChart ({ pData }: propPieChart) {
  const [chart, setChart] = useState(<></>)
  const colors = Object.values(pData as DataAnalisis[]).map((item) => { return colorRGB() })
  useEffect(() => {
    const data = {
      labels: Object.values(pData as DataAnalisis[]).map((item) => { return item.Titulo }),
      datasets: [
        {
          label: 'Cantidad de reservvas',
          data: Object.values(pData as DataAnalisis[]).map((item) => { return item.NumeroDeReservas }),
          backgroundColor: colors,
          borderColor: colors,
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
