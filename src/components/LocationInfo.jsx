import React from 'react'
import './styles/location.css'

const LocationInfo = ({location}) => {

    // console.log(location)

  return (
    <article className='head__location'>
        <h2 className='head__location-title'>{location?.name}</h2>
        <ul className='head__location-list'>
            <li className='location__item'><span className='location__span'>Type</span>{location?.type}</li>
            <li className='location__item'><span className='location__span'>Dimenseion</span>{location?.dimension}</li>
            <li className='location__item'><span className='location__span'>Population</span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo