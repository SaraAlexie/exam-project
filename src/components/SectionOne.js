/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import CantLoad from "./CantLoad";

const SectionOne = () => {
    const eventGrid = css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        max-width: 65em;
        margin: 1em auto 0;
        gap: 1em;
    `;

    const eventImg = css`
        width: 15em;
        margin: 0 auto;
    `;

    const relative = css`
        position: relative;
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

    const images = [
        {
            id: 1,
            image: "./assets/content-img/thumb1.jpg",
            description: "Night Club",
            icon: "./assets/icon/favicon.png",
            content:
                "I'm baby vegan echo park organic intelligentsia. Chia seitan poke, ugh ennui gochujang +1 franzen slow-carb master cleanse tumblr...",
        },
        {
            id: 2,
            image: "./assets/content-img/reastaurant_1.jpg",
            description: "Restaurant",
            icon: "./assets/icon/favicon.png",
            content:
                "I'm baby vegan echo park organic intelligentsia. Chia seitan poke, ugh ennui gochujang +1 franzen slow-carb master cleanse tumblr...",
        },
        {
            id: 3,
            image: "./assets/content-img/thumb2.jpg",
            description: "Bar",
            icon: "./assets/icon/favicon.png",
            content:
                "I'm baby vegan echo park organic intelligentsia. Chia seitan poke, ugh ennui gochujang +1 franzen slow-carb master cleanse tumblr...",
        },
    ];

    return images ? (
        <section>
            <ul css={eventGrid}>
                {images.map((img) => (
                    <li css={relative} key={img.id}>
                        <motion.div
                            css={overlay}
                            whileHover={{ opacity: 0.85 }}
                        >
                            <article css={article}>
                                <img css={icon} src={img.icon} alt="Icon" />
                                <h3 css={heading}>{img.description}</h3>
                                <p>{img.content}</p>
                            </article>
                        </motion.div>
                        <img
                            css={eventImg}
                            src={img.image}
                            alt={img.description}
                        />
                    </li>
                ))}
            </ul>
        </section>
    ) : (
        <CantLoad title="main events" />
    );
};

export default SectionOne;
