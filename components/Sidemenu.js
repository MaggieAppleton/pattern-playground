import { motion } from "framer-motion";

export default function Sidemenu() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-col space-y-2"
        >
            <button className="flex justify-end">All</button>
            <button className="flex justify-end">Patterns</button>
            <button className="flex justify-end">Experiments</button>
        </motion.div>
    );
}
