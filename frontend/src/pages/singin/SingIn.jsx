import React from 'react'
import { useNavigate } from 'react-router-dom';


import './SingIn.css'

import Login from '../login/Login';

import { customerService } from '../../services/customer';

const SingIn = () => {
  
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [number, setNumber] = React.useState('');

  const navigate = useNavigate();

  const [isRightPanelActive, setIsRightPanelActive] = React.useState(false);

  const handleGhostButtonClick = () => {
    setIsRightPanelActive(prevState => !prevState);
  }

  const singUp = async () => {
    
    let result = await fetch('http://localhost:8000/api/register',{
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        number: number,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json',
      },
    })
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    navigate('/');
  }

  return (
    <div className="singin_page">
      <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Створити акаунт</h1>
            <input className='form_input' type="text" placeholder="Name" 
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input className='form_input' type="email" placeholder="Email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input className='form_input' type="password" placeholder="Password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <input className='form_input' type="number" placeholder="Number" 
              value={number}
              onChange={e => setNumber(e.target.value)}
            />
            <button className='form_btn'
              onClick={singUp}
            >Sign Up</button>
          </form>
        </div>
        <div className="main_login">
            
            <Login />

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>З поверненням!</h1>
                        <p>Щоб залишатися на зв'язку з нами, увійдіть,
                            <br/> використовуючи свої дані</p>
                        <button className='form_btn ghost' onClick={handleGhostButtonClick}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Привіт друже!</h1>
                        <p>Введіть свої дані та продовжуйте подорож з нами</p>
                        <button className='form_btn ghost' onClick={handleGhostButtonClick}>Sign Up</button>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default SingIn;