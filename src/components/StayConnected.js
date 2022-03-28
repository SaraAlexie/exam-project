/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Socials from "./Socials";

const StayConnected = () => {
    const wrapper = css`
        max-width: 65em;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    `;

    const footerText = css`
        font-size: smaller;
        color: #e0e0e0;
    `;

    return (
        <section css={wrapper}>
            <p css={footerText}>Stay Connected With Us Night Club</p>
            <Socials />
            <p css={footerText}>
                CopyRight @ 2018 NighClub psd template all right
            </p>
        </section>
    );
};

export default StayConnected;
