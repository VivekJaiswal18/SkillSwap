"use client" 
import { NextUIProvider } from '@nextui-org/react';
import { getAllCourses } from '../../utils/contract';
import CourseCard from '../../components/CourseCard';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import CourseMarketplace from '@/components/Coursemarketplacenew';

export default async function CoursesPage() {
  const courses = await getAllCourses();

  return (
    <NextUIProvider>
      <main className="min-h-screen p-16">
      <ConnectButton />
        <h1 className="text-3xl font-bold mb-8">All Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
          <CourseMarketplace/>
        </div>
      </main>
    </NextUIProvider>
  );
}
