import React from 'react'
import './AddTour.css'
import Button from '../../../public/svg/Button'
import Seats from '../../../public/svg/Seats'
import AddPhotoSvg from '../../../public/svg/AddPhotoSvg'
function AddTour() {
	return (
		<div className='AddTourBlock'>
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
			<div className='AddTourInfoDes'>
				<p className='AddTourTitle'>Опис</p>
				<input
					className='AddTourInputDes'
					type='text'
					placeholder='Введіть опис'
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

export default AddTour
