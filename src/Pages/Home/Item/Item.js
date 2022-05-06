import React from 'react';
import './Item.css'

const Item = ({ item }) => {
    const { name, img, price, quantity, supplierName, description } = item;
    return (
        <div className='item-info'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price : {price}</p>
            <p>Quantity : {quantity}</p>
            <p>Supplier Name: {supplierName}</p>
            <p> <small> {description}</small></p>
            <button>Update</button>

        </div>
    );
};

export default Item;