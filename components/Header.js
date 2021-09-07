import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-center align-baseline mb-20">
            <Link href=" /">
                <a>
                    <h3 className="text-base font-mediumBlue font-bold tracking-wide">
                        The Pattern Playground
                    </h3>
                </a>
            </Link>
        </header>
    );
}
