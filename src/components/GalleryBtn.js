/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const GalleryBtn = ({ gallery, setGallery }) => {
    const btnSection = css`
        text-align: center;
        margin-bottom: 2em;
    `;

    const viewBtn = css`
        border: solid 1px #ff2a70;
        color: #ffffff;
        background-color: #ff2a70;
        height: 3em;
        width: 8em;
        font-weight: bold;
        margin-bottom: 1em;
        cursor: pointer;
    `;

    return (
        <section css={btnSection}>
            <button css={viewBtn} onClick={() => setGallery(!gallery)}>
                {!gallery ? "View Gallery" : "Close Gallery"}
            </button>
        </section>
    );
};

export default GalleryBtn;
