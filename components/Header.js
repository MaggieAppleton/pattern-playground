import Link from "next/link";

export default function Header() {
    return (
        <header>
            <Link href=" /">
                <a>
                    <h3 className="text-lg font-mediumBlue">
                        The Pattern Playground
                    </h3>
                </a>
            </Link>
            <Link href="/">
                <a className="flex space-x-2 py-4">
                    {/* svg with left facing arrow */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                    Back to all patterns
                </a>
            </Link>
        </header>
    );
}
