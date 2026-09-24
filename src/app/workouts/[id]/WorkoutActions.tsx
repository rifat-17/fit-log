"use client";

import { useFitlog } from '@/context/FitLogContext';
import { IWorkout } from '@/types/workout.type';
import React from 'react';
import { FaBookmark, FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface WorkoutActionsProps {
    workout: IWorkout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
    const { addToPlan, addToSaved } = useFitlog();

    const handleAddToPlan = () => {
        addToPlan(workout);
        toast.success("Added to today's plan");
    };
    const handleSaveForLater = () => {
        addToSaved(workout);
        toast.success("Saved for later");
    };
    return (


        <div>
            {/* ================= CTA BUTTONS ================= */}
            <div className="
            flex
            flex-col
            sm:flex-row
            gap-3
            sm:gap-4
            pt-2
          ">

                <button
                onClick={handleAddToPlan}
                 className="
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

                <button
                onClick={handleSaveForLater}
                 className="
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
    );
};

export default WorkoutActions;