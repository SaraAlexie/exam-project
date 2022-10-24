import { createContext, useState, useEffect } from "react";

export const DimensionContext = createContext();

const DimensionProvider = ({ children }) => {
    const [dimension, setDimension] = useState({ width: window.innerWidth });

    useEffect(() => {
        function handleResize() {
            setDimension({ width: window.innerWidth });
        }
        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <DimensionContext.Provider value={{ dimension }}>
            {children}
        </DimensionContext.Provider>
    );
};

export default DimensionProvider;
