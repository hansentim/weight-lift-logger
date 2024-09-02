"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useWorkouts } from "@/context/WorkoutContext";

// Define a validation schema using Yup
const workoutSchema = Yup.object().shape({
  exercise: Yup.string().required("Exercise name is required"),
  sets: Yup.number()
    .required("Sets is required")
    .min(1, "Sets must be greater than 0"),
  reps: Yup.number()
    .required("Reps is required")
    .min(1, "Reps must be greater than 0"),
  weight: Yup.number()
    .required("Weight is required")
    .min(0, "Weight must be greater than or equal to 0"),
});

const WorkoutPage = () => {
  // Initialize the form with useForm.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(workoutSchema), // Yup schema for validation
  });

  const { addWorkout } = useWorkouts();

  const onSubmit = async (data: any) => {
    console.log("Workout data submitted:", data);

    // Persist the workout to the backend
    const response = await fetch("/api/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Send the form data to the API
    });

    if (response.ok) {
      const result = await response.json();
      addWorkout(result.workout); // Add to global state if successfully persisted
      console.log("Workout added:", result.workout);
    }
  };

  return (
    <div>
      <h1 className='text-2xl font-bold'>Log Your Workout</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
        <div className='mb-4'>
          <label className='block text-gray-700'>Exercise Name</label>
          {/*Register the input with React Hook Form */}
          <input
            type='text'
            {...register("exercise")}
            className='mt-1 p-2 w-full border rounded'
            placeholder='Enter exercise name'
          />

          {errors.exercise && (
            <p className='text-red-500'>{errors.exercise.message}</p>
          )}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700'>Sets</label>
          <input
            type='number'
            {...register("sets")}
            className='mt-1 p-2 w-full border rounded'
            placeholder='Enter number of sets'
          />
          {errors.sets && <p className='text-red-500'>{errors.sets.message}</p>}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700'>Reps</label>
          <input
            type='number'
            {...register("reps")}
            className='mt-1 p-2 w-full border rounded'
            placeholder='Enter number of reps'
          />
          {errors.reps && <p className='text-red-500'>{errors.reps.message}</p>}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700'>Weight (kg)</label>
          <input
            type='number'
            {...register("weight")}
            className='mt-1 p-2 w-full border rounded'
            placeholder='Enter weight in kg'
          />
          {errors.weight && (
            <p className='text-red-500'>{errors.weight.message}</p>
          )}
        </div>

        <button
          type='submit'
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
        >
          Save Workout
        </button>
      </form>
    </div>
  );
};

export default WorkoutPage;
