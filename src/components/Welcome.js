/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SectionOne from "./SectionOne";

const Welcome = () => {
    const section = css`
        padding: 2.5em 0;
    `;

    const heading = css`
        text-align: center;
    `;

    const headingH1 = css`
        margin: 0;
        font-size: 1.5em;
    `;

    const textColor = css`
        color: #ff2a70;
    `;

    return (
        <section css={section}>
            <section css={heading}>
                <h1 css={headingH1}>
                    WELCOME IN NIGHT<span css={textColor}>CLUB</span>
                </h1>
                <img src="./assets/bottom_line2.png" alt="Underline" />
            </section>
            <SectionOne />
        </section>
    );
};

export default Welcome;
