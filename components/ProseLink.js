import Link from "next/link";

export default function ProseLink({ as, href, ...otherProps }) {
    return (
        <>
            <Link as={as} href={href}>
                <a
                    className="text-indigo-600 hover:text-indigo-800 transition-all duration-300"
                    {...otherProps}
                />
            </Link>
        </>
    );
}
