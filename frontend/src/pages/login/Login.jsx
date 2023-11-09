import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/');
    }
  }, [])

  const login = async () => {
    let item={email,password};

    let result = await fetch('http://localhost:8000/api/login',{
      method: 'POST',
      body: JSON.stringify(item),
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
    <div className="form-container sign-in-container">
        <form action="#">
            <h1>Увійти</h1>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className='form_input' type="email" placeholder="Email" />
            <input onChange={(e) => setPassword(e.target.value)} value={password} className='form_input' type="password" placeholder="Password" />
            <button onClick={login} className='form_btn'>Увійти</button>
        </form>
    </div>
  )
}

export default Login;
