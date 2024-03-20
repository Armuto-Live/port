import React from 'react'

export const Iconos = ({nombre,src}) => {
  return (
    <figure className='iconos'>
        <img src={src} alt="" height='70px'  width="70px"/>
        <figcaption>
            {nombre}
        </figcaption>
    </figure>
  )
}
