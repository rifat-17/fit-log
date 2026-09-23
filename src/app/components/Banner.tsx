import Image from "next/image";

import BannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-4 font-bold tracking-wider text-[#C2F800]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            TRAIN WITH INTENT. LOG
            <br className="hidden md:block" />
            EVERY SET.
          </h1>

          <p className="mt-5 max-w-xl text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <button
            className="btn mt-7 bg-[#C2F800] px-6 text-black hover:bg-[#b4e600]"
          >
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Right Image */}
        <div className="flex flex-1 justify-center lg:justify-end">
          <Image
            src={BannerImg}
            alt="Workout"
            width={600}
            height={500}
            priority
            className="w-full max-w-md object-contain lg:max-w-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;