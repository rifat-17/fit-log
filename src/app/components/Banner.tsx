
import Image from 'next/image';

import BannerImg from '@/assets/banner.png';

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
      <div
        className="
          flex
          flex-col
          lg:flex-row
          items-center
          gap-8
          lg:gap-12
          overflow-hidden
          rounded-3xl
          bg-[#222630]
          px-3
          py-8
          sm:px-10
          sm:py-12
          lg:px-12
          lg:py-8
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">

          {/* Small Heading */}
          <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#C2F800] sm:text-base">
            WORKOUT LIBRARY
          </p>

          {/* Main Heading */}
          <h1
            className="
              text-3xl
              font-extrabold
              leading-tight
              sm:text-4xl
              md:text-5xl
              lg:text-5xl
              xl:text-6xl
            "
          >
            TRAIN WITH INTENT.
            <br className="hidden sm:block" />
            LOG EVERY SET.
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-6
              text-gray-400
              sm:text-base
              lg:mx-0
            "
          >
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s
            work add up.
          </p>

          {/* CTA */}
          <button
            className="
              btn
              mt-7
              w-full
              border-none
              bg-[#C2F800]
              px-6
              text-black
              hover:bg-[#b4e600]
              sm:w-auto
            "
          >
            BROWSE WORKOUTS
          </button>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div
          className="
            flex
            w-full
            justify-center
            lg:w-1/2
            lg:justify-end
          "
        >
          <Image
            src={BannerImg}
            alt="Workout"
            width={600}
            height={500}
            priority
            className="
              h-auto
              w-full
              max-w-[280px]
              object-contain
              sm:max-w-sm
              md:max-w-md
              lg:max-w-lg
              xl:max-w-xl
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
