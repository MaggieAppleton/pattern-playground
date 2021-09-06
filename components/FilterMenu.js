import { motion } from "framer-motion";

export default function FilterMenu({ filter, setFilter }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-row space-x-1 mt-12"
        >
            <button
                className={`${
                    filter === "all" && "bg-gray-400"
                } flex justify-end`}
                onClick={() => setFilter("all")}
            >
                All
            </button>
            <button
                className={`${
                    filter === "pattern" && "bg-gray-400"
                } flex justify-end`}
                onClick={() => setFilter("pattern")}
            >
                Patterns
            </button>
            <button
                className={`${
                    filter === "plaything" && "bg-gray-400"
                } flex justify-end`}
                onClick={() => setFilter("plaything")}
            >
                Playthings
            </button>
        </motion.div>
    );
}
