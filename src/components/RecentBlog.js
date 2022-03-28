/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StyledHeading from "../styles/StyledHeading";
import CantLoad from "./CantLoad";

const RecentBlog = () => {
    const postList = css`
        display: flex;
        justify-content: space-between;
        max-width: 65em;
        margin: 1em auto;
        list-style: none;
    `;

    const postBy = css`
        color: #ff2a70;
        font-weight: 100;
    `;

    const linkStyle = css`
        text-decoration: none;
    `;

    const listItem = css`
        max-width: 20em;
    `;

    const listImg = css`
        width: 100%;
    `;

    const [posts, setPosts] = useState();

    useEffect(() => {
        axios(`http://localhost:4000/blogposts`).then((response) =>
            setPosts(response.data)
        );
    }, []);

    return posts ? (
        <section>
            <StyledHeading title="recent blog" />
            <ul css={postList}>
                {posts
                    ?.slice(0, 3)
                    .reverse()
                    .map((post) => (
                        <Link
                            css={linkStyle}
                            key={post.id}
                            to={`/blog/${post.id}`}
                        >
                            <li css={listItem}>
                                <img
                                    css={listImg}
                                    src={post.asset.url}
                                    alt="Post"
                                />
                                <h2>{post.title}</h2>
                                <h3 css={postBy}>By: {post.author}</h3>
                                <p>{post.content.slice(0, 100)}...</p>
                            </li>
                        </Link>
                    ))}
            </ul>
        </section>
    ) : (
        <CantLoad title="recent posts" />
    );
};

export default RecentBlog;
