import { PrismaClient } from "@prisma/client"; // Import the Prisma client to interact with the database

const prisma = new PrismaClient(); // Initialize a Prisma client instance

// Default function to handle incoming API requests
export default async function handler(req: any, res: any) {
  // Check if the request method is POST (for creating a workout)
  if (req.method === "POST") {
    // Destructure the request body to extract the workout data
    const { userId, exercise, sets, reps, weight } = req.body;

    try {
      // Create a new workout in the database, associating it with the user (via userId)
      const workout = await prisma.workout.create({
        data: {
          exercise,
          sets,
          reps,
          weight,
          user: { connect: { id: userId } }, // Link this workout to the user with the given userId
        },
      });

      // Send a 201 (Created) response with the newly created workout
      res.status(201).json(workout);
    } catch (error) {
      // If an error occurs, send a 500 (Server Error) response with an error message
      res.status(500).json({ error: "Failed to create workout" });
    }
  } else if (req.method === "GET") {
    // If the request method is GET, fetch all workouts from the database
    const workouts = await prisma.workout.findMany();

    // Send a 200 (OK) response with the list of workouts
    res.status(200).json(workouts);
  } else {
    // If the request method is neither POST nor GET, return a 405 (Method Not Allowed) response
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
