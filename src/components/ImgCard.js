/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";

const ImgCard = ({ img }) => {
    const relative = css`
        position: relative;
        list-style: none;
        @media (max-width: 600px) {
            width: 17rem;
            margin: 0 auto 0.5rem;
        }
    `;

    const overlay = css`
        display: block;
        background-color: black;
        border-top: 1px solid #ff2a70;
        border-bottom: 1px solid #ff2a70;
        opacity: 0;
        height: 100%;
        width: 15em;
        margin: 0 auto;
        position: absolute;
    `;

    const article = css`
        padding: 0.5em;
        text-align: center;
    `;

    const icon = css`
        margin-top: 1em;
        border: solid 2px #ff2a70;
        border-radius: 0.5em;
        padding: 0.5em;
    `;

    const heading = css`
        text-transform: uppercase;
        color: #ff2a70;
        text-align: center;
    `;

    const eventImg = css`
        width: 15em;
        margin: 0 auto;
    `;

    return (
        <li css={relative} key={img.id}>
            <motion.div css={overlay} whileHover={{ opacity: 0.85 }}>
                <article css={article}>
                    <img css={icon} src={img.icon} alt="Icon" />
                    <h3 css={heading}>{img.description}</h3>
                    <p>{img.content}</p>
                </article>
            </motion.div>
            <img css={eventImg} src={img.image} alt={img.description} />
        </li>
    );
};

export default ImgCard;
