/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Location from "./Location";

const Information = () => {
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

    const theFront = css`
        padding: 2.5em 5.5em;
        position: absolute;
        z-index: 20;
    `;

    return (
        <section css={background}>
            <div css={overlay}></div>
            <section css={theFront}>
                <section>
                    <Location />
                </section>
            </section>
        </section>
    );
};

export default Information;
