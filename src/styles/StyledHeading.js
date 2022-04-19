/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const StyledHeading = ({ title }) => {
    const heading = css`
        text-align: center;
        padding-top: 1em;
    `;

    const headingH2 = css`
        margin: 0;
        font-weight: 500;
        text-transform: uppercase;
        color: #ffffff;
    `;

    return (
        <section css={heading}>
            <h2 css={headingH2}>{title}</h2>
            <img src="/assets/bottom_line2.png" alt="Underline" />
        </section>
    );
};

export default StyledHeading;
