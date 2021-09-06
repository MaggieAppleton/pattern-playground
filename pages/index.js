import fs from "fs";
import { useState } from "react";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Layout from "../components/Layout";
import FilterMenu from "../components/FilterMenu";
import Card from "../components/Card";
import {
    patternFilePath,
    PATTERNS_PATH,
    playthingFilePath,
    PLAYTHINGS_PATH,
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
                        speculative play
                    </p>
                </motion.div>
            </div>
            <motion.div>
                <FilterMenu filter={filter} setFilter={setFilter} />
            </motion.div>
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
                className="flex flex-wrap mt-6"
            >
                {postsToShow.map((post) => (
                    <Card key={post.data.title} post={post} />
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

    const playthingPosts = playthingFilePath.map((filePath) => {
        const source = fs.readFileSync(path.join(PLAYTHINGS_PATH, filePath));
        const { content, data } = matter(source);

        return {
            content,
            data,
            filePath,
        };
    });

    const posts = [...patternPosts, ...playthingPosts];

    return { props: { posts } };
}
