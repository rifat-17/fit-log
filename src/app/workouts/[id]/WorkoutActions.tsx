"use client";

import { useFitlog } from "@/context/FitLogContext";
import { IWorkout } from "@/types/workout.type";
import React from "react";
import { FaBookmark, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

interface WorkoutActionsProps {
    workout: IWorkout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
    const { addToPlan, addToSaved } = useFitlog();

    // Add workout to today's plan
    const handleAddToPlan = () => {
        addToPlan(workout);
        toast.success("Added to today's plan");
    };

    // Save workout for later
    const handleSaveForLater = () => {
        addToSaved(workout);
        toast.success("Saved for later");
    };

    return (
        <div className="w-full">
            {/* CTA Buttons */}
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4">

                {/* Add to Today's Plan */}
                <button
                    onClick={handleAddToPlan}
                    className="
                        btn
                        w-full
                        rounded-full
                        border-none
                        bg-lime-400
                        text-black
                        hover:bg-lime-500
                        sm:flex-1
                    "
                >
                    <FaPlus className="text-sm" />
                    <span>Add to today's plan</span>
                </button>

                {/* Save for Later */}
                <button
                    onClick={handleSaveForLater}
                    className="
                        btn
                        w-full
                        rounded-full
                        border-none
                        bg-black
                        text-white
                        hover:bg-gray-800
                        sm:flex-1
                    "
                >
                    <FaBookmark className="text-sm" />
                    <span>Save for later</span>
                </button>

            </div>
        </div>
    );
};

export default WorkoutActions;