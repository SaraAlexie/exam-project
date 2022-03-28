/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SectionEight from "./SectionEight";

const Subscribe = () => {
    const subSection = css`
        max-width: 65em;
        margin: 0 auto;
        padding: 2em 0;
        text-align: center;
        & h2,
        p {
            margin: 0;
        }
    `;

    return (
        <section css={subSection}>
            <h2>WANT THE LATEST NIGHTCLUB NEWS?</h2>
            <p>Subscribe to our newsletter and never miss an event</p>
            <SectionEight />
        </section>
    );
};

export default Subscribe;
