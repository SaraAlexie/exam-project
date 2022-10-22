/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Banner = ({ title }) => {
    const background = css`
        background-image: url("./assets/bg/footerbg.jpg");
        background-size: cover;
        width: 100%;
        height: 10em;
        @media (max-width: 600px) {
            height: 15em;
        }
    `;

    const overlay = css`
        background-color: black;
        opacity: 0.85;
        height: 100%;
        width: 100%;
        position: relative;
    `;

    const absolute = css`
        text-transform: uppercase;
        position: absolute;
        z-index: 10;
        text-align: center;
        top: 32%;
        width: 100%;
        margin: 0 auto;
        @media (max-width: 600px) {
            top: 40%;
        }
    `;

    const noSpace = css`
        margin: 0 auto;
        padding: 0;
    `;

    return (
        <header css={background}>
            <div css={overlay}>
                <div css={absolute}>
                    <h1 css={noSpace}>{title}</h1>
                    <img
                        css={noSpace}
                        src="./assets/bottom_line2.png"
                        alt="Underline"
                    />
                </div>
            </div>
        </header>
    );
};

export default Banner;

/**
 * 
 * <div css={absolute}>
                <h1 css={noSpace}>{title}</h1>
                <img
                    css={noSpace}
                    src="./assets/bottom_line2.png"
                    alt="Underline"
                />
            </div>
 */
