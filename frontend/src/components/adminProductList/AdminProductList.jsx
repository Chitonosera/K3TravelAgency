import React, { useEffect, useState } from 'react';

const AdminProductList = () => {
  const [data, setData] = useState([]);

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
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
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
              <button className="tool_panel" type="button">
                V
              </button>
              <button type="button">
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminProductList;
