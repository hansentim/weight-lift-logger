import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header";
import { UserProvider } from "../context/UserContext";
import { WorkoutProvider } from "../context/WorkoutContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weightlift Logger",
  description: "Track your workouts and progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <WorkoutProvider>
          <UserProvider>
            <Header />
            <main className='container mx-auto p-4'>{children}</main>
          </UserProvider>
        </WorkoutProvider>
      </body>
    </html>
  );
}
