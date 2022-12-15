/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState, useContext } from "react";
import { DimensionContext } from "../contexts/DimensionContext";
import { Animated } from "react-animated-css";
import { useInView } from "react-intersection-observer";
import StyledHeading from "../styles/StyledHeading";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import CantLoad from "./CantLoad";
import GalleryBtn from "./GalleryBtn";
import GalleryImgs from "./GalleryImgs";

const Gallery = () => {
    const [gallery, setGallery] = useState(false);
    const { dimension } = useContext(DimensionContext);

    const imgList = css`
        max-width: 65em;
        margin: 1em auto;
        display: ${!gallery ? "grid" : "none"};
        grid-template-columns: repeat(7, 1fr);
        list-style: none;
        @media (max-width: 600px) {
            display: ${!gallery ? "block" : "none"};
            text-align: center;
        }
    `;

    const [images, setImages] = useState();
    const { ref, inView } = useInView();

    useEffect(() => {
        axios(`http://localhost:4000/gallery`).then((response) =>
            setImages(response.data)
        );
    }, []);

    return images ? (
        <section>
            <StyledHeading title="night club gallery" />
            {dimension.width > 600 ? (
                <ul css={imgList} ref={ref}>
                    {images?.map((image) =>
                        inView ? (
                            <Animated key={image.id} animationIn="fadeInLeft">
                                <GalleryImgs image={image} gallery={gallery} />
                            </Animated>
                        ) : (
                            <GalleryImgs image={image} gallery={gallery} />
                        )
                    )}
                </ul>
            ) : (
                <ul css={imgList} ref={ref}>
                    {images?.slice(0, 5).map((image) =>
                        inView ? (
                            <Animated key={image.id} animationIn="fadeInLeft">
                                <GalleryImgs image={image} gallery={gallery} />
                            </Animated>
                        ) : (
                            <GalleryImgs image={image} gallery={gallery} />
                        )
                    )}
                </ul>
            )}
            {gallery && (
                <Carousel>
                    {images?.map((image) => (
                        <GalleryImgs image={image} gallery={gallery} />
                    ))}
                </Carousel>
            )}
            <GalleryBtn gallery={gallery} setGallery={setGallery} />
        </section>
    ) : (
        <CantLoad title="gallery" />
    );
};

export default Gallery;
