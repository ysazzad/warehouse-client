import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Items></Items>
            <div className='text-center m-4'>
                <Link to="/manage"><button style={{ background: "#EE5A24" }} className="btn ">Manage Inventories</button></Link>
            </div>

        </div>
    );
};

export default Home;