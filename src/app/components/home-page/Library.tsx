import { IWorkout } from "@/types/workout.type";
import WorkOutCard from "./WorkOutCard";

// ================= FETCH WORKOUTS =================
const getWorkouts = async (): Promise<IWorkout[]> => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
};

// ================= LIBRARY =================
const Library = async () => {
  const workouts = await getWorkouts();

  return (
    <section className="container mx-auto px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

      {/* ================= HEADER ================= */}
      <div className="mb-8 sm:mb-10">
        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          THE LIBRARY
        </h2>

        <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* ================= WORKOUT GRID ================= */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkOutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>

    </section>
  );
};

export default Library;