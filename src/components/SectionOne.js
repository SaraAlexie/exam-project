/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CantLoad from "./CantLoad";
import { useContext } from "react";
import ImgCard from "./ImgCard";
import { ImagesContext } from "../contexts/ImagesContext";

const SectionOne = () => {
    const eventGrid = css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        max-width: 65em;
        margin: 1em auto 0;
        gap: 1em;

        @media (max-width: 600px) {
            display: block;
        }
    `;

    const { images } = useContext(ImagesContext);

    return images ? (
        <section>
            <ul css={eventGrid}>
                {images.map((img) => (
                    <ImgCard img={img} key={img.id} />
                ))}
            </ul>
        </section>
    ) : (
        <CantLoad title="main events" />
    );
};

export default SectionOne;
