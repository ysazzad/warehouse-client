import React from 'react';
import { Link } from 'react-router-dom';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>

            <Items></Items>
            <Link to="/manage"><button>Manage Inventories</button></Link>

        </div>
    );
};

export default Home;