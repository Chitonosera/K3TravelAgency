import React from 'react'
import './ItemBlock.css'
import { Link } from 'react-router-dom'
import Score from '../../../public/svg/Score'
import Button from '../../../public/svg/Button'

const ItemBlock = () => {
	return (
		<div className='item_block'>
			<div className='display'>
				<img
					className='item_photo'
					src='../../../public/slider1.jpg'
					alt='logo'
				/>
				<div className='Container'>
					<div className='item_info'>
						<div className='info_middle'>
							<h3 className='info_title'>Закарпаття</h3>
							<h3 className='info_price'>1000UAH</h3>
						</div>
						<div>
							<Link to='/travel'>
								<div className='logic'>
									<div className='score'>
										<Score />
										<Score />
										<Score />
										<Score />
									</div>
									<button className='item_btn'>
										<Button />
									</button>
									<h2 id='seats'>30</h2>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ItemBlock
