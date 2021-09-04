import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Layout from "../components/Layout";
import { patternFilePath, PATTERNS_PATH } from "../utils/mdxUtils";

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
                    <li className="w-80 mr-10 mb-10" key={post.filePath}>
                        {post.data.image && <img src={post.data.image} />}
                        <Link
                            as={`/posts/${post.filePath.replace(
                                /\.mdx?$/,
                                ""
                            )}`}
                            href={`/posts/[slug]`}
                        >
                            <a>
                                <h3 className="text-coolGray-600 text-xl leading-tight">
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
    const posts = patternFilePath.map((filePath) => {
        const source = fs.readFileSync(path.join(PATTERNS_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });

    return { props: { posts } };
}
