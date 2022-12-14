/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Animated } from "react-animated-css";
import { useInView } from "react-intersection-observer";
import StyledHeading from "../styles/StyledHeading";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import CantLoad from "../components/CantLoad";
import GalleryBtn from "../components/GalleryBtn";

const OtherSandbox = () => {
    const [gallery, setGallery] = useState(false);

    const imgList = css`
        max-width: 65em;
        margin: 1em auto;
        display: ${!gallery ? "grid" : "none"};
        grid-template-columns: repeat(7, 1fr);
        list-style: none;
    `;

    const galleryImg = css`
        height: ${!gallery ? "5em" : "20em"};
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
            <ul css={imgList} ref={ref}>
                {images?.map((image) =>
                    inView ? (
                        <Animated key={image.id} animationIn="fadeInLeft">
                            <li key={image.id}>
                                <img
                                    css={galleryImg}
                                    src={image.asset.url}
                                    alt={image.description}
                                />
                            </li>
                        </Animated>
                    ) : (
                        <li key={image.id}>
                            <img
                                css={galleryImg}
                                src={image.asset.url}
                                alt={image.description}
                            />
                        </li>
                    )
                )}
            </ul>
            {gallery && (
                <Carousel>
                    {images?.map((image) => (
                        <li key={image.id}>
                            <img
                                css={galleryImg}
                                src={image.asset.url}
                                alt={image.description}
                            />
                        </li>
                    ))}
                </Carousel>
            )}
            <GalleryBtn gallery={gallery} setGallery={setGallery} />
        </section>
    ) : (
        <CantLoad title="gallery" />
    );
};

export default OtherSandbox;
