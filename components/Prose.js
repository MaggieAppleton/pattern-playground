export default function Prose({ children }) {
    return (
        <p className="max-w-auto md:max-w-3xl mb-8 leading-relaxed text-lg">
            {children}
        </p>
    );
}
