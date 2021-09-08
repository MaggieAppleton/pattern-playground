import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="flex align-baseline mb-20"
        >
            <Link href=" /">
                <a>
                    <h3 className="text-base text-darkBlue font-bold tracking-wide hover:text-purple duration-300 transition-all">
                        The Pattern Playground
                    </h3>
                </a>
            </Link>
        </motion.header>
    );
}
