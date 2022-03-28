/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const CantLoad = ({ title }) => {
    const message = css`
        max-width: 35em;
        margin: 2em auto;
        text-align: center;
    `;

    return (
        <article css={message}>
            <h2>We're so sorry!</h2>
            <p>The {title} can't be loaded at the moment</p>
        </article>
    );
};

export default CantLoad;
