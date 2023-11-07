import React from 'react'
import './TravelDescription.css'

const TravelDescription = () => {
  return (
    <main className="travel_page">

        <div className="travel_baner">
            <div className="travel_info">
                <h1 className='travel_title'>Назва подорожі</h1>
                <h2 className='travel_subtitle'>Місце подорожі</h2>   
                <h2 className='travel_price'>100$</h2> 
                <p className='travel_dates'>Дата та час подорожі</p>       
                <button className="order_tour">Забронювати місця</button>  
            </div>
        </div>

        <div className="additional_services">
          <div className='additional_info'>Проживання в готелі</div>
          <div className='additional_info'>Екскурсійний супровід</div>
          <div className='additional_info'>Організаційна підтримка до, під час подорожі</div>
          <div className='additional_info'>Особисті витрати</div>
          <div className='additional_info'>Харчування</div>
          <div className='additional_info'>Додатковий трансфер в аеропорт</div>
        </div>
    </main>

        
  )
}

export default TravelDescription;
