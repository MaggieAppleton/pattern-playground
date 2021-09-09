import "../styles/tailwind.css";
import Footer from "../components/Footer";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/png" />
            </Head>
            <Navbar />
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} />
            </AnimatePresence>
            <Footer />
        </>
    );
}

export default MyApp;
