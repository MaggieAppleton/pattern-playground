export default function Layout({ children }) {
    return (
        <>
            <div className="container mt-24 mb-6 px-6 md:mx-auto md:max-w-4xl lg:max-w-6xl">
                {children}
            </div>
        </>
    );
}
