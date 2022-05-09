
import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className='text-center bg-dark  p-4 detail'>
            <p style={{ color: "#C4E538" }}> &copy; {year} <span style={{ color: "orange" }}>bikeBD</span> </p>

        </footer>
    );
};

export default Footer;
