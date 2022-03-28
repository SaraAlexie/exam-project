import Banner from "../components/Banner";
import BlogPosts from "../components/BlogPosts";
import StyledSiteSection from "../styles/StyledSiteSection";

const Blog = () => {
    return (
        <main>
            <Banner title="blog" />
            <StyledSiteSection>
                <BlogPosts />
            </StyledSiteSection>
        </main>
    );
};

export default Blog;
