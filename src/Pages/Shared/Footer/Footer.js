
import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className='text-center mt-5 bg-dark  p-4'>
            <p style={{ color: "#C4E538" }}> &copy; {year} <span style={{ color: "orange" }}>bikeBD</span> </p>

        </footer>
    );
};

export default Footer;
