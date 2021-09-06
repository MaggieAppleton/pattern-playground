import { motion } from "framer-motion";

export default function FilterMenu({ filter, setFilter }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-row bg-lightBlueOpacity mt-12 bg-mix-multiply rounded-md max-w-max p-1 border border-lightBlue"
        >
            <button
                className={`${
                    filter === "all" && "bg-offWhite text-darkBlue"
                } flex justify-end px-4 py-2 rounded-md text-mediumBlue transition-all duration-300`}
                onClick={() => setFilter("all")}
            >
                All
            </button>
            <button
                className={`${
                    filter === "pattern" && "bg-offWhite text-darkBlue"
                } flex justify-end px-4 py-2 rounded-md text-mediumBlue transition-all duration-300`}
                onClick={() => setFilter("pattern")}
            >
                Patterns
            </button>
            <button
                className={`${
                    filter === "plaything" && "bg-offWhite text-darkBlue"
                } flex justify-end px-4 py-2 rounded-md text-mediumBlue transition-all duration-300`}
                onClick={() => setFilter("plaything")}
            >
                Playthings
            </button>
        </motion.div>
    );
}
