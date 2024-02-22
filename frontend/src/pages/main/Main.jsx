import React from 'react'

import './Main.css'
import Search from '../../components/search/Search'
import Sort from '../../components/sort/Sort'
import ItemBlock from '../../components/itemBlock/ItemBlock'
import { BasicDemo } from '../../components/Carousel/BasicDemo'

const Main = () => {
	return (
		<main className='travels'>
			<div className='travels_top'>
				<h4 className='travels_overtitle'></h4>
				<h1 className='travels_title'>Подорожі</h1>
				<div className='travels_sidebar'>
					<BasicDemo />
				</div>
			</div>
		</main>
	)
}
export default Main
