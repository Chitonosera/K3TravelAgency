import React from 'react'

import './Main.css'
import Search from '../../components/search/Search'
import ItemBlock from '../../components/itemBlock/ItemBlock'
import BasicDemo from '../../components/Carousel/BasicDemo'
import HowWeWork from '../../components/howWeWork/HowWeWork'
import LinkTravels from '../../../public/svg/LinkTravels'
import SupportBlock from '../../components/supportBlock/SupportBlock'
import { Link } from 'react-router-dom'

const Main = () => {
	return (
		<main className='travels'>
			<div className='travels_top'>
				<div className='travels_titles'>
					<h4>Найкращі подорожі в нас</h4>
					<h1>
						Пізнавай всі
						<br /> кутки країни
						<br /> <span>разом з нами</span>
					</h1>
				</div>
				<Search />
			</div>
			<BasicDemo className='travels_carousel' />
			<h1 className='mtxt'>Подорожі</h1>
			<div className='travels_card'>
				<ItemBlock />
				<ItemBlock />
				<ItemBlock />
				<div className='collection_card'>
					<Link to={'./calendar'}>
						<p>
							Побачити всі <br></br> подорожі
						</p>
					</Link>

					<button className='link_travels'>
						<LinkTravels />
					</button>
				</div>
			</div>
			<div className='politic_pyri'>
				<div className='politic'>
					<h2 id='txtp'>Як ми працюємо</h2>
					<h1>Знаходимо найкраще для вас</h1>
					<HowWeWork />
					<HowWeWork />
					<HowWeWork />
					<HowWeWork />
				</div>
				<img id='image_politic' src='./public/HowWeWork.png'></img>
			</div>
			<div className='Support'>
				<h1 id='contacts' className='mtxt'>
					Підтримка
				</h1>
				<SupportBlock />
			</div>
		</main>
	)
}
export default Main
