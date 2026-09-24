import Image from "next/image";
import Link from "next/link";

import BannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">

      {/* Banner Container */}
      <div
        className="
                    flex
                    flex-col
                    items-center
                    gap-8
                    overflow-hidden
                    rounded-3xl
                    bg-[#222630]
                    px-5
                    py-8
                    sm:px-10
                    sm:py-12
                    lg:flex-row
                    lg:gap-10
                    lg:px-12
                    lg:py-10
                    xl:gap-16
                "
      >

        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
                        w-full
                        text-center
                        lg:w-1/2
                        lg:text-left
                    "
        >

          {/* Small Heading */}
          <p
            className="
                            mb-3
                            text-xs
                            font-bold
                            tracking-[0.2em]
                            text-[#C2F800]
                            sm:text-sm
                            md:text-base
                        "
          >
            WORKOUT LIBRARY
          </p>


          {/* Main Heading */}
          <h1
            className="
                            text-2xl
                            font-extrabold
                            leading-tight
                            sm:text-3xl
                            md:text-4xl
                            xl:text-5xl
                        "
          >
            TRAIN WITH INTENT.LOG <br /> EVERY SET.
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
                            sm:leading-7
                            lg:mx-0
                        "
          >
            FitLog is a dark, no-nonsense gym companion:
            pick a lift, lock it into today&apos;s plan,
            and watch the week&apos;s work add up.
          </p>


          {/* CTA */}
          <Link
            href="/"
            className="
                            btn
                            mt-7
                            w-full
                            rounded-full
                            border-none
                            bg-[#C2F800]
                            px-7
                            text-sm
                            font-bold
                            text-black
                            hover:bg-[#b4e600]
                            sm:w-auto
                        "
          >
            BROWSE WORKOUTS
          </Link>

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
            width={400}
            height={300}
            priority
            className="
                            h-auto
                            w-full
                            max-w-[260px]
                            object-contain
                            sm:max-w-sm
                            md:max-w-md
                            lg:max-w-lg
                            xl:max-w-lg
                        "
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;