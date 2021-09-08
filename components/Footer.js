export default function Footer() {
    return (
        <footer>
            <div className="flex items-center justify-center text-center py-20">
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
        </footer>
    );
}
