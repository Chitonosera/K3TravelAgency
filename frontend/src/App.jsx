import { useState } from 'react'
import {Route, Routes} from "react-router-dom";

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './pages/main/Main'
import Calendar from './pages/calendar/Calendar'
import Contract from './pages/contract/Contract'
import Contacts from './pages/contacts/Contacts'
import CustomerCab from './pages/customerCab/CustomerCab'
import SingIn from './pages/singin/SingIn'

import './App.css'
import TravelDescription from './pages/travelDes/TravelDescription';
import Admin from './pages/admin/Admin';


function App() {

  return (
    <div className='wrapper'>
      <Header />
      <div className="content">
        <Routes>
          <Route  path='/' element={<Main />}/>
          <Route  path='/calendar' element={<Calendar />}/>
          <Route  path='/contract' element={<Contract />}/>
          <Route  path='/contacts' element={<Contacts />}/>
          <Route  path='/customerCab' element={<CustomerCab />}/>
          <Route  path='/singin' element={<SingIn />}/>
          <Route  path='/travel' element={<TravelDescription />}/>
          <Route  path='/admin' element={<Admin />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
