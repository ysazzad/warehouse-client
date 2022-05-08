import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div id='aboutUs'>
            <div className='about '>
                <div>
                    <h3 style={{ color: "orange" }}>About Us</h3>
                    <p>
                        Everything you need to build an amazing dealership website. <br />
                        Bike Dealer is the most enticing, creative, modern and multipurpose  dealer Premium WordPress Theme. <br /> Suitable for any bike dealer websites, business or corporate websites. <br /> The Theme has been Created especially for automotive dealers, bike resellers, bike service stations, mechanic workshop and auto motor retailers
                    </p>

                </div>
                <div className='bike-img'>
                    <img src="https://i.pinimg.com/originals/8b/3a/ff/8b3aff4b45f9b4235fbab6a3ba22dc68.gif" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;