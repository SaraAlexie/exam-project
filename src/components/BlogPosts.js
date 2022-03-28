/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import CantLoad from "./CantLoad";

const BlogPosts = () => {
    const blogList = css`
        padding: 0;
        list-style: none;
    `;

    const [posts, setPosts] = useState();

    useEffect(() => {
        axios(`http://localhost:4000/blogposts`).then((response) =>
            setPosts(response.data)
        );
    }, []);

    return posts ? (
        <ul css={blogList}>
            {posts
                ?.slice(0, 3)
                .reverse()
                .map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} />
                ))}
        </ul>
    ) : (
        <CantLoad title="blog posts" />
    );
};

export default BlogPosts;
