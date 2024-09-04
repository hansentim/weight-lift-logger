"use client";

import React, { useState, useEffect } from "react";

interface Workout {
  id: number;
  exercise: string;
  sets: number;
  reps: number;
  weight: number;
  date: string;
}

const HomePage: React.FC = () => {
  // State to store the workouts fetched from the API
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  // Fetch the workouts from the API when the component mounts
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("/api/workouts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setWorkouts(data); // Update state with the fetched workouts
        } else {
          console.error("Failed to fetch workouts");
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, []); // The empty array ensures the effect runs only once (on mount)

  return (
    <div>
      <h1 className='text-2xl font-bold'>Your Workouts</h1>
      {/* Conditionally render the workouts or a message */}
      {workouts.length > 0 ? (
        <ul className='mt-4 space-y-4'>
          {workouts.map((workout) => (
            <li key={workout.id} className='bg-white shadow rounded-lg p-4'>
              <p>
                <strong>Exercise:</strong> {workout.exercise}
              </p>
              <p>
                <strong>Sets:</strong> {workout.sets}
              </p>
              <p>
                <strong>Reps:</strong> {workout.reps}
              </p>
              <p>
                <strong>Weight:</strong> {workout.weight} kg
              </p>
              <p>
                <strong>Date:</strong> {new Date(workout.date).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className='mt-4 text-gray-600'>
          No workouts logged yet. Start by logging your first workout!
        </p>
      )}
    </div>
  );
};

export default HomePage;
