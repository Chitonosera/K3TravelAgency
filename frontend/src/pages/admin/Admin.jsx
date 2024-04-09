import React from 'react';
import './Admin.css';
import ItemBlock from '../../components/itemBlock/ItemBlock';
import AddTour from '../../components/addTour/AddTour';
import EditTours from '../../components/editTours/EditTours'

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
  
  const [clickAddTour, setClickAddTour] = React.useState(false)
	const [clickEditTour, setClickEditTour] = React.useState(false)
	const handleAddTourClick = () => {
		setClickAddTour(true)
		setClickEditTour(false)
	}

	const handleEditTourClick = () => {
		setClickEditTour(true)
		setClickAddTour(false)
	}

  return (
		// <div className="admin_page">
		//   <AdminProductList />

		//   <div className="tour-form">
		//     <label>Назва туру:</label>
		//     <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
		//     <br />
		//     <label>File:</label>
		//     <input type="file" onChange={(e) => setFile(e.target.files[0])} />
		//     <br />
		//     <label>Date:</label>
		//     <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
		//     <br />
		//     <label>Price:</label>
		//     <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
		//     <br />
		//     <label>Seats:</label>
		//     <input type="text" value={seats} onChange={(e) => setSeats(e.target.value)} />
		//     <br />

		//     <button onClick={addProduct}>Додати тур</button>
		//   </div>
		// </div>

		<>
			<div className='admin_page'>
				<div className='admin_panel'>
					<div className='AdminButton'>
						<button onClick={handleAddTourClick}>Додати подорож</button>
						<button onClick={handleEditTourClick}>Редагувати подорож</button>
					</div>
					<div className='panels'>
						{handleAddTourClick}
						{clickAddTour ? <AddTour /> : ''}
						{handleEditTourClick}
						{clickEditTour ? <EditTours /> : ''}
					</div>
				</div>

				<div className='AdminInfo'>
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
		</>
	)
};

export default Admin;
