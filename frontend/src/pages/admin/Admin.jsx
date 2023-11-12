import React from 'react';

import './Admin.css';


const Admin = () => {

  const [name, setName] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [date, setDate] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [seats, setSeats] = React.useState('');
  const [services, setServices] = React.useState('');

  const addProduct = async () => {
    
    let result = await fetch('http://localhost:8000/api/addTour',{
      method: 'POST',
      body: JSON.stringify({
        name: name,
        country: country,
        date: date,
        price: price,
        seats: seats,
        services: services,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json',
      },
    })
    result = await result.json();
    localStorage.setItem("tour-info",JSON.stringify(result))
  }

  const [tours, setTours] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/getTour');
        const data = await response.json();
        setTours(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='admin_page'>

      <table className="tour-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Назва туру</th>
            <th>Країна</th>
            <th>Ціна</th>
            <th>Дата</th>
            <th>Місця</th>
            <th>Додаткові послуги</th>
            <th>Інструменти</th>
          </tr>
        </thead>

        <tbody>
          {tours.map((tour) => (
            <tr key={tour.id}>
              <td>{tour.id}</td>
              <td>{tour.name}</td>
              <td>{tour.country}</td>
              <td>{tour.price}</td>
              <td>{tour.date}</td>
              <td>{tour.places}</td>
              <td>{tour.additionalServices}</td>
              <td>
                <div className="tool_panel">
                  <button className="tool_panel" type="button">
                    <img alt="edit" />
                  </button>
                  <button type="button">
                    <img alt="delete" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>

      <div className="tour-form">
          <label>Назва туру:</label>
          <input 
            value={name}
            onChange={e => setName(e.target.value)}
            type="text" id="name" />
          <br />
          <label>Країна:</label>
          <input 
            value={country}
            onChange={e => setCountry(e.target.value)}
            type="text" id="country" />
          <br />
          <label>Дата:</label>
          <input 
            value={date}
            onChange={e => setDate(e.target.value)}
            type="text" id="date" />
          <br />
          <label>Ціна:</label>
          <input 
            value={price}
            onChange={e => setPrice(e.target.value)}
            type="text" id="price" />
          <br />
          <label>Місця:</label>
          <input 
            value={seats}
            onChange={e => setSeats(e.target.value)}
            type="text" id="seats"  />
          <br />
          <label>Додаткові послуги:</label>
          <input 
            value={services}
            onChange={e => setServices(e.target.value)}
            type="text" id="services" />
          <br />
          <button onClick={addProduct}>Додати тур</button>
        </div>
      
    </div>
  );
};

export default Admin;
