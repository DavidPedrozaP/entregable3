import React from 'react'
import './style/buscador.css'

const ResidentForm = ({handleSubmit}) => {
  return (
    <div className='barrabusqueda'>
    <form className='formulariodebarra' onSubmit={handleSubmit}>
      <div className='inputdebarra'>
      <input type="search" id='idLocation' placeholder='type a location id' />
      </div>
        
        <button>Search</button>
      </form>
      </div>
  )
}

export default ResidentForm