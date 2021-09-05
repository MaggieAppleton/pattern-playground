import fs from "fs";
import { useState } from "react";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Layout from "../components/Layout";
import Sidemenu from "../components/Sidemenu";
import {
    patternFilePath,
    PATTERNS_PATH,
    explorationFilePath,
    EXPLORATIONS_PATH,
} from "../utils/mdxUtils";
import { motion } from "framer-motion";

export default function Index({ posts }) {
    const [filter, setFilter] = useState("all");
    const postsToShow =
        filter === "all"
            ? posts
            : posts.filter((post) => post.data.type.includes(filter));

    return (
        <Layout>
            <div className="flex flex-row justify-between">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 0.3,
                                ease: "easeInOut",
                                duration: 0.7,
                            },
                        },
                    }}
                >
                    <h1 className="sm:text-4xl mb-6 font-bold">
                        The Pattern Playground
                    </h1>
                    <p className="text-lg font-body max-w-5xl leading-tight">
                        A collection of interface design patterns and
                        speculative experiments
                    </p>
                </motion.div>
                <Sidemenu filter={filter} setFilter={setFilter} />
            </div>
            <motion.ul
                initial="hidden"
                animate="show"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.3,
                            ease: "easeInOut",
                            duration: 0.7,
                        },
                    },
                }}
                className="flex flex-wrap mt-24"
            >
                {postsToShow.map((post) => (
                    <motion.li
                        className="w-80 mr-6 mb-6 bg-offWhite px-6 py-4 rounded-md shadow-sm"
                        key={post.filePath}
                        whileHover={{
                            scale: 1.02,
                            transition: {
                                duration: 0.4,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        <Link
                            as={`/posts/${post.filePath.replace(
                                /\.mdx?$/,
                                ""
                            )}`}
                            href={`/posts/[slug]`}
                        >
                            <a>
                                {post.data.image && (
                                    <img src={post.data.image} />
                                )}

                                <h3 className="text-xl leading-tight">
                                    {post.data.title}
                                </h3>
                            </a>
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </Layout>
    );
}

export function getStaticProps() {
    const patternPosts = patternFilePath.map((filePath) => {
        const source = fs.readFileSync(path.join(PATTERNS_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });

    const explorationPosts = explorationFilePath.map((filePath) => {
        const source = fs.readFileSync(path.join(EXPLORATIONS_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });

    const posts = [...patternPosts, ...explorationPosts];

    return { props: { posts } };
}
