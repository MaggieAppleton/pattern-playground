import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Header from "../components/Header";
import path from "path";
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
                <h1 className="mt-12 mb-10 text-5xl font-bold leading-tight">
                    {frontMatter.title}
                </h1>
                {frontMatter.description && (
                    <p className="font-body text-lg font-light max-w-4xl font-mediumBlue">
                        {frontMatter.description}
                    </p>
                )}
            </div>
            <main className="wrapper mb-36">
                <MDXRemote {...source} components={components} />
            </main>
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