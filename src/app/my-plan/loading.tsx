const Loading = () => {
    return (
        <main className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
            <div className="mb-8 sm:mb-10">
                <h1 className="text-3xl font-bold sm:text-4xl">
                    MY PLAN
                </h1>
            </div>

            <div className="flex min-h-[300px] items-center justify-center">
                <div className="text-center">
                    <span className="loading loading-spinner loading-lg text-[#ccff00]" />

                    <p className="mt-4 text-sm text-gray-400">
                        Loading workouts…
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Loading;