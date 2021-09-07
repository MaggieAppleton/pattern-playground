import { motion } from "framer-motion";

export default function Layout({ children }) {
    return (
        <div className="container mt-10 mb-6 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-full mx-auto px-6 xl:px-12">
            {children}
        </div>
    );
}
