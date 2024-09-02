"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useUser } from "@/context/UserContext";

// Define a validation schema using Yup
const profileSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
});

const ProfilePage = () => {
  // Initialize the form with useForm.
  const {
    register, // register form inputs to React Hook Form.
    handleSubmit, // handle forms submission.
    formState: { errors }, // Destructuring errors from the form state for validation.
  } = useForm({
    resolver: yupResolver(profileSchema), // Yup schema for validation
  });

  const { user, login } = useUser(); // Access the user data and login function from the user context.

  // Define the onSubmit function to handle form submission.
  const onSubmit = async (data: any) => {
    console.log("Form data submitted:", data);

    // Persist the updated profile to the backend
    const response = await fetch("/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      login(result.profile); // Update the user context with the updated profile
      console.log("Profile updated:", result.profile);
    }
  };

  return (
    <div>
      <h1 className='text-2xl font-bold'>Your Profile</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
        <div className='mb-4'>
          <label className='block text-gray-700'>Username</label>

          <input
            type='text'
            defaultValue={user?.userName}
            {...register("username")}
            className='mt-1 p-2 w-full border rounded'
            placeholder='Enter your username'
          />

          {errors.username && (
            <p className='text-red-500'>{errors.username.message}</p>
          )}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700'>Email</label>
          <input
            type='email'
            defaultValue={user?.email}
            {...register("email")}
            className='mt-1 p-2 w-full border rounded'
            placeholder='Enter your email'
          />
          {errors.email && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}
        </div>

        <button
          type='submit'
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
