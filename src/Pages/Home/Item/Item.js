import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const { _id, name, img, price, quantity, supplierName, description } = item;
    const navigate = useNavigate()
    const handleItemDetails = (_id) => {
        navigate(`/item/${_id}`)

    }
    return (
        <div className='item-info'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price : {price}</p>
            <p>Quantity : {quantity}</p>
            <p>Supplier Name: {supplierName}</p>
            <p> <small> {description}</small></p>
            <button onClick={() => handleItemDetails(_id)}>Update</button>

        </div>
    );
};

export default Item;