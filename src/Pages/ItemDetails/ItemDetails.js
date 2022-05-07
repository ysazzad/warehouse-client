import React from 'react';
import { useParams } from 'react-router-dom'

const ItemDetails = () => {
    const { itemId } = useParams()
    return (
        <div>
            <h1>Details: {itemId} </h1>
        </div>
    );
};

export default ItemDetails;