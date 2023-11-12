import React from 'react';
import AdminProductList from '../../components/adminProductList/adminProductList';

import './Admin.css';

const Admin = () => {
  const [name, setName] = React.useState('');
  const [file, setFile] = React.useState(null);
  const [date, setDate] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [seats, setSeats] = React.useState('');

  const addProduct = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);
    formData.append('date', date);
    formData.append('price', price);
    formData.append('seats', seats);

    let result = await fetch('http://localhost:8000/api/addproduct', {
      method: 'POST',
      body: formData,
    });
    alert('Has been saved');
  };

  return (
    <div className="admin_page">
      <AdminProductList />

      <div className="tour-form">
        <label>Назва туру:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>File:</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <br />
        <label>Date:</label>
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
        <br />
        <label>Price:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        <br />
        <label>Seats:</label>
        <input type="text" value={seats} onChange={(e) => setSeats(e.target.value)} />
        <br />

        <button onClick={addProduct}>Додати тур</button>
      </div>
    </div>
  );
};

export default Admin;
