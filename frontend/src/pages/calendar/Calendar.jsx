import React from 'react'
import './Calendar.css'
import ItemBlock from '../../components/itemBlock/ItemBlock'
import Search from '../../components/search/Search'

const Calendar = () => {
	return (
		<div>
			<div className='search_calendar'>
				<Search />
			</div>
			<div className='travels_calendar'>
				<ItemBlock />
				<ItemBlock />
				<ItemBlock />
				<ItemBlock />
				<ItemBlock />
				<ItemBlock />
				<ItemBlock />
				<ItemBlock />
				<ItemBlock />
				<ItemBlock />
			</div>
		</div>
	)
}

export default Calendar
