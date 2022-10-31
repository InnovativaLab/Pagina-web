import fotoFranco from '../assets/staff/francobalich.png'
import '../styles/StaffCard.css'

interface propStaffCard {
  name: string
  description: string
  img?: string
}

function StaffCard ({ name, description, img }: propStaffCard) {
  return (
    <div className='staffCard'>
      <img src={(img !== undefined) ? img : fotoFranco} alt={`Foto de ${name}`} />
      <p className='staffCardTitle'>{name}</p>
      <p className='staffCardText'>{description}</p>
    </div>
  )
}

export default StaffCard
