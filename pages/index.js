import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Layout from "../components/Layout";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

export default function Index({ posts }) {
    return (
        <Layout>
            <h1 className="sm:text-4xl text-coolGray-800 mb-6">
                The Pattern Playground
            </h1>
            <p className="text-lg text-coolGray-600 font-light max-w-5xl leading-tight">
                A collection of interface design patterns and speculative
                experiments
            </p>
            <ul className="flex flex-wrap mt-24">
                {posts.map((post) => (
                    <li className="w-80 mr-8 mb-8 border" key={post.filePath}>
                        {post.data.image && <img src={post.data.image} />}
                        <Link
                            as={`/posts/${post.filePath.replace(
                                /\.mdx?$/,
                                ""
                            )}`}
                            href={`/posts/[slug]`}
                        >
                            <a>
                                <h3 className="text-coolGray-600 text-xl">
                                    {post.data.title}
                                </h3>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}

export function getStaticProps() {
    const posts = postFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });

    return { props: { posts } };
}
