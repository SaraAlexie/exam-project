/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import axios from "axios";
//import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Sandbox = () => {
    const [events, setEvents] = useState();

    useEffect(() => {
        axios(`http://localhost:4000/events`).then((response) =>
            setEvents(response.data)
        );
    }, []);

    events && console.log(events);

    return <h1>For fucks sake</h1>;
};

export default Sandbox;

/**
 * useEffect(() => {
        axios(`http://localhost:4000/events`).then((response) =>
            setEvents(response.data)
        );
    }, []);
 */

/**
 * const [allImages, setAllImages] = useState([]);
    const [imagesToDisplay, setImagesToDisplay] = useState([]);
    const [index, setIndex] = useState(1);
    const chunkSize = 2;

    useEffect(() => {
        setAllImages([
            { name: "Image 1", link: "/image1" },
            { name: "Image 2", link: "/image2" },
            { name: "Image 3", link: "/image3" },
            { name: "Image 4", link: "/image4" },
            { name: "Image 5", link: "/image5" },
            { name: "Image 6", link: "/image6" },
            { name: "Image 7", link: "/image7" },
            { name: "Image 8", link: "/image8" },
            { name: "Image 9", link: "/image9" },
            { name: "Image 10", link: "/image10" },
            { name: "Image 11", link: "/image11" },
        ]);
    }, []);

    useEffect(() => {
        setImagesToDisplay(
            allImages.slice(chunkSize * index - chunkSize, chunkSize * index)
        );
    }, [allImages, index]);

    const handleSubstractIndex = () => {
        setIndex((prevIndex) => prevIndex - 1);
    };
    const handleAddIndex = () => {
        setIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                }}
            >
                {imagesToDisplay.map((image) => (
                    <div
                        className="carousel"
                        key={image.link}
                        style={{ border: "1px solid orange" }}
                    >
                        {image.name}
                    </div>
                ))}
            </div>
            <button onClick={() => handleSubstractIndex()}>previous</button>
            <button onClick={() => handleAddIndex()}>next</button>
        </>
    );
 * 
 */
