/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";

const Socials = () => {
    const icons = css`
        display: flex;
        color: #ffffff;
    `;

    const item = css`
        align-self: center;
        margin: 0 0.5em;
        padding: 0.25em;
        border: solid 2px #ffffff;
    `;

    return (
        <div css={icons}>
            <FaFacebookF css={item} />
            <FaTwitter css={item} />
            <FaGooglePlusG css={item} />
            <FaSkype css={item} />
            <FaBloggerB css={item} />
        </div>
    );
};

export default Socials;
