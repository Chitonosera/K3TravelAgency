import React, { useState } from 'react'
import './AddTour.css'
import Button from '../../../public/svg/Button'
import Seats from '../../../public/svg/Seats'
import AddPhotoSvg from '../../../public/svg/AddPhotoSvg'
function AddTour() {
	const [text, setText] = useState('')
	const [error, setError] = useState('')

	const handleChange = event => {
		const newText = event.target.value
		const maxLength = 9 // Максимальна довжина тексту

		if (newText.length <= maxLength) {
			setText(newText)
			setError('')
		} else {
			setError('Перевищено максимальну довжину тексту!')
		}
	}
	const handleSubmit = () => {
		console.log('Введений текст:', text)
	}
	return (
		<div className='AddTourBlock'>
			<div className='AddTourInfo'>
				<p className='AddTourTitle'>Назва</p>
				<input
					className='AddTourInput'
					type='text'
					placeholder='Введіть назву'
					onChange={handleChange}
				/>
				{text.length > 9 && (
					<p style={{ color: 'red' }}>Перевищено максимальну довжину тексту!</p>
				)}

				<p className='AddTourTitle'>Ціна</p>
				<input
					className='AddTourInput'
					type='text'
					placeholder='Введіть ціна'
					onChange={handleChange}
				/>
				{text.length > 9 && (
					<p style={{ color: 'red' }}>Перевищено максимальну довжину тексту!</p>
				)}
			</div>
			<div className='AddTourInfoDes'>
				<p className='AddTourTitle'>Опис</p>
				<input
					className='AddTourInputDes'
					type='text'
					placeholder='Введіть опис'
					onChange={handleChange}
				/>
				{text.length > 9 && (
					<p style={{ color: 'red' }}>Перевищено максимальну довжину тексту!</p>
				)}
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
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<button className='AddToursButton' onClick={handleSubmit}>
					Підтвердити
				</button>
			</div>
		</div>
	)
}

export default AddTour
