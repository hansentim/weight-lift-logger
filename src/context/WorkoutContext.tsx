"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

//Define a type for the workout state
type Workout = {
  id: string; // Unique identifier for the workout
  exercise: string;
  sets: number;
  reps: number;
  weight: number;
  date: string;
};

// Define the interface for the workout context.
interface WorkoutContextType {
  workouts: Workout[]; // List of all workouts entries.
  addWorkout: (workout: Workout) => void; // A function to add a new workout
  deleteWorkout: (id: string) => void; // A function to delete a workout by its id
}

//Create the context for the workouts
const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

// WorkoutProvider component that wraps the app or part of it.
export const WorkoutProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Initalize the state to hold an array of workouts.
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  // Define a function to add a new workout to the state.
  const addWorkout = (workout: Workout) => {
    setWorkouts([...workouts, workout]); // Add the new workout to the existing list
  };

  // Function to remove a workout by its id.
  const deleteWorkout = (id: string) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id)); // Remove the workout with matching id
  };

  // Return the context provider with workouts and add/delete functions.
  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout, deleteWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};

// Create a custom hook that other components can use to access the workout context.
export const useWorkout = () => {
  const context = useContext(WorkoutContext); // Access the context

  // Throw an error if the context is not within a provider (i.e, not wrapped by WorkoutProvider).
  if (!context) {
    throw new Error("useWorkout must be used within a WorkoutProvider");
  }
  // Return the context, which includes the workouts and the add/delete functions.
  return context;
};
