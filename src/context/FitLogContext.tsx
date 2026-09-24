"use client";

import { IWorkout } from "@/types/workout.type";
import React, {
    createContext,
    useContext,
    useState,
} from "react";

interface FitLogContextProps {
    planWorkouts: IWorkout[];
    savedWorkouts: IWorkout[];

    completedWorkouts: number[];
    markAsDone: (id: number) => void;

    addToPlan: (workout: IWorkout) => void;
    addToSaved: (workout: IWorkout) => void;

    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;
}

export const FitLogContext = createContext<
    FitLogContextProps | undefined
>(undefined);

export const useFitlog = () => {
    const context = useContext(FitLogContext);
    if (!context) {
        throw new Error("useFitLog must be used inside FitLogProvider");
    }
    return context
}

const FitLogProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [planWorkouts, setplanWorkouts] = useState<IWorkout[]>([]);
    const [savedWorkouts, setsavedWorkouts] = useState<IWorkout[]>([]);
    const [completedWorkouts, setcompletedWorkouts] = useState<number[]>([]);


    const addToPlan = (workout: IWorkout) => {
        setplanWorkouts((prev) => {
            const alreadyExists = prev.some(
                (item) => item.id === workout.id
            );

            if (alreadyExists) {
                return prev;
            }

            return [...prev, workout];
        });
    };

    const addToSaved = (workout: IWorkout) => {
        setsavedWorkouts((prev) => {
            const alreadyExists = prev.some(
                (item) => item.id === workout.id
            );

            if (alreadyExists) {
                return prev;
            }

            return [...prev, workout];
        });
    };

    const removeFromPlan = (id: number) => {
        setplanWorkouts((prev) => prev.filter((workout) => workout.id !== id)
        )
    }
    const removeFromSaved = (id: number) => {
        setsavedWorkouts((prev) =>
            prev.filter((workout) => workout.id !== id)
        );
    };

    const markAsDone = (id: number) => {
        setcompletedWorkouts((prev) => {
            if (prev.includes(id)) {
                return prev;
            }
            return [...prev, id];
        })
    }

    return (
        <FitLogContext.Provider
            value={{
                planWorkouts,
                savedWorkouts,
                addToPlan,
                addToSaved,
                removeFromPlan,
                removeFromSaved,
                completedWorkouts,
                markAsDone
            }}
        >
            {children}
        </FitLogContext.Provider>
    );
};

export default FitLogProvider;