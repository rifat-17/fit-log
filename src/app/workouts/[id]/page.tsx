import Image from "next/image";

import { IWorkout } from "@/types/workout.type";
import WorkoutActions from "./WorkoutActions";

interface IWorkOutDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkOutDetails = async ({
  params,
}: IWorkOutDetailsProps) => {

  /* ================= GET WORKOUT ID ================= */

  const { id } = await params;


  /* ================= FETCH WORKOUTS ================= */

  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const workouts: IWorkout[] = await response.json();


  /* ================= FIND WORKOUT ================= */

  const workout = workouts.find(
    (item) => item.id === Number(id)
  );


  /* ================= NOT FOUND ================= */

  if (!workout) {
    return (
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Workout not found
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            The workout you are looking for does not exist.
          </p>
        </div>
      </section>
    );
  }


  return (
    <section className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-16">

      {/* ================= MAIN CONTENT ================= */}

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">

        {/* ==================================================
                    LEFT SIDE — WORKOUT IMAGE
                ================================================== */}

        <div className="w-full">

          <div className="overflow-hidden rounded-2xl bg-[#1C1F26]">

            <Image
              src={workout.image}
              alt={workout.name}
              width={800}
              height={800}
              priority
              className="
                                h-[280px]
                                w-full
                                object-cover
                                sm:h-[400px]
                                lg:h-[560px]
                            "
            />

          </div>

        </div>


        {/* ==================================================
                    RIGHT SIDE — WORKOUT INFORMATION
                ================================================== */}

        <div className="w-full space-y-7">

          {/* ================= TITLE ================= */}

          <div>

            <h1
              className="
                                text-2xl
                                font-extrabold
                                uppercase
                                leading-tight
                                sm:text-3xl
                                lg:text-4xl
                            "
            >
              {workout.name}
            </h1>

            <p
              className="
                                mt-3
                                text-sm
                                leading-6
                                text-gray-400
                                sm:text-base
                                sm:leading-7
                            "
            >
              {workout.description}
            </p>

          </div>


          {/* ================= MUSCLE GROUPS ================= */}

          <div className="flex flex-wrap gap-2">

            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="
                                    rounded-full
                                    bg-[#C2F800]
                                    px-3
                                    py-1.5
                                    text-xs
                                    font-semibold
                                    text-black
                                    sm:px-4
                                    sm:text-sm
                                "
              >
                {muscle}
              </span>
            ))}

          </div>


          {/* ================= WORKOUT SPECS ================= */}

          <div className="overflow-hidden rounded-2xl bg-[#1C1F26]">

            {/* Equipment */}
            <div className="grid grid-cols-2 gap-4 border-b border-gray-700 px-4 py-4 sm:px-5">
              <span className="text-xs font-semibold text-gray-400 sm:text-sm">
                EQUIPMENT
              </span>

              <span className="text-right text-sm font-medium sm:text-base">
                {workout.equipment}
              </span>
            </div>


            {/* Difficulty */}
            <div className="grid grid-cols-2 gap-4 border-b border-gray-700 px-4 py-4 sm:px-5">
              <span className="text-xs font-semibold text-gray-400 sm:text-sm">
                DIFFICULTY
              </span>

              <span className="text-right text-sm font-medium sm:text-base">
                {workout.difficulty}
              </span>
            </div>


            {/* Sets */}
            <div className="grid grid-cols-2 gap-4 border-b border-gray-700 px-4 py-4 sm:px-5">
              <span className="text-xs font-semibold text-gray-400 sm:text-sm">
                SETS
              </span>

              <span className="text-right text-sm font-medium sm:text-base">
                {workout.sets}
              </span>
            </div>


            {/* Reps */}
            <div className="grid grid-cols-2 gap-4 border-b border-gray-700 px-4 py-4 sm:px-5">
              <span className="text-xs font-semibold text-gray-400 sm:text-sm">
                REPS
              </span>

              <span className="text-right text-sm font-medium sm:text-base">
                {workout.reps}
              </span>
            </div>


            {/* Duration */}
            <div className="grid grid-cols-2 gap-4 border-b border-gray-700 px-4 py-4 sm:px-5">
              <span className="text-xs font-semibold text-gray-400 sm:text-sm">
                DURATION
              </span>

              <span className="text-right text-sm font-medium sm:text-base">
                {workout.duration} min
              </span>
            </div>


            {/* Calories */}
            <div className="grid grid-cols-2 gap-4 border-b border-gray-700 px-4 py-4 sm:px-5">
              <span className="text-xs font-semibold text-gray-400 sm:text-sm">
                CALORIES
              </span>

              <span className="text-right text-sm font-medium sm:text-base">
                {workout.caloriesBurned} kcal
              </span>
            </div>


            {/* Rating */}
            <div className="grid grid-cols-2 gap-4 px-4 py-4 sm:px-5">
              <span className="text-xs font-semibold text-gray-400 sm:text-sm">
                RATING
              </span>

              <span className="text-right text-sm font-medium sm:text-base">
                ⭐ {workout.rating}
              </span>
            </div>

          </div>


          {/* ================= INSTRUCTIONS ================= */}

          <div>

            <h2 className="mb-5 text-xl font-bold sm:text-2xl">
              INSTRUCTIONS
            </h2>

            <ol className="space-y-4">

              {workout.instructions.map(
                (instruction, index) => (

                  <li
                    key={index}
                    className="flex items-start gap-3 sm:gap-4"
                  >

                    {/* Number */}
                    <span
                      className="
                                                flex
                                                h-7
                                                w-7
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-[#C2F800]
                                                text-sm
                                                font-bold
                                                text-black
                                                sm:h-8
                                                sm:w-8
                                            "
                    >
                      {index + 1}
                    </span>


                    {/* Instruction */}
                    <p
                      className="
                                                pt-0.5
                                                text-sm
                                                leading-6
                                                text-gray-300
                                                sm:text-base
                                                sm:leading-7
                                            "
                    >
                      {instruction}
                    </p>

                  </li>

                )
              )}

            </ol>

          </div>


          {/* ================= ACTIONS ================= */}

          <div className="pt-1">
            <WorkoutActions workout={workout} />
          </div>

        </div>

      </div>

    </section>
  );
};

export default WorkOutDetails;