/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "./EventCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    const [autoPlay, setAutoPlay] = useState(true);
    const [events, setEvents] = useState();

    useEffect(() => {
        axios(`http://localhost:4000/events`).then((response) =>
            setEvents(response.data)
        );
    }, []);

    return events ? (
        <section css={eventList}>
            <Carousel
                responsive={responsive}
                infinite={true}
                showDots={true}
                arrows={false}
                autoPlay={autoPlay}
                onMouseOver={() => setAutoPlay(false)}
            >
                {events ? (
                    events?.map((event) => (
                        <ul key={event.id}>
                            <EventCard event={event} />
                        </ul>
                    ))
                ) : (
                    <p>Can't load events at the moment...</p>
                )}
            </Carousel>
        </section>
    ) : (
        <CantLoad title="events" />
    );
};

export default SectionTwo;
