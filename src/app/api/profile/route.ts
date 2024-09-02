import { NextResponse } from "next/server";

// Mock database for user profile (in-memory)
let userProfile: any = {
  id: "1",
  username: "JohnDoe",
  email: "john@example.com",
};

// GET request to fetch the current user profile
export async function GET() {
  return NextResponse.json(userProfile);
}

// POST request to update the user profile
export async function POST(req: Request) {
  const updatedProfile = await req.json();
  userProfile = { ...userProfile, ...updatedProfile }; // Update the mock database with the new data

  return NextResponse.json({
    message: "Profile updated",
    profile: userProfile,
  });
}
