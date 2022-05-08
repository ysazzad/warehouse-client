import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './ItemDetails.css'

const ItemDetails = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState({})
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        const url = `http://localhost:5000/items/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    const deliveredBtn = () => {
        console.log(item.quantity);
        const newQuantity = (item.quantity) - 1
        setQuantity(newQuantity)
        console.log(quantity);
    }
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
                <button onClick={deliveredBtn}>Delivered</button> <br /> <br />
                <label htmlFor="">Restock </label>
                <input type="number" name="" id="" />

            </div>
        </div>
    );
};

export default ItemDetails;