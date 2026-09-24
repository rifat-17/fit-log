"use client";

import { IWorkout } from "@/types/workout.type";
import React, {
    createContext,
    useContext,
    useState,
} from "react";

/* ================================
   Context Type
================================ */

interface FitLogContextProps {
    // Workout lists
    planWorkouts: IWorkout[];
    savedWorkouts: IWorkout[];

    // Completed workouts
    completedWorkouts: number[];

    // Add workouts
    addToPlan: (workout: IWorkout) => void;
    addToSaved: (workout: IWorkout) => void;

    // Remove workouts
    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;

    // Mark workout as done
    markAsDone: (id: number) => void;
}


/* ================================
   Create Context
================================ */

export const FitLogContext = createContext<
    FitLogContextProps | undefined
>(undefined);


/* ================================
   Custom Hook
================================ */

export const useFitlog = () => {
    const context = useContext(FitLogContext);

    if (!context) {
        throw new Error(
            "useFitlog must be used inside FitLogProvider"
        );
    }

    return context;
};


/* ================================
   Provider
================================ */

const FitLogProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {

    /* ================================
       States
    ================================= */

    const [planWorkouts, setPlanWorkouts] = useState<IWorkout[]>(
        []
    );

    const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>(
        []
    );

    const [completedWorkouts, setCompletedWorkouts] = useState<
        number[]
    >([]);


    /* ================================
       Add to Today's Plan
    ================================= */

    const addToPlan = (workout: IWorkout) => {
        setPlanWorkouts((prev) => {

            // Prevent duplicate workout
            const alreadyExists = prev.some(
                (item) => item.id === workout.id
            );

            if (alreadyExists) {
                return prev;
            }

            return [...prev, workout];
        });
    };


    /* ================================
       Save Workout
    ================================= */

    const addToSaved = (workout: IWorkout) => {
        setSavedWorkouts((prev) => {

            // Prevent duplicate workout
            const alreadyExists = prev.some(
                (item) => item.id === workout.id
            );

            if (alreadyExists) {
                return prev;
            }

            return [...prev, workout];
        });
    };


    /* ================================
       Remove from Today's Plan
    ================================= */

    const removeFromPlan = (id: number) => {
        setPlanWorkouts((prev) =>
            prev.filter((workout) => workout.id !== id)
        );
    };


    /* ================================
       Remove from Saved
    ================================= */

    const removeFromSaved = (id: number) => {
        setSavedWorkouts((prev) =>
            prev.filter((workout) => workout.id !== id)
        );
    };


    /* ================================
       Mark Workout as Done
    ================================= */

    const markAsDone = (id: number) => {
        setCompletedWorkouts((prev) => {

            // Prevent duplicate completed ID
            if (prev.includes(id)) {
                return prev;
            }

            return [...prev, id];
        });
    };


    /* ================================
       Context Provider
    ================================= */

    return (
        <FitLogContext.Provider
            value={{
                // States
                planWorkouts,
                savedWorkouts,
                completedWorkouts,

                // Add
                addToPlan,
                addToSaved,

                // Remove
                removeFromPlan,
                removeFromSaved,

                // Complete
                markAsDone,
            }}
        >
            {children}
        </FitLogContext.Provider>
    );
};

export default FitLogProvider;