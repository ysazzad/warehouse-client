import React, { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://warehouse-server-zlaq.onrender.com/items`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
}
export default useItems