/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

const SectionSix = ({ testemony }) => {
    const listItem = css`
        list-style: none;
        width: 50em;
        height: 100%;
        margin: 0 auto;
        color: #ffffff;
        text-align: center;
    `;

    const listImg = css`
        height: 10em;
        width: 10em;
    `;

    const icons = css`
        width: 10em;
        margin: 0 auto;
        display: flex;
        justify-items: center;
        color: #ffffff;
    `;

    const item = css`
        align-self: center;
        margin: 0 0.5em;
        padding: 0.25em;
        border: solid 2px #ffffff;
    `;

    return (
        <li css={listItem}>
            <img
                css={listImg}
                src={testemony.asset.url}
                alt="Testemony profile"
            />
            <h3>{testemony.name}</h3>
            <p>{testemony.content}</p>
            <div css={icons}>
                <FaFacebookF css={item} />
                <FaTwitter css={item} />
                <FaGooglePlusG css={item} />
            </div>
        </li>
    );
};

export default SectionSix;
