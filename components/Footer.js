import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ase: "easeInOut" }}
        >
            <div className="flex items-center justify-center text-center py-20 ">
                <p className="text-small font-sans">
                    A project by{" "}
                    <a
                        className="font-bold hover:underline hover:text-purple transition-all duration-300"
                        href="https://maggieappleton.com"
                    >
                        Maggie Appleton
                    </a>
                </p>
            </div>
        </motion.footer>
    );
}
