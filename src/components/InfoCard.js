/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoLocationSharp } from "react-icons/io5";
import { MdSmartphone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { BsGlobe } from "react-icons/bs";

const InfoCard = () => {
    const infoCard = css`
        width: 100%;
        height: 15em;
        background-color: #ff2a70;
        padding-left: 1.5em;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    `;

    const infoArticle = css`
        display: flex;
        align-items: center;
        color: #ffffff;
    `;

    const infoIcon = css`
        font-size: 2em;
        margin-right: 1em;
    `;

    const text = css`
        max-width: 10em;
    `;

    return (
        <div css={infoCard}>
            <article css={infoArticle}>
                <IoLocationSharp css={infoIcon} />
                <p css={text}>
                    PO Box 16122 Collins Street, West Victoria, 8007 Australia
                </p>
            </article>
            <article css={infoArticle}>
                <MdSmartphone css={infoIcon} />
                <p>+61 8 7804 6310</p>
            </article>
            <article css={infoArticle}>
                <IoIosMail css={infoIcon} />
                <p>@Hsoft.com</p>
            </article>
            <article css={infoArticle}>
                <BsGlobe css={infoIcon} />
                <p>www.Hsoft.com</p>
            </article>
        </div>
    );
};

export default InfoCard;
