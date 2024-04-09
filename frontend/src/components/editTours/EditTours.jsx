import React from 'react'
import './EditTours.css'
import Seats from '../../../public/svg/Seats'
import AddPhotoSvg from '../../../public/svg/AddPhotoSvg'
function EditTours() {
	return (
		<div className='AddTourBlock'>
			<div className='ChangeTours'>
				<p className='AddTourTitle'>Оберіть подорож</p>
				<svg
					width='39'
					height='24'
					viewBox='0 0 39 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M5.15625 0.84375L19.5 15.1562L33.8438 0.84375L38.25 5.25L19.5 24L0.75 5.25L5.15625 0.84375Z'
						fill='#323232'
					/>
				</svg>
			</div>
			<div className='AddTourInfo'>
				<p className='AddTourTitle'>Назва</p>
				<input
					className='AddTourInput'
					type='text'
					placeholder='Введіть назву'
				/>
				<p className='AddTourTitle'>Ціна</p>
				<input
					className='AddTourInput'
					type='text'
					placeholder='Введіть ціна'
				/>
			</div>
			<div className='AddTourSvg'>
				<div className='AddTourSeats'>
					<Seats />
				</div>
				<div className='AddTourSeats'>
					<p>30</p>
				</div>
			</div>
			<div className='AddToursPhoto'>
				<AddPhotoSvg />
				<button className='AddToursButton'>Підтвердити</button>
			</div>
		</div>
	)
}

export default EditTours
