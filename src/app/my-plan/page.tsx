"use client";

import { useFitlog } from "@/context/FitLogContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    FaCheck,
    FaChevronDown,
    FaClock,
    FaFire,
    FaStar,
} from "react-icons/fa";
import { toast } from "react-toastify";

const MyPlanpage = () => {
    // ================= CONTEXT =================
    const {
        planWorkouts,
        savedWorkouts,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        completedWorkouts,
    } = useFitlog();

    // ================= STATE =================
    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    const [sortBy, setSortBy] = useState<
        "duration" | "calories" | "rating"
    >("duration");

    // ================= CURRENT WORKOUTS =================
    const currentWorkouts =
        activeTab === "plan" ? planWorkouts : savedWorkouts;

    // ================= SORT WORKOUTS =================
    const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        return a.rating - b.rating;
    });

    // ================= METRICS =================
    const totalExercises = planWorkouts.length;

    const totalMinutes = planWorkouts.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = planWorkouts.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    // ================= REMOVE =================
    const handleRemove = (id: number) => {
        if (activeTab === "plan") {
            removeFromPlan(id);
            toast.error("Workout removed from today's plan");
        } else {
            removeFromSaved(id);
            toast.error("Workout removed from saved");
        }
    };

    // ================= MARK AS DONE =================
    const handleMarkAsDone = (id: number) => {
        markAsDone(id);
        toast.success("Workout marked as done");
    };

    return (
        <main className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">

            {/* =====================================================
                HEADER
            ====================================================== */}
            <div className="mb-8 sm:mb-10">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    MY PLAN
                </h1>

                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>


            {/* =====================================================
                METRICS
            ====================================================== */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">

                {/* Exercises */}
                <div className="rounded-2xl bg-[#1C1F26] p-5 sm:p-6">
                    <p className="text-sm text-gray-400">
                        Exercises
                    </p>

                    <div className="mt-3 flex items-end justify-between">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            {totalExercises}
                        </h2>

                        <span className="text-xs text-gray-500">
                            planned
                        </span>
                    </div>
                </div>


                {/* Minutes */}
                <div className="rounded-2xl bg-[#1C1F26] p-5 sm:p-6">
                    <p className="text-sm text-gray-400">
                        Minutes
                    </p>

                    <div className="mt-3 flex items-end justify-between">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            {totalMinutes}
                        </h2>

                        <span className="text-xs text-gray-500">
                            total
                        </span>
                    </div>
                </div>


                {/* Calories */}
                <div className="rounded-2xl bg-[#1C1F26] p-5 sm:p-6">
                    <p className="text-sm text-gray-400">
                        Calories
                    </p>

                    <div className="mt-3 flex items-end justify-between">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            {totalCalories}
                        </h2>

                        <span className="text-xs text-gray-500">
                            kcal
                        </span>
                    </div>
                </div>

            </div>


            {/* =====================================================
                TABS + SORT
            ====================================================== */}
            <div className="mb-8 border-b border-gray-700">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    {/* ================= TABS ================= */}
                    <div className="flex overflow-x-auto">

                        <button
                            onClick={() => setActiveTab("plan")}
                            className={`
                                whitespace-nowrap
                                border-b-2
                                px-4
                                py-3
                                text-sm
                                font-semibold
                                transition
                                sm:px-5
                                sm:text-base
                                ${activeTab === "plan"
                                    ? "border-[#ccff00] text-[#ccff00]"
                                    : "border-transparent text-gray-400 hover:text-white"
                                }
                            `}
                        >
                            Today's Plan
                            <span className="ml-2 text-xs opacity-70">
                                ({planWorkouts.length})
                            </span>
                        </button>


                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`
                                whitespace-nowrap
                                border-b-2
                                px-4
                                py-3
                                text-sm
                                font-semibold
                                transition
                                sm:px-5
                                sm:text-base
                                ${activeTab === "saved"
                                    ? "border-[#ccff00] text-[#ccff00]"
                                    : "border-transparent text-gray-400 hover:text-white"
                                }
                            `}
                        >
                            Saved
                            <span className="ml-2 text-xs opacity-70">
                                ({savedWorkouts.length})
                            </span>
                        </button>

                    </div>


                    {/* ================= SORT ================= */}
                    <div className="mb-4 flex items-center justify-between gap-3 sm:mb-3 sm:justify-end">

                        <span className="text-sm text-gray-400">
                            Sort By
                        </span>

                        <div className="relative">
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
                                className="
                                    select
                                    select-sm
                                    w-36
                                    appearance-none
                                    rounded-lg
                                    border
                                    border-gray-700
                                    bg-[#1C1F26]
                                    pr-9
                                    text-white
                                    focus:border-[#ccff00]
                                    focus:outline-none
                                "
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

                            <FaChevronDown
                                className="
                                    pointer-events-none
                                    absolute
                                    right-3
                                    top-1/2
                                    -translate-y-1/2
                                    text-xs
                                    text-gray-400
                                "
                            />
                        </div>

                    </div>

                </div>
            </div>


            {/* =====================================================
                EMPTY STATE
            ====================================================== */}
            {sortedWorkouts.length === 0 ? (

                <div className="rounded-2xl bg-[#1C1F26] px-5 py-16 text-center sm:px-8 sm:py-20">

                    <h2 className="text-xl font-bold sm:text-2xl">
                        NOTHING HERE YET
                    </h2>

                    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
                        Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                        href="/"
                        className="
                            btn
                            mt-6
                            w-full
                            rounded-full
                            border-none
                            bg-[#ccff00]
                            text-sm
                            font-semibold
                            text-black
                            hover:bg-[#b8e600]
                            sm:w-auto
                        "
                    >
                        Go to workouts
                    </Link>

                </div>

            ) : (

                /* =====================================================
                   WORKOUT LIST
                ====================================================== */
                <div className="space-y-4">

                    {sortedWorkouts.map((workout) => {

                        const isCompleted =
                            completedWorkouts.includes(workout.id);

                        return (
                            <article
                                key={workout.id}
                                className={`
                                    overflow-hidden
                                    rounded-2xl
                                    bg-[#1C1F26]
                                    p-4
                                    transition
                                    sm:p-5
                                    ${isCompleted
                                        ? "opacity-70"
                                        : "hover:bg-[#20232b]"
                                    }
                                `}
                            >

                                <div className="flex flex-col gap-5 lg:flex-row lg:items-center">

                                    {/* ================= IMAGE ================= */}
                                    <div className="w-full shrink-0 lg:w-52">
                                        <Image
                                            src={workout.image}
                                            alt={workout.name}
                                            width={220}
                                            height={150}
                                            className="
                                                h-52
                                                w-full
                                                rounded-xl
                                                object-cover
                                                sm:h-60
                                                lg:h-32
                                            "
                                        />
                                    </div>


                                    {/* ================= INFORMATION ================= */}
                                    <div className="min-w-0 flex-1">

                                        {/* Title + Completed */}
                                        <div className="flex flex-wrap items-center gap-2">

                                            <h2 className="text-lg font-bold uppercase leading-tight sm:text-xl">
                                                {workout.name}
                                            </h2>

                                            {isCompleted && (
                                                <span className="badge gap-1 border-none bg-[#ccff00] text-xs font-semibold text-black">
                                                    <FaCheck className="text-[10px]" />
                                                    Done
                                                </span>
                                            )}

                                        </div>


                                        {/* Equipment */}
                                        <p className="mt-2 text-sm text-gray-400">
                                            {workout.equipment}
                                        </p>


                                        {/* ================= STATS ================= */}
                                        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-300 sm:text-sm">

                                            <span className="flex items-center gap-1.5">
                                                <FaClock className="shrink-0 text-[#ccff00]" />
                                                {workout.duration} min
                                            </span>

                                            <span className="flex items-center gap-1.5">
                                                <FaFire className="shrink-0 text-[#ccff00]" />
                                                {workout.caloriesBurned} kcal
                                            </span>

                                            <span className="flex items-center gap-1.5">
                                                <FaStar className="shrink-0 text-[#ccff00]" />
                                                {workout.rating}
                                            </span>

                                        </div>

                                    </div>


                                    {/* =================================================
                                        ACTIONS
                                    ================================================== */}
                                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:flex lg:w-auto lg:shrink-0">

                                        {/* View Details */}
                                        <Link
                                            href={`/workouts/${workout.id}`}
                                            className="
                                                btn
                                                btn-sm
                                                w-full
                                                rounded-full
                                                border-none
                                                bg-[#ccff00]
                                                text-black
                                                hover:bg-[#b8e600]
                                                lg:w-auto
                                            "
                                        >
                                            View Details
                                        </Link>


                                        {/* Mark as Done */}
                                        {activeTab === "plan" && (
                                            <button
                                                onClick={() =>
                                                    handleMarkAsDone(
                                                        workout.id
                                                    )
                                                }
                                                disabled={isCompleted}
                                                className={`
                                                    btn
                                                    btn-sm
                                                    w-full
                                                    rounded-full
                                                    lg:w-auto
                                                    ${isCompleted
                                                        ? "cursor-not-allowed border-none bg-gray-600 text-gray-300"
                                                        : "border border-gray-600 bg-transparent text-white hover:bg-gray-700"
                                                    }
                                                `}
                                            >
                                                <FaCheck />

                                                {isCompleted
                                                    ? "Completed"
                                                    : "Mark as Done"}
                                            </button>
                                        )}


                                        {/* Remove */}
                                        <button
                                            onClick={() =>
                                                handleRemove(workout.id)
                                            }
                                            aria-label={`Remove ${workout.name}`}
                                            className="
                                                btn
                                                btn-sm
                                                w-full
                                                rounded-full
                                                border-none
                                                bg-red-500
                                                text-white
                                                hover:bg-red-600
                                                lg:w-auto
                                            "
                                        >
                                            X
                                        </button>

                                    </div>

                                </div>

                            </article>
                        );
                    })}

                </div>
            )}

        </main>
    );
};

export default MyPlanpage;