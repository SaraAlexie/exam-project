/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Information from "./Information";
import StayConnected from "./StayConnected";

const Footer = () => {
    const footer = css`
        margin-top: 3em;
    `;

    return (
        <footer css={footer}>
            <Information />
            <StayConnected />
        </footer>
    );
};

export default Footer;
