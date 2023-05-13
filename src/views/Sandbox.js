import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/eventslider.css";

const Sandbox = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await axios.get("http://localhost:4000/events");
            setEvents(response.data);
        };
        fetchImages();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div style={{ margin: "10rem auto" }}>
            <Slider {...settings}>
                {events.map((event) => (
                    <div key={event.id}>
                        <img src={event.asset.url} alt="Description" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Sandbox;
