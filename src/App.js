import { Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Home from "./views/Home";
import Blog from "./views/Blog";
import Contact from "./views/Contact";
import Hero from "./components/Hero";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import SinglePost from "./views/SinglePost";
import DateProvider from "./contexts/DateContext";
import DimensionProvider from "./contexts/DimensionContext";
import Sandbox from "./views/Sandbox";

function App() {
    return (
        <DimensionProvider>
            <DateProvider>
                <HelmetProvider>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Night Club</title>
                        <link rel="icon" type="image/png" href="/favicon.ico" />
                    </Helmet>
                    <GlobalStyles />
                    <Hero />
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<SinglePost />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="/sandbox" element={<Sandbox />} />
                    </Routes>
                    <Footer />
                </HelmetProvider>
            </DateProvider>
        </DimensionProvider>
    );
}

export default App;
