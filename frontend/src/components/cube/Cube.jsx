import React from 'react'
import './Cube.css'
function Cube({number , title}) {
  return (
			<div className='Cube'>
				<p>{number}</p>
				<p>{title}</p>
			</div>
	)
}

export default Cube