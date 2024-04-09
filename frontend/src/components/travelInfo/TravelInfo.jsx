import React from 'react'
 const TravelInfo = ({ imgUrl, Title, Seats, Price }) => {
		return (
			<div>
				<img src={imgUrl} alt='TraveDes' />
				<div>
					<h1>{Title}</h1>
					<span>
						<p>Вільні місця: {Seats}</p>
						<p>Ціна: {Price}</p>
					</span>
				</div>
			</div>
		)
 }

 export default TravelInfo