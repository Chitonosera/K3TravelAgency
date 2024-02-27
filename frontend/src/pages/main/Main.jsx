import React from 'react'

import './Main.css'
import Search from '../../components/search/Search'
import Sort from '../../components/sort/Sort'
import ItemBlock from '../../components/itemBlock/ItemBlock'
import BasicDemo from '../../components/Carousel/BasicDemo'

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
			<div className='travels_pyri_pyri'>
				<h1>Подорожі</h1>
				<ItemBlock />
				<ItemBlock />
				<ItemBlock />
			</div>
		</main>
	)
}
export default Main
