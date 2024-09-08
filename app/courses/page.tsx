"use client" 
import { NextUIProvider } from '@nextui-org/react';
import { getAllCourses } from '../../utils/contract';
import CourseCard from '../../components/CourseCard';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import CourseMarketplace from '@/components/Coursemarketplacenew';
import { ConstructionIcon } from 'lucide-react';

export default async function CoursesPage() {
  // const courses = await getAllCourses();

  let courses = [];
  let isLoading = true;
  try {
    courses = await getAllCourses();
    isLoading = false;
  } catch (error) {
    console.error("Error fetching courses:", error);
    isLoading = false;
  }

  if (isLoading) {
    return <p>Loading course data...</p>;
  }

  if (courses.length === 0) {
    return <p>No courses found</p>;
  }
  

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


// "use client"

// import { NextUIProvider } from '@nextui-org/react';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
// import CourseMarketplace from '@/components/CourseMarketplacenew';

// export default function CoursesPage() {
//   return (
//     <NextUIProvider>
//       <main className="min-h-screen p-16">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold">All Courses</h1>
//           <ConnectButton />
//         </div>
//         <CourseMarketplace />
//       </main>
//     </NextUIProvider>
//   );
// }