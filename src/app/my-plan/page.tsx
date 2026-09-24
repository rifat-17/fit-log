"use client";

import { useFitlog } from "@/context/FitLogContext";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MyPlanpage = () => {
    const {
        planWorkouts,
        savedWorkouts,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
    } = useFitlog();

    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    const [sortBy, setSortBy] = useState<
        "duration" | "calories" | "rating"
    >("duration");

    // Current tab workouts
    const currentWorkouts =
        activeTab === "plan" ? planWorkouts : savedWorkouts;

    // Sorted workouts
    const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        return a.rating - b.rating;
    });

    return (
        <section className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

            {/* ================= HEADER ================= */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold sm:text-4xl">
                    MY PLAN
                </h1>

                <p className="mt-2 max-w-xl text-sm text-gray-400 sm:text-base">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>


            {/* ================= METRICS ================= */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                {/* Exercises */}
                <div className="rounded-xl bg-[#1C1F26] p-5 sm:p-6">
                    <p className="text-sm text-gray-400">
                        Exercises
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                        {planWorkouts.length}
                    </h2>
                </div>

                {/* Minutes */}
                <div className="rounded-xl bg-[#1C1F26] p-5 sm:p-6">
                    <p className="text-sm text-gray-400">
                        Minutes
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                        {planWorkouts.reduce(
                            (total, workout) =>
                                total + workout.duration,
                            0
                        )}
                    </h2>
                </div>

                {/* Calories */}
                <div className="rounded-xl bg-[#1C1F26] p-5 sm:p-6">
                    <p className="text-sm text-gray-400">
                        Calories
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                        {planWorkouts.reduce(
                            (total, workout) =>
                                total + workout.caloriesBurned,
                            0
                        )}
                    </h2>
                </div>

            </div>


            {/* ================= TABS + SORT ================= */}
            <div className="mb-8 flex flex-col gap-5 border-b border-gray-700 sm:flex-row sm:items-center sm:justify-between">

                {/* Tabs */}
                <div className="flex gap-1 overflow-x-auto">

                    <button
                        onClick={() => setActiveTab("plan")}
                        className={`whitespace-nowrap px-4 py-3 text-sm font-semibold transition sm:px-5 sm:text-base ${activeTab === "plan"
                                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Today's Plan
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`whitespace-nowrap px-4 py-3 text-sm font-semibold transition sm:px-5 sm:text-base ${activeTab === "saved"
                                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Saved
                    </button>

                </div>


                {/* Sort */}
                <div className="mb-3 flex items-center justify-between gap-3 sm:mb-3 sm:justify-end">

                    <span className="text-sm text-gray-400">
                        Sort By
                    </span>

                    <select
                        value={sortBy}
                        onChange={(e) =>
                            setSortBy(
                                e.target.value as
                                | "duration"
                                | "calories"
                                | "rating"
                            )
                        }
                        className="select select-sm w-36 border-gray-700 bg-[#1C1F26] text-white focus:border-[#ccff00]"
                    >
                        <option value="duration">
                            Duration
                        </option>

                        <option value="calories">
                            Calories
                        </option>

                        <option value="rating">
                            Rating
                        </option>
                    </select>

                </div>

            </div>


            {/* ================= WORKOUT LIST ================= */}
            {sortedWorkouts.length === 0 ? (

                /* Empty State */
                <div className="rounded-xl bg-[#1C1F26] px-4 py-16 text-center sm:py-20">

                    <h2 className="text-xl font-bold sm:text-2xl">
                        NOTHING HERE YET
                    </h2>

                    <p className="mx-auto mt-2 max-w-md text-sm text-gray-400 sm:text-base">
                        Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                        href="/"
                        className="btn mt-6 border-none bg-[#ccff00] text-sm text-black hover:bg-[#b8e600]"
                    >
                        Go to workouts
                    </Link>

                </div>

            ) : (

                /* Workout Cards */
                <div className="space-y-4">

                    {sortedWorkouts.map((workout) => (

                        <div
                            key={workout.id}
                            className="rounded-xl bg-[#1C1F26] p-4 transition hover:bg-[#20232b] sm:p-5"
                        >

                            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">

                                {/* ================= IMAGE ================= */}
                                <div className="shrink-0">

                                    <Image
                                        src={workout.image}
                                        alt={workout.name}
                                        width={220}
                                        height={150}
                                        className="h-48 w-full rounded-lg object-cover sm:h-52 lg:h-32 lg:w-52"
                                    />

                                </div>


                                {/* ================= INFORMATION ================= */}
                                <div className="min-w-0 flex-1">

                                    <h2 className="truncate text-lg font-bold uppercase sm:text-xl">
                                        {workout.name}
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-400">
                                        {workout.equipment}
                                    </p>


                                    {/* Stats */}
                                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-300">

                                        <span>
                                            ⏱️ {workout.duration} min
                                        </span>

                                        <span>
                                            🔥 {workout.caloriesBurned} kcal
                                        </span>

                                        <span>
                                            ⭐ {workout.rating}
                                        </span>

                                    </div>

                                </div>


                                {/* ================= ACTIONS ================= */}
                                <div className="flex flex-col gap-2 sm:flex-row lg:shrink-0">

                                    {/* View Details */}
                                    <Link
                                        href={`/workouts/${workout.id}`}
                                        className="btn btn-sm w-full rounded-full border-none bg-[#ccff00] text-black hover:bg-[#b8e600] sm:w-auto"
                                    >
                                        View Details
                                    </Link>


                                    {/* Mark as Done */}
                                    {activeTab === "plan" && (
                                        <button
                                            onClick={() => {
                                                markAsDone(workout.id);
                                                toast.success(
                                                    "Workout marked as done"
                                                );
                                            }}
                                            className="btn btn-sm w-full rounded-full border border-gray-600 bg-transparent text-white hover:bg-gray-700 sm:w-auto"
                                        >
                                            Mark as Done
                                        </button>
                                    )}


                                    {/* Remove */}
                                    <button
                                        onClick={() => {
                                            if (activeTab === "plan") {
                                                removeFromPlan(workout.id);

                                                toast.error(
                                                    "Workout removed from today's plan"
                                                );
                                            } else {
                                                removeFromSaved(workout.id);

                                                toast.error(
                                                    "Workout removed from saved"
                                                );
                                            }
                                        }}
                                        className="btn btn-sm w-full rounded-full border-none bg-red-500 text-white hover:bg-red-600 sm:w-auto"
                                    >
                                        X
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>
            )}

        </section>
    );
};

export default MyPlanpage;