import React from 'react'

import './Search.css'

const Search = () => {
	return (
		<div className='search'>
			<svg
				className='iconSearch'
				width='90'
				height='90'
				viewBox='0 0 90 90'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<rect width='90' height='90' rx='20' fill='#00A99F' />
				<g clipPath='url(#clip0_0_1)'>
					<path
						d='M52.2917 49.1667H50.6458L50.0625 48.6042C52.1042 46.2292 53.3333 43.1458 53.3333 39.7917C53.3333 32.3125 47.2708 26.25 39.7917 26.25C32.3125 26.25 26.25 32.3125 26.25 39.7917C26.25 47.2708 32.3125 53.3333 39.7917 53.3333C43.1458 53.3333 46.2292 52.1042 48.6042 50.0625L49.1667 50.6458V52.2917L59.5833 62.6875L62.6875 59.5833L52.2917 49.1667ZM39.7917 49.1667C34.6042 49.1667 30.4167 44.9792 30.4167 39.7917C30.4167 34.6042 34.6042 30.4167 39.7917 30.4167C44.9792 30.4167 49.1667 34.6042 49.1667 39.7917C49.1667 44.9792 44.9792 49.1667 39.7917 49.1667Z'
						fill='white'
					/>
				</g>
				<defs>
					<clipPath id='clip0_0_1'>
						<rect
							width='50'
							height='50'
							fill='white'
							transform='translate(20 20)'
						/>
					</clipPath>
				</defs>
			</svg>

			<input
				placeholder='Пошук подорожі'
				className='inputSearch'
				type='search'
				name='search'
			/>
		</div>
	)
}
export default Search
