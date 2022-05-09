import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import './ManageInventories.css'

const ManageInventories = () => {

    const [items, setItems] = useItems()
    // const [items, setItems] = useState([])
    // console.log(items);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/items`)
    //         .then(res => res.json())
    //         .then(data => setItems(data))
    // }, [])

    const handleDelete = id => {
        // console.log(id);
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
            <div className='text-center m-3' >
                <Link to="/add" > <button style={{ color: "orange" }} className=' btn btn-dark'>Add New Item</button></Link>
            </div>
            <div className='manage-details '>
                {
                    items.map(item => <div key={item._id} className="">
                        <img style={{ width: "100px" }} src={item.img} alt="" />
                        <h4>{item.name}</h4>
                        {/* <p>{item.price}</p> */}
                        <button className='btn btn-danger' onClick={() => handleDelete(item._id)}>Delete</button>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;