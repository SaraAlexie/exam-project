import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Music from "../components/Music";
import RecentBlog from "../components/RecentBlog";
import Subscribe from "../components/Subscribe";
import Testemonials from "../components/Testemonials";
import Video from "../components/Video";
import Welcome from "../components/Welcome";

const Home = () => {
    return (
        <main>
            <Welcome />
            {<Events />}
            <Gallery />
            <Music />
            <Video />
            <Testemonials />
            <RecentBlog />
            <Subscribe />
        </main>
    );
};

export default Home;
