import React, { useEffect, useState } from 'react';

const AdminProductList = () => {
  const [data, setData] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataResult = await fetch("http://localhost:8000/api/list");
        const jsonData = await dataResult.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleUpdateClick = (item) => {
    setSelectedProduct(item);
    setShowUpdateForm(true);
  };

  const updateProduct = () => {
    if (!selectedProduct) {
      return;
    }

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const dataResult =  await fetch("http://localhost:8000/api/product/"+props.match.params.id);
          const jsonData = await dataResult.json();
          setData(jsonData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);

    
    console.log("Update product with ID:", selectedProduct.id);
    // Reset state after update
    setShowUpdateForm(false);
    setSelectedProduct(null);
  }

  const deleteOperation = async (id) => {
    let result = await fetch("http://localhost:8000/api/delete/"+id,{
      method: 'DELETE'
    });
    result = await result.json();

  }

  return (
    <div className=''>
    {/* <table className="tour-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Назва туру</th>
          <th>Ціна</th>
          <th>Дата</th>
          <th>Місця</th>
          <th>Фото</th>
          <th>Інструменти</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.date}</td>
            <td>{item.seats}</td>
            <td><img className='product_img' src={"http://localhost:8000/" + item.file_path} alt="" /></td>
            <td>
              <span onClick={() => deleteOperation(item.id)} className='delete'>Delete</span>
              <span className='update'>Update</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table> */}

    {showUpdateForm && (
      <div className='upd_product'>
        <h1>UpdateProduct</h1>
        <label>Назва туру:</label>
        <input type="text" defaultValue={selectedProduct.name} />
        <label>Price:</label>
        <input type="text" defaultValue={selectedProduct.price} />
        <label>Date:</label>
        <input type="text" defaultValue={selectedProduct.date} />
        <label>Seats:</label>
        <input type="text" defaultValue={selectedProduct.seats} />
        <label>File:</label>
        <img src={"http://localhost:8000/" + selectedProduct.file_path} alt="" />

        <button onClick={updateProduct}>Update product</button>
      </div>
    )}

    <table className="tour-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Назва туру</th>
          <th>Ціна</th>
          <th>Дата</th>
          <th>Місця</th>
          <th>Фото</th>
          <th>Інструменти</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.date}</td>
            <td>{item.seats}</td>
            <td><img className='product_img' src={"http://localhost:8000/" + item.file_path} alt="" /></td>
            <td>
              <span onClick={() => deleteOperation(item.id)} className='delete'>Delete</span>
              <span onClick={() => handleUpdateClick(item)} className='update'>Update</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default AdminProductList;
