import { motion } from "framer-motion";
import Link from "next/link";

export default function Card({ post }) {
    return (
        <Link as={`${post.filePath.replace(/\.mdx?$/, "")}`} href={`[slug]`}>
            <a>
                <li
                    className="w-80 mr-6 mb-6 bg-offWhite px-6 py-5 rounded-md shadow-sm flex flex-col h-min transform hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-in-out"
                    key={post.filePath}
                >
                    {post.data.image && <img src={post.data.image} />}
                    <h3 className="text-xl leading-tight mb-4 hover:text-darkBlue">
                        {post.data.title}
                    </h3>

                    <p className="text-small font-body font-light text-neutralBlue leading-snug mb-4">
                        {post.data.description}
                    </p>
                    <div className="text-micro font-body font-bold uppercase w-min pt-2 text-neutralBlue tracking-wide flex flex-row items-center self-end justify-self-end">
                        {post.data.type === "pattern" ? (
                            <>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 mr-1"
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
                                Pattern
                            </>
                        ) : (
                            <>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 mr-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                        clip-rule="evenodd"
                                    />
                                </svg>{" "}
                                Plaything
                            </>
                        )}
                    </div>
                </li>
            </a>
        </Link>
    );
}
