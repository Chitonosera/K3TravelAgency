import React from 'react'
import './SupportBlock.css'
import SupportSvg from '../../../public/svg/SupportSvg'

function SupportBlock() {
	return (
		<div className='SupportBlock'>
			<div>
				<div className='Cont'>
					<SupportSvg />
					<h1 className='Stxt'>
						Поширені <br /> запитання
					</h1>
				</div>
				<p className='Tcont'>
					Якщо у вас залишилися питання, наші менеджери дадуть відповідь вам
				</p>

				<div className='InputBlock'>
					<input type='text' placeholder='Ваше ім’я' />
					<input type='email' placeholder='Ваш  Email' />
				</div>
			</div>
			<div className='kurwa'>
				<input type='text' placeholder='Ваше запитання' />
				<button className='BtnAccept' >Залишити заяву</button>
			</div>
		</div>
	)
}

export default SupportBlock
