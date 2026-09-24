import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa";

import { IWorkout } from "@/types/workout.type";

interface WorkOutCardProps {
  workout: IWorkout;
}

const WorkOutCard = ({ workout }: WorkOutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="block h-full"
    >
      <div
        className="
                    card
                    h-full
                    overflow-hidden
                    bg-[#1C1F26]
                    shadow-md
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                "
      >

        {/* ================= IMAGE ================= */}
        <figure className="w-full">
          <Image
            src={workout.image}
            alt={workout.name}
            width={500}
            height={300}
            className="
                            h-52
                            w-full
                            object-cover
                            sm:h-56
                            md:h-60
                            lg:h-56
                            xl:h-60
                        "
          />
        </figure>

        {/* ================= CARD BODY ================= */}
        <div
          className="
                        card-body
                        p-4
                        sm:p-5
                        lg:p-5
                    "
        >

          {/* ================= MUSCLE GROUPS ================= */}
          <div className="mb-3 flex flex-wrap gap-2 sm:mb-4">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="
                                    badge
                                    border-none
                                    bg-[#ccff00]
                                    px-2.5
                                    py-2.5
                                    text-[11px]
                                    font-semibold
                                    text-black
                                    sm:px-3
                                    sm:text-xs
                                "
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* ================= TITLE ================= */}
          <h2
            className="
                            mb-1
                            line-clamp-2
                            text-lg
                            font-bold
                            uppercase
                            leading-tight
                            sm:text-xl
                        "
          >
            {workout.name}
          </h2>

          {/* ================= EQUIPMENT ================= */}
          <p className="mb-4 text-xs text-gray-400 sm:text-sm">
            {workout.equipment}
          </p>

          {/* ================= STATS ================= */}
          <div
            className="
                            mt-auto
                            flex
                            flex-wrap
                            items-center
                            gap-x-3
                            gap-y-2
                            border-t
                            border-gray-700
                            pt-3
                            text-xs
                            text-gray-300
                            sm:gap-x-4
                            sm:pt-4
                            sm:text-sm
                        "
          >
            {/* Duration */}
            <span className="flex items-center gap-1.5">
              <FaClock className="shrink-0 text-[#ccff00]" />
              <span>
                {workout.duration} min
              </span>
            </span>

            {/* Calories */}
            <span className="flex items-center gap-1.5">
              <FaFire className="shrink-0 text-[#ccff00]" />
              <span>
                {workout.caloriesBurned} kcal
              </span>
            </span>

            {/* Rating */}
            <span className="flex items-center gap-1.5">
              <FaStar className="shrink-0 text-[#ccff00]" />
              <span>
                {workout.rating}
              </span>
            </span>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default WorkOutCard;