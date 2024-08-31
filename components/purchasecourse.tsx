// "use client"
import { ethers } from 'ethers';
import { getContract } from '@/utils/contract';
import CourseCard from '@/components/CourseCard';

async function getCourses() {
  const provider = new ethers.JsonRpcProvider('https://rpc.open-campus-codex.gelato.digital');
  const contract = getContract(provider);
  const coursesCount = await contract.nextCourseId();
  const courses = [];

  for (let i = 1; i < coursesCount.toNumber(); i++) {
    const course = await contract.courses(i);
    if (course.isActive) {
      const response = await fetch(course.contentURI.replace('ipfs://', 'https://ipfs.io/ipfs/'));
      const metadata = await response.json();
      courses.push({
        id: i,
        creator: course.creator,
        price: course.price,
        isActive: course.isActive,
        contentURI: course.contentURI,
        title: metadata.title,
        description: metadata.description,
        image: metadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/'),
      });
    }
  }

  return courses;
}

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </main>
  );
}