import Image from "next/image";
import { IWorkout } from "@/types/workout.type";
import Link from "next/link";

interface WorkOutCardProps {
  workout: IWorkout;
}

const WorkOutCard = ({ workout }: WorkOutCardProps) => {
  console.log("WORKOUT:", workout);
  return (
    <Link href={`/workouts/${workout.id}`} >
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            src={workout.image}
            alt={workout.name}
            width={500}
            height={300}
            className="h-60 w-full object-cover"
          />
        </figure>

        <div className="card-body">
          <div className="flex flex-wrap gap-4 mb-4">
            {workout.muscleGroups.map((muscle) => (
              <span key={muscle} className="badge bg-lime-400 text-black">
                {muscle}
              </span>
            ))}
          </div>

          <h2 className="card-title uppercase mb-2">
            {workout.name}
          </h2>

          <p className="text-sm text-gray-400 mb-3">
            {workout.equipment}
          </p>

          <div className="flex items-center justify-between text-sm">
            <span>⏱️ {workout.duration} min</span>
            <span>🔥 {workout.caloriesBurned} kcal</span>
            <span>⭐ {workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkOutCard;