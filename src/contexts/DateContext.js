import { createContext } from "react";

export const DateContext = createContext();

const DateProvider = ({ children }) => {
    const today = new Date();

    const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    return (
        <DateContext.Provider value={{ date }}>{children}</DateContext.Provider>
    );
};

export default DateProvider;
