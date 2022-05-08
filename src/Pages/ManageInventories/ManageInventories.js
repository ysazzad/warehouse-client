import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import './ManageInventories.css'

const ManageInventories = () => {

    const [items, setItems] = useItems()
    const handleDelete = id => {
        const proceed = window.confirm("are you sure want to delete?")
        if (proceed) {
            const url = `http://localhost:5000/items/${id}`
            console.log(url);
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id)
                    setItems(remaining)
                })

        }
    }
    return (
        <div>
            <h2 className='text-center mt-3' style={{ color: "orange" }}>Manage Inventories</h2>
            <Link to="/add" className='text-center'> <button className=' btn btn-dark'>Add New Item</button></Link>
            <div className='manage-details'>
                {
                    items.map(item => <div key={item._id} className="details">
                        <h4>{item.name}</h4>
                        <p>{item.price}</p>
                        <button className='btn btn-danger' onClick={() => handleDelete(items._id)}>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;