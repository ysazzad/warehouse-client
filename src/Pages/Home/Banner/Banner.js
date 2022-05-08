
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img style={{ width: "100%", height: "600px" }}
                        src="https://www.bestbeginnermotorcycles.com/wp-content/uploads/2022/02/BBM-14-motorcycles-for-passenger-riding.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption >

                        <h1 style={{ color: "#EE5A24" }}>WELCOME TO THE MOST STUNNING BIKE DEALER WEBSITE </h1>

                        <h3>WE HAVE EVERYTHING ! YOUR BIKE NEEDS .</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: "100%", height: "600px" }}
                        src="https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343__340.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption >
                        <h1 style={{ color: "orange" }}>WELCOME TO THE MOST STUNNING BIKE DEALER WEBSITE</h1>

                        <h3 style={{ color: "white" }}>WE HAVE EVERYTHING ! YOUR BIKE NEEDS .</h3>

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </div>
    );
};

export default Banner;