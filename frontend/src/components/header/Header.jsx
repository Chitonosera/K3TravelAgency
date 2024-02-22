import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import './Header.css'

const Header = () => {
	const user = JSON.parse(localStorage.getItem('user-info'))
	const navigate = useNavigate()
	const location = useLocation()

	const navMenu = [
		{ name: 'Головна', link: '/' },
		{ name: 'Подорожі', link: '/calendar' },
		{ name: 'Політика праці', link: '/contract' },
		{ name: 'Про нас ', link: '/contacts' },
	]

	const logOut = () => {
		localStorage.clear()
		navigate('/singIn')
	}

	const isActive = link => location.pathname === link

	return (
		<header className='header'>
			<nav className='nav'>
				<Link to='/'>
					<div className='logo'>
						<img className='nav_logo' src='../Vector.svg' alt='' />
						<p className='logo_text'>
							<span>K3</span>Travel agency
						</p>
					</div>
				</Link>

				<ul className='nav_list'>
					{navMenu.map((obj, index) => (
						<Link to={obj.link} key={index}>
							<li className='nav_list'>
								<p className={isActive(obj.link) ? 'activePage' : 'nav_link'}>
									{obj.name}
								</p>
							</li>
						</Link>
					))}

					<Link to='admin'>
						<p className='nav_link'>Admin</p>
					</Link>
				</ul>
				<ul className='nav_list'>
					{localStorage.getItem('user-info') ? (
						<div className='singin'>
							<Link to='customerCab'>
								<li className='nav_item'>
									<p
										className={
											isActive('/customerCab') ? 'activePage' : 'nav_link'
										}
									>
										{user && user.name}
									</p>
								</li>
							</Link>
							<Link to='customerCab'>
								<img className='nav_acc' src='../account_logo.svg' alt='' />
							</Link>
							<Link to='singIn'>
								<li className='nav_item'>
									<p className='nav_link' onClick={logOut}>
										LogOut
									</p>
								</li>
							</Link>
						</div>
					) : (
						<div className='singin'>
							<Link to='singin'>
								<li className='nav_item'>
									<p
										className={isActive('/singin') ? 'activePage' : 'nav_link'}
									>
										<img className='' src='../account_logo.svg' />
									</p>
								</li>
							</Link>
						</div>
					)}
				</ul>
			</nav>
		</header>
	)
}

export default Header
