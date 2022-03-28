/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";

const BlogCard = ({ post, index }) => {
    const listItem = css`
        display: flex;
    `;

    const blogImg = css`
        width: 30em;
    `;

    const postContent = css`
        padding: 1em;
    `;

    const postAuthor = css`
        color: #ff2a70;
        font-weight: 100;
    `;

    return index % 2 === 0 ? (
        <li css={listItem}>
            <img css={blogImg} src={post.asset.url} alt="Blog post" />
            <article css={postContent}>
                <h2>{post.title}</h2>
                <h3 css={postAuthor}>By: {post.author}</h3>
                <p>{post.content.slice(0, 160)}...</p>
                <Link to={`/blog/${post.id}`}>
                    <SubmitBtn title="read more" />
                </Link>
            </article>
        </li>
    ) : (
        <li css={listItem}>
            <article css={postContent}>
                <h2>{post.title}</h2>
                <h3 css={postAuthor}>By: {post.author}</h3>
                <p>{post.content.slice(0, 160)}...</p>
                <Link to={`/blog/${post.id}`}>
                    <SubmitBtn title="read more" />
                </Link>
            </article>
            <img css={blogImg} src={post.asset.url} alt="Blog post" />
        </li>
    );
};

export default BlogCard;
