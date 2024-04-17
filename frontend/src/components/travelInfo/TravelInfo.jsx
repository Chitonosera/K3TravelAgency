import React from 'react'
import './travelInfo.css'
 const TravelInfo = ({ imgUrl, Title, Seats, Price }) => {
		return (
			<div>
				<img src={imgUrl} alt='TraveDes' />
				<div>
					<h1>Карпати{Title}</h1>
					<span>
						<p>Вільні місця: {Seats}</p>
						<p>Ціна: {Price}</p>
					</span>
				</div>
			</div>
		)
 }

 export default TravelInfo