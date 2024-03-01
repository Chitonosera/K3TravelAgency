import React from 'react'
import './Contacts.css'

const Contacts = () => {
	return (
		<div className='contacts'>
			<div className='contacts_content'>
				<h1 className='contacts_title'>Зв’язок з нами</h1>
				<div className='content_block'>
					<div className='content_txt'>
						<div className='img-bg'>
							<img className='content_img' src='./adress.png' alt='address' />
						</div>
						<h3 className='content_title'>Адреса</h3>
						<p className='content_info'>м. Коломия, вул. Чехова 20</p>
					</div>
					<div className='content_txt'>
						<div className='img-bg'>
							<img className='content_img' src='./email.png' alt='email' />
						</div>
						<h3 className='content_title'>Пошта</h3>
						<p className='content_info'>ourEmail@gmail.com</p>
					</div>
					<div className='content_txt'>
						<div className='img-bg'>
							<img className='content_img' src='./phonecall.png' alt='phone' />
						</div>
						<h3 className='content_title'>Телефон</h3>
						<p className='content_info'>+ 380 98 228 1339</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts
