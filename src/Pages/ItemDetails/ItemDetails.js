
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './ItemDetails.css'

const ItemDetails = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState({})
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        const url = `https://quiet-island-26843.herokuapp.com/items/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                setQuantity(data.quantity)
            })
    }, [])

    const deliveredBtn = () => {
        console.log(item.quantity);
        const newQuantity = (quantity) - 1
        setQuantity(newQuantity)
        console.log(newQuantity);
        // send data to the server
        const url = `https://quiet-island-26843.herokuapp.com/items/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: newQuantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);


            })
    }

    const restockInput = () => {

        const newQuantity = parseInt(quantity) + 1
        setQuantity(newQuantity)

        // send data to the server
        const url = `https://quiet-island-26843.herokuapp.com/items/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: newQuantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert("please check the quantity")


            })

    }


    return (
        <div>
            <h1 className='text-center' style={{ color: "orange" }}>Details</h1>
            <div className='details'>
                <div>
                    <img src={item.img} alt="" />
                </div>
                <div >
                    <h4>Name: {item.name} </h4>
                    <p>Id: {item._id} </p>
                    <p>Price: {item.price} </p>
                    <p>Quantity: {quantity} </p>
                    <p>Sold: {item.sold} </p>
                    <p>Supplier Name: {item.supplierName} </p>
                    <p><small>Description: {item.description}</small></p>
                    <button style={{ color: "orange" }} className='btn bg-dark' onClick={deliveredBtn}>Delivered</button> <br /> <br />
                    <label htmlFor="" style={{ color: "orange" }} className="p-2">Restock </label>
                    <input type="number" name="" id="" onClick={restockInput} />

                </div>
            </div>

        </div>
    );
};

export default ItemDetails;