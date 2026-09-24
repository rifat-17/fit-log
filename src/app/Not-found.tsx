import Link from "next/link";

const NotFound = () => {
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-4 py-12 sm:min-h-[75vh] sm:px-6 lg:px-8">
            <div className="w-full max-w-lg text-center">
                {/* 404 */}
                <p className="text-6xl font-extrabold tracking-tight text-[#ccff00] sm:text-7xl md:text-8xl">
                    404
                </p>

                {/* Title */}
                <h1 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
                    PAGE NOT FOUND
                </h1>

                {/* Description */}
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
                    The page you are looking for does not exist or may have
                    been moved.
                </p>

                {/* Button */}
                <Link
                    href="/"
                    className="
                        btn
                        mt-6
                        w-full
                        rounded-full
                        border-none
                        bg-[#ccff00]
                        px-6
                        text-sm
                        font-semibold
                        text-black
                        hover:bg-[#b8e600]
                        sm:w-auto
                        sm:px-8
                    "
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
};

export default NotFound;
