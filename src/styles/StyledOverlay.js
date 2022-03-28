/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const StyledOverlay = () => {
    const background = css`
        background-image: url("./assets/bg/footerbg.jpg");
        background-size: cover;
        width: 100%;
        height: 25em;
        position: relative;
    `;

    const overlay = css`
        background-color: black;
        opacity: 0.85;
        height: 100%;
        width: 100%;
        position: absolute;
    `;

    return (
        <section css={background}>
            <div css={overlay}></div>
        </section>
    );
};

export default StyledOverlay;
