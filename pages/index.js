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
        <>
            <Layout
                title="Pattern Playground"
                description="A collection of interface design patterns and playful experiments by Maggie Appleton"
            >
                <div className="mt-16 md:mt-28 xl:px-20">
                    <div className="flex flex-row justify-between ">
                        <motion.div
                            className="mb-8"
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
                            <h1 className="sm:text-5xl mb-8 font-bold">
                                The Pattern Playground
                            </h1>
                            <h2 className="text-xl max-w-5xl leading-tight text-mediumBlue font-light">
                                A collection of interface design patterns and
                                playful experiments
                            </h2>
                        </motion.div>
                    </div>
                    <motion.div>
                        <FilterMenu filter={filter} setFilter={setFilter} />
                    </motion.div>
                    <motion.ul
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    delay: 0.8,
                                    ease: "easeInOut",
                                    staggerChildren: 0.2,
                                    duration: 0.9,
                                },
                            },
                        }}
                        className="flex flex-wrap mt-6 justify-center md:justify-start"
                    >
                        {postsToShow.map((post) => (
                            <Card key={post.data.title} post={post} />
                        ))}
                    </motion.ul>
                </div>
            </Layout>
        </>
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
