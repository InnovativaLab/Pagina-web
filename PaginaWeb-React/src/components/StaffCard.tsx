import React from 'react'
import fotoFranco from '../assets/staff/francobalich.png'
import '../styles/StaffCard.css'

interface propStaffCard {
  name: string
  description: string
}

function StaffCard ({ name, description }: propStaffCard) {
  return (
    <div className='staffCard'>
      <img src={fotoFranco} alt={`Foto de ${name}`} />
      <p className='staffCardTitle'>{name}</p>
      <p className='staffCardText'>{description}</p>
    </div>
  )
}

export default StaffCard
