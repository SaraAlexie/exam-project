import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ImagesContext = createContext();

const ImagesProvider = ({ children }) => {
    const [images, setImages] = useState();

    useEffect(() => {
        axios("./assets/eventimages.json").then((response) =>
            setImages(response.data)
        );
    }, []);

    return (
        <ImagesContext.Provider value={{ images }}>
            {children}
        </ImagesContext.Provider>
    );
};

export default ImagesProvider;
