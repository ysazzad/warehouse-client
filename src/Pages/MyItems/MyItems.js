import React, { useState } from 'react';
import useItems from '../../hooks/useItems';

const MyItems = () => {
    const [items, setItems] = useItems()
    const handleDelete = id => {
        // console.log(id);
        const proceed = window.confirm("are you sure want to delete?")
        if (proceed) {
            const url = `https://warehouse-server-zlaq.onrender.com/items/${id}`
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
            <h2 className='text-center mt-3' style={{ color: "orange" }}>My Items </h2>
            <div className='manage-details '>
                {
                    items.map(item => <div key={item._id} className="">
                        <img style={{ width: "100px" }} src={item.img} alt="" />
                        <h4>{item.name}</h4>

                        <button className='btn btn-danger' onClick={() => handleDelete(item._id)}>Delete</button>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;