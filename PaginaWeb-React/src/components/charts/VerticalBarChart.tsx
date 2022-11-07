import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Analiticas de reservas'
    }
  }
}

const labels = ['Datos']

interface propVerticalBarChart {
  numReservas: number
  numAlumnos: number
  numCursos: number
  numCalificaciones: number
}

function VerticalBarChart ({ numReservas, numAlumnos, numCursos, numCalificaciones }: propVerticalBarChart) {
  const data = {
    labels,
    datasets: [
      {
        label: 'Reservas',
        data: [numReservas],
        backgroundColor: 'rgba(37, 99, 235, 0.6)'
      },
      {
        label: 'Alumnos',
        data: [numAlumnos],
        backgroundColor: 'rgba(233, 79, 55, 0.6)'
      },
      {
        label: 'Cursos',
        data: [numCursos],
        backgroundColor: 'rgba(0, 167, 227, 0.6)' // 'rgba(9, 82, 86, 0.6)'
      },
      {
        label: 'Calificaciones',
        data: [numCalificaciones],
        backgroundColor: 'rgba(153, 194, 77, 0.6)'
      }
    ]
  }
  return <Bar options={options} data={data} />
}
export default VerticalBarChart
