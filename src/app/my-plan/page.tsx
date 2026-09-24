"use client";

import { useFitlog } from "@/context/FitLogContext";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MyPlanpage = () => {
    const { planWorkouts, savedWorkouts,
        removeFromPlan,
        removeFromSaved,
        markAsDone
    } = useFitlog();

    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    const currentWorkouts =
        activeTab === "plan" ? planWorkouts : savedWorkouts;

    return (
        <section className="container mx-auto px-4 py-10">

            {/* ================= HEADER ================= */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold">
                    MY PLAN
                </h1>

                <p className="mt-2 text-gray-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* ================= METRICS ================= */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                {/* Exercises */}
                <div className="rounded-xl bg-[#1C1F26] p-6">
                    <p className="text-sm text-gray-400">
                        Exercises
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-white">
                        {planWorkouts.length}
                    </h2>
                </div>

                {/* Minutes */}
                <div className="rounded-xl bg-[#1C1F26] p-6">
                    <p className="text-sm text-gray-400">
                        Minutes
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-white">
                        {planWorkouts.reduce(
                            (total, workout) => total + workout.duration,
                            0
                        )}
                    </h2>
                </div>

                {/* Calories */}
                <div className="rounded-xl bg-[#1C1F26] p-6">
                    <p className="text-sm text-gray-400">
                        Calories
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-white">
                        {planWorkouts.reduce(
                            (total, workout) => total + workout.caloriesBurned,
                            0
                        )}
                    </h2>
                </div>

            </div>

            {/* ================= TABS ================= */}
            <div className="mb-8 flex gap-2 border-b border-gray-700">

                <button
                    onClick={() => setActiveTab("plan")}
                    className={`px-5 py-3 font-semibold transition ${activeTab === "plan"
                        ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                        : "text-gray-400 hover:text-white"
                        }`}
                >
                    Today's Plan
                </button>

                <button
                    onClick={() => setActiveTab("saved")}
                    className={`px-5 py-3 font-semibold transition ${activeTab === "saved"
                        ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                        : "text-gray-400 hover:text-white"
                        }`}
                >
                    Saved
                </button>

            </div>

            {/* ================= WORKOUT LIST ================= */}
            <div>

                {/* Empty State */}
                {currentWorkouts.length === 0 ? (
                    <div className="py-16 text-center">

                        <h2 className="text-2xl font-bold">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-2 text-gray-400">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <Link
                            href="/"
                            className="btn mt-6 border-none bg-[#ccff00] text-black hover:bg-[#b8e600]"
                        >
                            Go to workouts
                        </Link>

                    </div>
                ) : (

                    /* Workout Cards */
                    <div className="space-y-4">

                        {currentWorkouts.map((workout) => (

                            <div
                                key={workout.id}
                                className="flex flex-col gap-5 rounded-xl bg-[#1C1F26] p-4 sm:flex-row"
                            >

                                {/* Thumbnail */}
                                <div className="shrink-0">
                                    <Image
                                        src={workout.image}
                                        alt={workout.name}
                                        width={220}
                                        height={150}
                                        className="h-40 w-full rounded-lg object-cover sm:w-56"
                                    />
                                </div>

                                {/* Workout Information */}
                                <div className="flex flex-1 flex-col">

                                    {/* Title */}
                                    <h2 className="text-xl font-bold uppercase">
                                        {workout.name}
                                    </h2>

                                    {/* Equipment */}
                                    <p className="mt-1 text-sm text-gray-400">
                                        {workout.equipment}
                                    </p>

                                    {/* Stats */}
                                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
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

                                {/* Actions */}
                                <div className="flex flex-wrap items-center gap-3">

                                    <Link
                                        href={`/workouts/${workout.id}`}
                                        className=" btn btn-sm btn-outline rounded-4xl"
                                    >
                                        View Details
                                    </Link>
                                            
                                    <button
                                        onClick={() => {
                                            markAsDone(workout.id);
                                            toast.success("Workout marked as done");
                                        }}
                                        className="btn btn-sm bg-[#ccff00] text-black border-none hover:bg-[#b8e600] rounded-4xl "
                                    >
                                        Mark as Done
                                    </button>

                                    <button
                                        onClick={() => {
                                            if (activeTab === "plan") {
                                                removeFromPlan(workout.id);
                                                toast.error("Workout removed from today's plan");
                                            } else {
                                                removeFromSaved(workout.id);
                                                toast.error("Workout removed from saved");
                                            }
                                        }}
                                        className="btn hover:bg-[#b8e600]"
                                    >
                                        X
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>
                )}

            </div>

        </section>
    );
};

export default MyPlanpage;  