/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/eventslider.css";
import EventCard from "./EventCard";
import CantLoad from "./CantLoad";

const SectionTwo = () => {
    const eventList = css`
        max-width: 65em;
        margin: 0 auto;
        padding-bottom: 2.5em;
        @media (max-width: 600px) {
            max-width: 30rem;
            margin: 0 auto;
            padding: 0 0.5rem;
        }
    `;

    const [events, setEvents] = useState();

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

    return events ? (
        <section css={eventList}>
            <Slider {...settings}>
                {events?.map((event) => (
                    <ul key={event.id}>
                        <EventCard event={event} />
                    </ul>
                ))}
            </Slider>
        </section>
    ) : (
        <CantLoad title="events" />
    );
};

export default SectionTwo;
