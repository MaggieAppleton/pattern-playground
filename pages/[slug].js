import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Header from "../components/Header";
import path from "path";
import Link from "next/link";
import ProseLink from "../components/ProseLink";
import FullWidthSection from "../components/FullWidthSection";
import Prose from "../components/Prose";
import Layout from "../components/Layout";
import {
    patternFilePath,
    playthingFilePath,
    PATTERNS_PATH,
    PLAYTHINGS_PATH,
} from "../utils/mdxUtils";
import { motion } from "framer-motion";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
    a: ProseLink,
    p: Prose,
    FullWidthSection: FullWidthSection,

    PPP: dynamic(() => import("../components/unique/PPP")),
    PercentageCalculatorOne: dynamic(() =>
        import("../components/unique/PercentageCalculatorOne")
    ),
    PercentageCalculatorTwo: dynamic(() =>
        import("../components/unique/PercentageCalculatorTwo")
    ),
    Head,
};

export default function PatternPage({ source, frontMatter }) {
    return (
        <Layout>
            <Header />
            <div className="container mx-auto max-w-3xl mb-20">
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.4,
                    }}
                    className="flex flex-row justify-between"
                >
                    <Link href="/">
                        <a className="flex flow-col items-center text-mediumBlue opacity-60 hover:opacity-100 hover:text-purple transition-all duration-300 ease-in-out cursor-pointer">
                            {/* svg of arrow pointing left */}
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            Back to Index
                        </a>
                    </Link>
                    <div className="text-micro font-body font-bold uppercase w-min pt-2 text-neutralBlue tracking-wide flex flex-row items-center self-end justify-self-end">
                        {frontMatter.type === "pattern" ? (
                            <>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 mr-1 text-purple"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z"
                                        clip-rule="evenodd"
                                    />
                                    <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z" />
                                </svg>
                                <span className="text-purple">Pattern</span>
                            </>
                        ) : (
                            <>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 mr-1 text-purple"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                        clip-rule="evenodd"
                                    />
                                </svg>{" "}
                                <span className="text-purple">Plaything</span>
                            </>
                        )}
                    </div>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                    className="mt-4 mb-6 text-4xl sm:text-5xl font-bold leading-tight"
                >
                    {frontMatter.title}
                </motion.h1>
                {frontMatter.description && (
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                        }}
                        className="font-body text-lg font-light max-w-4xl text-purple leading-normal"
                    >
                        {frontMatter.description}
                    </motion.h2>
                )}
            </div>
            <div className="bg-offWhite -mx-6 sm:-mx-14 md:-mx-20 px-6 pb-32">
                <motion.main
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 80 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.4,
                    }}
                    className="wrapper pt-20"
                >
                    <MDXRemote {...source} components={components} />
                </motion.main>
            </div>
        </Layout>
    );
}

export const getStaticProps = async ({ params }) => {
    const patternFilePath = path.join(PATTERNS_PATH, `${params.slug}.mdx`);
    const playthingFilePath = path.join(PLAYTHINGS_PATH, `${params.slug}.mdx`);

    const isPattern = fs.existsSync(patternFilePath);

    // If it is not in the patterns folder, it must be an plaything
    const source = isPattern
        ? fs.readFileSync(patternFilePath)
        : fs.readFileSync(playthingFilePath);

    const { content, data } = matter(source);

    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data,
    });

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    };
};

export const getStaticPaths = async () => {
    const patternsPath = patternFilePath
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ""))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }));

    const playthingsPath = playthingFilePath
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ""))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }));

    const paths = [...patternsPath, ...playthingsPath];

    return {
        paths,
        fallback: false,
    };
};
