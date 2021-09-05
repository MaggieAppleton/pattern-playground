import { motion } from "framer-motion";

export default function Layout({ children }) {
    return (
        <div className="container mt-24 mb-6 px-6 mx-2 md:mx-10 lg:mx-32 max-w-100">
            {children}
        </div>
    );
}
