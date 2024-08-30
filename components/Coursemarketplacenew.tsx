"use client"; 

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { getContract } from '../utils/contract';
import { Card, CardBody, CardFooter, Image, Button } from '@nextui-org/react';

interface Course {
  id: number;
  creator: string;
  price: string;
  isActive: boolean;
  contentURI: string;
  title: string;
  description: string;
  image: string;
}

const CourseMarketplace: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = getContract(provider);

        const coursesCount = await contract.nextCourseId();
        const fetchedCourses: Course[] = [];

        for (let i = 1; i < coursesCount.toNumber(); i++) {
          const course = await contract.courses(i);
          if (course.isActive) {
            // Fetch metadata from IPFS
            const response = await fetch(course.contentURI.replace('ipfs://', 'https://ipfs.io/ipfs/'));
            const metadata = await response.json();

            fetchedCourses.push({
              id: i,
              creator: course.creator,
              price: ethers.formatEther(course.price),
              isActive: course.isActive,
              contentURI: course.contentURI,
              title: metadata.title,
              description: metadata.description,
              image: metadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/'),
            });
          }
        }

        setCourses(fetchedCourses);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const purchaseCourse = async (courseId: number, price: string) => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = getContract(signer);

        const tx = await contract.purchaseCourse(courseId, {
          value: ethers.parseEther(price)
        });

        await tx.wait();

        alert('Course purchased successfully!');
        // Optionally, update the UI or refetch courses here
      }
    } catch (error) {
      console.error('Error purchasing course:', error);
      alert('Failed to purchase course: ' + (error as Error).message);
    }
  };

  if (loading) {
    return <div>Loading courses...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <Card key={course.id} className="max-w-sm">
          <CardBody>
            <Image
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-2 text-xl font-semibold">{course.title}</h3>
            <p className="text-sm text-gray-500 mt-1">Creator: {course.creator}</p>
            <p className="mt-2">{course.description}</p>
            <p className="font-bold mt-2">Price: {course.price} ETH</p>
          </CardBody>
          <CardFooter>
            <Button
              onClick={() => purchaseCourse(course.id, course.price)}
              color="primary"
              className="w-full"
            >
              Purchase
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CourseMarketplace;