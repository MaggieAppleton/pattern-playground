import { motion } from "framer-motion";

export default function Sidemenu({ filter, setFilter }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-col space-y-1"
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
                    filter === "exploration" && "bg-gray-400"
                } flex justify-end`}
                onClick={() => setFilter("exploration")}
            >
                Experiments
            </button>
        </motion.div>
    );
}
