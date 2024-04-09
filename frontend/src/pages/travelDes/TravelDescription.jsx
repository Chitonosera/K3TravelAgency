import React from 'react'
import './TravelDescription.css'
import { travelDes } from '../../constants/Index'
import TravelInfo from '../../components/travelInfo/TravelInfo'
import Cube from '../../components/cube/Cube'
import { CubeInfo } from '../../constants/Index'
import LineSvg from '../../../public/svg/LineSvg'
import BuyTicket from '../../components/buyTicket/BuyTicket'
const TravelDescription = () => {
	console.log(travelDes)
	return (
		<main className='travel_page'>
			<div className='MainDesInfo'>
				{travelDes.map(item => (
					<div key={item.id}>
						<TravelInfo
							title={item.Title}
							imgUrl={item.imgUrl}
							seats={item.Seats}
							price={item.Price}
						/>
					</div>
				))}
			</div>
			<div className='CubeBlock'>
				{CubeInfo.map(item => (
					<div className='CubeLine' key={item.id}>
						<Cube number={item.number} title={item.title} />
					</div>
				))}
			</div>
			<div className='Linesvg'>
				<LineSvg />
			</div>
			<div>
				<BuyTicket />
			</div>
		</main>
	)
}

export default TravelDescription
