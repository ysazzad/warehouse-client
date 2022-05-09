import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../../AboutUs/AboutUs';
import Clients from '../../Clients/Clients';
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
            <AboutUs></AboutUs>
            <Clients></Clients>

        </div>
    );
};

export default Home;