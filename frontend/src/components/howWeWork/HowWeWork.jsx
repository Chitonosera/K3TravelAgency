import React from 'react'
import "./HowWeWork.css"
const HowWeWork = () => {
  return (
		<div className='politic_work'>
			<div className='politic_block'>
				<div className='politic_map'>
					<div className='politic_picture'>
						<svg
							width='50'
							height='50'
							viewBox='0 0 76 76'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M73.4167 0.5L72.75 0.625L50.5 9.25L25.5 0.5L2 8.41667C1.125 8.70833 0.5 9.45833 0.5 10.4167V73.4167C0.5 74.5833 1.41667 75.5 2.58333 75.5L3.25 75.375L25.5 66.75L50.5 75.5L74 67.5833C74.875 67.2917 75.5 66.5417 75.5 65.5833V2.58333C75.5 1.41667 74.5833 0.5 73.4167 0.5ZM29.6667 10.7917L46.3333 16.625V65.2083L29.6667 59.375V10.7917ZM8.83333 14.9167L21.3333 10.7083V59.4583L8.83333 64.2917V14.9167ZM67.1667 61.0833L54.6667 65.2917V16.5833L67.1667 11.75V61.0833Z'
								fill='#00A99F'
							/>
						</svg>
					</div>
				</div>
				<div className='politic_info'>
					<p>Вибери місце де тобі подобається</p>
					<p id='txtp'>Складемо найкращу програму відпочинку</p>
				</div>
			</div>
		</div>
	)
}

export default HowWeWork