/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Banner = ({ title }) => {
    const background = css`
        background-image: url("./assets/bg/footerbg.jpg");
        background-size: cover;
        width: 100%;
        height: 10em;
        position: relative;
    `;

    const overlay = css`
        background-color: black;
        opacity: 0.85;
        height: 100%;
        width: 100%;
        position: absolute;
    `;

    const absolute = css`
        text-transform: uppercase;
        position: absolute;
        z-index: 10;
        text-align: center;
        top: 30%;
        left: 36%;
    `;

    const noSpace = css`
        margin: 0;
        padding: 0;
    `;

    return (
        <header css={background}>
            <div css={overlay}></div>
            <div css={absolute}>
                <h1 css={noSpace}>{title}</h1>
                <img
                    css={noSpace}
                    src="./assets/bottom_line2.png"
                    alt="Underline"
                />
            </div>
        </header>
    );
};

export default Banner;
