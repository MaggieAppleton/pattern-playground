import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

export default function Layout({ children, title, description }) {
    return (
        <div>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <main className="container mt-10 mb-6 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-full mx-auto px-6 xl:px-12">
                {children}
            </main>
        </div>
    );
}
