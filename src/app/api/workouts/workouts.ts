import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { userId, exercise, sets, reps, weight } = req.body;

    try {
      const workout = await prisma.workout.create({
        data: {
          exercise,
          sets,
          reps,
          weight,
          user: { connect: { id: userId } }, // Connect the workout to the user via userId
        },
      });

      res.status(201).json(workout); // Return the newly created workout
    } catch (error) {
      console.error("Error creating workout:", error);
      res.status(500).json({ error: "Failed to create workout" });
    }
  } else if (req.method === "GET") {
    const workouts = await prisma.workout.findMany();
    res.status(200).json(workouts);
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
