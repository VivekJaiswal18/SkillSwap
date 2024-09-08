// 'use client';

// import React from 'react';
// import { ethers } from 'ethers';
// import { getContract } from '../utils/contract';
// import { Card, CardBody, CardFooter, Image, Button } from '@nextui-org/react';

// interface CourseProps {
//   course: {
//     id: number;
//     creator: string;
//     price: string;
//     title: string;
//     description: string;
//     image: string;
//   };
// }

// const CourseCard: React.FC<CourseProps> = ({ course }) => {
//   const purchaseCourse = async () => {
//     try {
//       if (typeof window.ethereum !== 'undefined') {
//         const provider = new ethers.BrowserProvider(window.ethereum);
//         const signer = await provider.getSigner();
//         const contract = getContract(signer);

//         const tx = await contract.purchaseCourse(course.id, {
//           value: ethers.parseEther(course.price)
//         });

//         await tx.wait();

//         alert('Course purchased successfully!');
//       }
//     } catch (error) {
//       console.error('Error purchasing course:', error);
//       alert('Failed to purchase course: ' + (error as Error).message);
//     }
//   };

//   return (
//     <Card className="max-w-sm">
//       <CardBody>
//         <Image
//           src={course.image}
//           alt={course.title}
//           className="w-full h-48 object-cover rounded-lg"
//         />
//         <text className="mt-2">{course.title}</text>
//         <text className="text-sm text-gray-500 mt-1">Creator: {course.creator}</text>
//         <text className="mt-2">{course.description}</text>
//         <text className="font-bold mt-2">Price: {course.price} ETH</text>
//       </CardBody>
//       <CardFooter>
//         <Button
//           onClick={purchaseCourse}
//           color="primary"
//           className="w-full"
//         >
//           Purchase
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default CourseCard;

"use client"  //told
import { purchaseCourse } from "@/utils/contract";
import { lineasepoliachain } from "@/utils/lineasepoliaChainConfig";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { ethers } from 'ethers';
import { useEffect, useState } from "react";
import { useAccount} from "wagmi";

interface CourseMetadata {
    title: string;
    description: string;
    image: string;
    content: string;
  }

interface CourseProps {
  course: {
    id: number;
    creator: string;
    price: bigint;
    isActive: boolean;
    contentURI: string;
  };
}

// export default function CourseCard({ course }: CourseProps) {
//   return (
//     <Card shadow="sm">
//       <CardBody className="overflow-visible p-0">
//         <Image
//           shadow="sm"
//           radius="lg"
//           width="100%"
//           alt={`Course ${course.id}`}
//           className="w-full object-cover h-[140px]"
//           src={course.contentURI}
//         />
//       </CardBody>
//       <CardFooter className="text-small justify-between">
//         <b>Course {course.id}</b>
//         <p className="text-default-500">{ethers.formatEther(course.price)} ETH</p>
//       </CardFooter>
//     </Card>
//   );
// }
const ipfsToHttps = (ipfsUrl: string) => {
    if (ipfsUrl.startsWith('ipfs://')) {
      return `https://ipfs.io/ipfs/${ipfsUrl.slice(7)}`;
    }
    return ipfsUrl;
  };

export default function CourseCard({ course }: CourseProps) {
    const [isPurchasing, setIsPurchasing] = useState(false);
    const { address } = useAccount();
    // const { chain } = useNetwork();
    // const { switchNetwork } = useSwitchNetwork();
    const [metadata, setMetadata] = useState<CourseMetadata | null>(null);

    useEffect(() => {
        const fetchMetadata = async () => {
          try {
            const response = await fetch(ipfsToHttps(course.contentURI));
            const data = await response.json();
            setMetadata(data);
          } catch (error) {
            console.error("Error fetching course metadata:", error);
          }
        };
    
        fetchMetadata();
      }, [course.contentURI]);

    const handlePurchase = async () => {
      if (!address) {
        alert("Please connect your wallet");
        return;
      }
  
    //   if (chain?.id !== eduChain.id) {
    //     try {
    //       await switchNetwork?.(eduChain.id);
    //     } catch (error) {
    //       console.error("Failed to switch network", error);
    //       alert("Please switch to the EDU Chain network");
    //       return;
    //     }
    //   }
  
      setIsPurchasing(true);
      try {
        const signer = await new ethers.BrowserProvider(window.ethereum).getSigner();
        await purchaseCourse(await signer, course.id, course.price);
        alert("Course purchased successfully!");
      } catch (error) {
        console.error("Error purchasing course:", error);
        alert("Failed to purchase course");
      } finally {
        setIsPurchasing(false);
      }
    };

    if (!metadata) {
        return <div>Loading course data...</div>;
      }
  
    return (
      <Card shadow="sm">
        <CardBody className="overflow-visible border-4 p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={metadata.title || `Course ${course.id}`}
            className="w-full object-cover h-[140px]"
            src={ipfsToHttps(metadata.image)}
          />
        </CardBody>
        <CardFooter className="text-small justify-between flex-col items-start">
          {/* <b>Course {course.id}</b> */}
          <b>{metadata.title || `Course ${course.id}`}</b>
          <p className="text-default-500">{metadata.description}</p>
          <p className="text-default-500">{ethers.formatEther(course.price)} ETH</p>
          <Button 
            color="primary" 
            onClick={handlePurchase} 
            disabled={isPurchasing}
          >
            {isPurchasing ? "Purchasing..." : "Purchase Course"}
          </Button>
        </CardFooter>
      </Card>
    );
  }

