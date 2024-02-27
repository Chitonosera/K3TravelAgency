import React from 'react'
import './ItemBlock.css'
import { Link } from 'react-router-dom'

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
								<button className='item_btn'></button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ItemBlock
