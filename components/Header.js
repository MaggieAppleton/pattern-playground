import Link from "next/link";

export default function Header() {
    return (
        <header className="flex align-baseline mb-20">
            <Link href=" /">
                <a>
                    <h3 className="text-base text-darkBlue font-bold tracking-wide">
                        The Pattern Playground
                    </h3>
                </a>
            </Link>
        </header>
    );
}
