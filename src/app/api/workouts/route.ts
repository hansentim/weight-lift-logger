import { NextResponse } from "next/server";

// Mock database in-memory for simplicity
let workouts: any[] = [];

// GET request to fetch all workouts
export async function GET() {
  return NextResponse.json(workouts);
}

// POST request to add a new workout
export async function POST(request: Request) {
  const newWorkout = await request.json();
  newWorkout.id = Date.now().toString(); // Generate a unique id for the workout

  return NextResponse.json({
    message: "Workout added successfully",
    workout: newWorkout,
  });
}

// DELETE request to delete a workout by its id
export async function DELETE(request: Request) {
  const { id } = await request.json();

  workouts = workouts.filter((workout) => workout.id !== id);

  return NextResponse.json({
    message: `Workout with id ${id} deleted successfully`,
  });
}
