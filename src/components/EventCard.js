/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";

const EventCard = ({ event }) => {
    const listItem = css`
        list-style: none;
        margin-bottom: 2em;
        position: relative;
        @media (max-width: 600px) {
            margin-bottom: 1.2rem;
        }
    `;

    const eventImg = css`
        height: 18em;
        width: 100%;
        padding: 0;
        margin: 0;
    `;

    const eventInfo = css`
        background-color: #ff2a70;
        padding: 0 0 0 1em;
        margin: 0;
    `;

    const overlay = css`
        display: block;
        background-color: black;
        border-top: 1px solid #ff2a70;
        border-bottom: 1px solid #ff2a70;
        opacity: 0;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        position: absolute;
    `;

    const bookBtn = css`
        border: solid 1px #ff2a70;
        color: #ffffff;
        background-color: #ff2a70;
        height: 3em;
        width: 8em;
        font-weight: bold;
        position: absolute;
        top: 15%;
        left: 38%;
    `;

    const overlayText = css`
        position: absolute;
        bottom: 0;
        color: #ffffff;
        background-color: #030203;
        padding: 0 1em;
        opacity: 1;
    `;

    return (
        <li css={listItem}>
            <motion.div css={overlay} whileHover={{ opacity: 0.85 }}>
                <button css={bookBtn}>Book Now</button>
                <article css={overlayText}>
                    <h3>Night Club</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A, voluptatem blanditiis! Blanditiis quae neque
                        deserunt.
                    </p>
                </article>
            </motion.div>
            <img css={eventImg} src={event.asset.url} alt="Event" />
            <p css={eventInfo}>
                {event.date.substring(0, 10)} {event.location}
            </p>
        </li>
    );
};

export default EventCard;
