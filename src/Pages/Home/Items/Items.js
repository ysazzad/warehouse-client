import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`items.json`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h2>Items </h2>
            <div className="container">
                {
                    items.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>

        </div>
    );
};

export default Items;