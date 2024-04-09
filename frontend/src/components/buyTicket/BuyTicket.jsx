import React from 'react'
import Vector from '../../../public/svg/Vector'
import Close from '../../../public/svg/Close'
import './BuyTicket.css'
import { buyTicketInfo } from '../../constants/Index'

function BuyTicket() {
  return (
		<>
			<div className='BuyTicketBlock'>
				<div className='BuyTicketHeader'>
					<Vector />
					<h1>Купівля квитка</h1>
					<Close />
				</div>
				<div className='BuyTicketInfo'>
					{buyTicketInfo.map(item => (
						<p className='infobt' key={item.id}>
							{item.title}
						</p>
					))}
					<p className='BuyTicketInfo_output'></p>
					<p className='BuyTicketInfo_output'></p>
					<p className='BuyTicketInfo_output'></p>
					<p className='BuyTicketInfo_output'></p>
				</div>
				<div className='AddUserInfo'>
					<div className='UserInfo'>
						<div className='AddInfoTicket'>
							<input type='text' placeholder='Ім`я' />
							<input type='email' placeholder='Пошта' />
						</div>
						<div className='AddInfoTicket'>
							<input type='text' placeholder='Прізвище' />
							<input type='phone' placeholder='Tелефону' />
						</div>
					</div>
				</div>
				<div className='BuyTicketBottom'>
					<button className='ApplyOrder'>Оплатити</button>
				</div>
			</div>
		</>
	)
  
}

export default BuyTicket