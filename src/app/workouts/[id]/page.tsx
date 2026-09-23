
import { IWorkout } from '@/types/workout.type';
import Image from 'next/image';
import React from 'react';
import { FaBookmark, FaPlus } from 'react-icons/fa';

interface IWorkOutDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkOutDetails = async ({
  params,
}: IWorkOutDetailsProps) => {
  // Get workout ID
  const { id } = await params;

  // Fetch workouts
  const response = await fetch(
    'https://api.abcz.workers.dev/api/fitlog'
  );

  if (!response.ok) {
    throw new Error('Failed to fetch workouts');
  }

  const workouts: IWorkout[] = await response.json();

  // Find selected workout
  const workout = workouts.find(
    (item) => item.id === Number(id)
  );

  // Workout not found
  if (!workout) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Workout not found
        </h1>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-16">
      
      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

        {/* ================= LEFT SIDE ================= */}
        <div className="w-full">
          <Image
            src={workout.image}
            alt={workout.name}
            width={800}
            height={800}
            className="
              w-full
              h-[300px]
              sm:h-[400px]
              lg:h-[550px]
              object-cover
              rounded-xl
              sm:rounded-2xl
            "
          />
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="w-full space-y-6">

          {/* Title & Description */}
          <div>
            <h1 className="
              text-2xl
              sm:text-3xl
              lg:text-4xl
              font-bold
              uppercase
              leading-tight
              mb-3
            ">
              {workout.name}
            </h1>

            <p className="
              text-sm
              sm:text-base
              text-base-content/70
              leading-relaxed
            ">
              {workout.description}
            </p>
          </div>

          {/* ================= CATEGORY TAGS ================= */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="
                  badge
                  bg-lime-400
                  text-black
                  px-3
                  sm:px-4
                  py-3
                  text-xs
                  sm:text-sm
                "
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* ================= KEY SPECS ================= */}
          <div>

            <div className="
              rounded-xl
              sm:rounded-2xl
              bg-gray-700
              text-white
              overflow-hidden
            ">

              {/* Equipment */}
              <div className="
                grid
                grid-cols-2
                gap-3
                p-3
                sm:p-4
                border-b
                border-gray-600
                text-sm
                sm:text-base
              ">
                <span className="font-semibold">
                  EQUIPMENT
                </span>

                <span className="break-words">
                  {workout.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="
                grid
                grid-cols-2
                gap-3
                p-3
                sm:p-4
                border-b
                border-gray-600
                text-sm
                sm:text-base
              ">
                <span className="font-semibold">
                  DIFFICULTY
                </span>

                <span>
                  {workout.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="
                grid
                grid-cols-2
                gap-3
                p-3
                sm:p-4
                border-b
                border-gray-600
                text-sm
                sm:text-base
              ">
                <span className="font-semibold">
                  SETS
                </span>

                <span>
                  {workout.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="
                grid
                grid-cols-2
                gap-3
                p-3
                sm:p-4
                border-b
                border-gray-600
                text-sm
                sm:text-base
              ">
                <span className="font-semibold">
                  REPS
                </span>

                <span>
                  {workout.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="
                grid
                grid-cols-2
                gap-3
                p-3
                sm:p-4
                border-b
                border-gray-600
                text-sm
                sm:text-base
              ">
                <span className="font-semibold">
                  DURATION
                </span>

                <span>
                  {workout.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="
                grid
                grid-cols-2
                gap-3
                p-3
                sm:p-4
                border-b
                border-gray-600
                text-sm
                sm:text-base
              ">
                <span className="font-semibold">
                  CALORIES
                </span>

                <span>
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="
                grid
                grid-cols-2
                gap-3
                p-3
                sm:p-4
                text-sm
                sm:text-base
              ">
                <span className="font-semibold">
                  RATING
                </span>

                <span>
                  ⭐ {workout.rating}
                </span>
              </div>

            </div>
          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div>
            <h2 className="
              text-xl
              sm:text-2xl
              font-bold
              mb-4
            ">
              INSTRUCTIONS
            </h2>

            <ol className="space-y-4">
              {workout.instructions.map(
                (instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 sm:gap-4 items-start"
                  >
                    {/* Number */}
                    <span className="
                      flex-shrink-0
                      w-7
                      h-7
                      sm:w-8
                      sm:h-8
                      rounded-full
                      bg-lime-400
                      text-black
                      flex
                      items-center
                      justify-center
                      font-bold
                      text-sm
                    ">
                      {index + 1}
                    </span>

                    {/* Instruction */}
                    <p className="
                      text-sm
                      sm:text-base
                      leading-relaxed
                      pt-1
                    ">
                      {instruction}
                    </p>
                  </li>
                )
              )}
            </ol>
          </div>

          {/* ================= CTA BUTTONS ================= */}
          <div className="
            flex
            flex-col
            sm:flex-row
            gap-3
            sm:gap-4
            pt-2
          ">

            <button className="
              btn
              bg-lime-400
              text-black
              border-none
              w-full
              sm:flex-1
              hover:bg-lime-500
            ">
              <FaPlus />
              Add to today's plan
            </button>

            <button className="
              btn
              bg-black
              text-white
              border-none
              w-full
              sm:flex-1
              hover:bg-gray-800
            ">
              <FaBookmark />
              Save for later
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkOutDetails;