import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/items`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h2 style={{ color: "orange" }} className="text-center m-3"> Inventory Items </h2>
            <div className="container" id='items'>
                {
                    items.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>

        </div>
    );
};

export default Items;