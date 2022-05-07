import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './ItemDetails.css'

const ItemDetails = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/items/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div>
            <h1>Details</h1>
            <div className='details'>
                <img src={item.img} alt="" />
                <h4>Name: {item.name} </h4>
                <p>Id: {item._id} </p>
                <p>Price: {item.price} </p>
                <p>Quantity: {item.quantity} </p>
                <p>Sold: {item.sold} </p>
                <p>Supplier Name: {item.supplierName} </p>
                <p><small>Description: {item.description}</small></p>
                <button >Delivered</button>

            </div>
        </div>
    );
};

export default ItemDetails;