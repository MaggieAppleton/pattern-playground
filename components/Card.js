import { motion } from "framer-motion";
import Link from "next/link";

export default function Card({ post }) {
    return (
        <motion.li
            className="w-80 mr-6 mb-6 bg-offWhite px-6 py-5 rounded-md shadow-sm flex- flex-col justify-between"
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
                as={`${post.filePath.replace(/\.mdx?$/, "")}`}
                href={`[slug]`}
            >
                <a>
                    {post.data.image && <img src={post.data.image} />}
                    <h3 className="text-xl leading-tight mb-4">
                        {post.data.title}
                    </h3>
                </a>
            </Link>
            <p className="text-small font-body font-light text-neutralBlue leading-snug mb-4">
                {post.data.description}
            </p>
            <p className="text-micro font-body uppercase text-neutralBlue tracking-wide">
                {post.data.type}
            </p>
        </motion.li>
    );
}
