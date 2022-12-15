/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const GalleryImgs = ({ image, gallery }) => {
    const galleryImg = css`
        height: ${!gallery ? "5em" : "20em"};
        @media (max-width: 600px) {
            height: 12em;
            margin: 1em auto;
        }
    `;

    return (
        <li key={image.id}>
            <img
                css={galleryImg}
                src={image.asset.url}
                alt={image.description}
            />
        </li>
    );
};

export default GalleryImgs;
