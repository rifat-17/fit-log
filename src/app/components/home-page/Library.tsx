import { IWorkout } from "@/types/workout.type";
import WorkOutCard from "./WorkOutCard";

const getWorkouts = async (): Promise<IWorkout[]> => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
};

const Library = async () => {
  const workouts = await getWorkouts();

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          THE LIBRARY
        </h2>

        <p className="mt-2 text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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