import React from 'react'
import './CustomerCab.css'
import Ticket from '../../components/ticket/Ticket'
import Edit from '../../../public/svg/Edit'

const CustomerCab = () => {
	return (
		<>
			<div className='MyProfileBlock'>
				<h1 className='Ptxt'>Мій профіль</h1>
				<div className='MyProfileMain'>
					<div className='EditProfile'>
						<div className='InputBlockProfile'>
							<div className='Pyp'>
								<input type='text' placeholder='Ім`я' /> <Edit />
							</div>
							<div className='Pyp'>
								<input type='text' placeholder='Пошта' /> <Edit />
							</div>
							<div className='Pyp'>
								<input type='password' placeholder='Пароль' /> <Edit />
							</div>
						</div>
					</div>
					<div className='VerticlaLine'></div>
					<div >
						<div className='TicketBlockMain'>
							<Ticket/>
							<Ticket/>
							<Ticket/>
							<Ticket/>						
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CustomerCab
