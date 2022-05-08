import React from 'react';
import { Link } from 'react-router-dom';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>

            <Items></Items>
            <div className='text-center m-4'>
                <Link to="/manage"><button style={{ background: "#C4E538" }} className="btn ">Manage Inventories</button></Link>
            </div>

        </div>
    );
};

export default Home;