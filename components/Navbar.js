import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <div>
                <motion.header
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-row justify-between  p-6 sm:p-8"
                >
                    <Link href=" /">
                        <a className="items-center flex">
                            <h3 className="text-small text-mediumBlue tracking-wide hover:text-purple duration-300 transition-all">
                                The Pattern Playground
                            </h3>
                        </a>
                    </Link>
                    <ul className="flex flex-row space-x-8 justify-end invisible sm:visible">
                        {["About", "hello"].map((item, index) => (
                            <li
                                className="text-small capitalize tracking-wide font-sans text-mediumBlue hover:text-purple"
                                key={index}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.header>
            </div>
        </nav>
    );
}
