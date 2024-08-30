// "use client";

// // import { useUser } from "@clerk/nextjs";
// // import SignInButton from "../../components/SignInButton";
// // import { Button } from "../../components/ui/button";
// // import { signIn } from "next-auth/react";
// // import { NextUIProvider } from "@nextui-org/react";
// // import Image from "next/image";
// // import { HeroSection } from "@/components/hero";
// // import Featured from "@/components/Featured";
// // import Product from "@/components/Products";
// // import { Accordions } from "@/components/Accordion";
// // import Supported from "@/components/Supported";
// // import Footer from "@/components/Footer";
// // import { useEffect } from "react";
// // import ProductCard from "@/components/Products/ProductDetails";
// // import Panel from "@/components/Panel";
// // import { Shell } from "@/components/shell/shell";
// // import CourseSideBar from "@/components/UnitSide";
// // import CourseMarketplace from "@/components/courses";
// // import { Course } from "@/components/courses/course";

// // // const apiKey = process.env.GOOGLE_CLIENT_ID;

// // export default function Courses() {
// //   // const user = useUser();
  
// //   return (
// //     <NextUIProvider>
// //       <main className=" min-h-screen  grid place-items-center space-y-10 md:space-y-20 p-16">
// //         {/* hellow */}
// //         {/* <HeroSection /> */}
// //         {/* <Products /> */}
// //         {/* <Product /> */}
// //         <Featured />
// //         {/* <ProductCard title={"sfd"} subtitle={"Hello"} url={""} image={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fphoto%2520editing%2F&psig=AOvVaw0UgVlc23i8aAKXf6UoqfTc&ust=1724801897123000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD9l_Ppk4gDFQAAAAAdAAAAABAR"}/>  */}
// //          {/* Can be used for course card  */}
         
// //         {/* <Accordions /> */}
// //         <Course/>
// //         <CourseMarketplace/>
// //         {/* <Supported /> */}
// //       </main>
// //       <div className="m-10">
// //         <Footer />
// //       </div>
// //     </NextUIProvider>
// //   );
// // }


// // app/courses/page.tsx
// import React from "react";
// import CourseMarketplace from "@/components/courses/index";
// import { Accordion } from "@/components/ui/accordion";
// import { Accordions } from "@/components/Accordion";
// import { cn, NextUIProvider } from "@nextui-org/react";
// import { Link } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Footer } from "react-day-picker";

// export default function CoursesPage() {
//   return (
//     // <NextUIProvider>  
//     <main className="min-h-screen p-16">
//       <h1 className="text-4xl font-bold mb-8">Available Courses</h1>
//       {/* CourseMarketplace Component */}
//       <CourseMarketplace />
//       {/* <Accordions /> */}
//      <div className="m-10">
//      <Footer />
//    </div>
//     </main>
   
//   );
// }
// {/* </NextUIProvider> */}



// "use client" 
// app/about/page.tsx
// import ProductCard from "@/components/Products/ProductDetails";
// import { NextUIProvider } from "@nextui-org/react";
// import { useEffect } from "react";

// export default function AboutPage() {
//     return (
//         // <NextUIProvider>
//       <div>
//         <title>Courses</title>
//         <h1>About Us</h1>
//         <p>Welcome to the About Us page!</p>
//         {/* <ProductCard title={"sfd"} subtitle={"Hello"} url={""} image={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fphoto%2520editing%2F&psig=AOvVaw0UgVlc23i8aAKXf6UoqfTc&ust=1724801897123000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD9l_Ppk4gDFQAAAAAdAAAAABAR"}/> */}
//       </div>
//     //   </NextUIProvider>
//     );
//   }
//  "use client" 
//  //latest
// import { useState } from 'react';
// import { ethers } from 'ethers';
// import ProductCard from '@/components/Products/ProductDetails';
// import { NextUIProvider } from '@nextui-org/react';
// import React from 'react';
// import { create } from 'ipfs-http-client';
// import { publishCourse } from '../../utils/contract';

// export default function PublishCourse() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);
//   const [content, setContent] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Connect to IPFS (you'll need to set up your own IPFS node or use a service like Infura)
//     const ipfs = create({ url: 'YOUR_IPFS_NODE_ADDRESS' });

//     // Upload image to IPFS
//     const imageResult = await ipfs.add(image);
//     const imageUri = `ipfs://${imageResult.path}`;

//     // Upload content to IPFS
//     const contentResult = await ipfs.add(content);
//     const contentUri = `ipfs://${contentResult.path}`;

//     // Create metadata
//     const metadata = {
//       title,
//       description,
//       image: imageUri,
//       content: contentUri
//     };

//     // Upload metadata to IPFS
//     const metadataResult = await ipfs.add(JSON.stringify(metadata));
//     const metadataUri = `ipfs://${metadataResult.path}`;

//     // Now publish the course on the blockchain
//     try {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       await publishCourse(signer, ethers.utils.parseEther(price), metadataUri);
//       alert('Course published successfully!');
//     } catch (error) {
//       console.error('Error publishing course:', error);
//       alert('Failed to publish course');
//     }
//   };

//   return (
//     <NextUIProvider>
//     <div>
//     <form >
//       <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Course Title" />
//       <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Course Description" />
//       <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price in ETH" />
//       <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" />
//       <input type="file" onChange={(e) => setContent(e.target.files[0])} />
//       <button type="submit">Publish Course</button>
//     </form>
//     {/* <ProductCard title={'sdf'} subtitle={"undefined"} url={'/'} image={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fphoto%2520editing%2F&psig=AOvVaw0UgVlc23i8aAKXf6UoqfTc&ust=1724801897123000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD9l_Ppk4gDFQAAAAAdAAAAABAR"}/> */}
//     </div>
//     </NextUIProvider>   
//   );
// }  
//latest


// components/PublishCourseForm.js
// import { useState } from 'react';
// import { ethers } from 'ethers';
// import { uploadToIPFS } from '../../utils/upload';
// import { publishCourse } from '../../utils/contract; 
// //Assumes you have this utility function

// export default function PublishCourseForm() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [file, setFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       // Upload file to IPFS
//       const ipfsPath = await uploadToIPFS(file);
      
//       // Create metadata
//       const metadata = {
//         title,
//         description,
//         contentUri: `ipfs://${ipfsPath}`
//       };
      
//       // Upload metadata to IPFS
//       const metadataIpfsPath = await uploadToIPFS(JSON.stringify(metadata));
      
//       // Publish course on the blockchain
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       await publishCourse(signer, ethers.utils.parseEther(price), `ipfs://${metadataIpfsPath}`);
      
//       alert('Course published successfully!');
//     } catch (error) {
//       console.error('Error publishing course:', error);
//       alert('Failed to publish course');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Course Title" />
//       <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Course Description" />
//       <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price in ETH" />
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <button type="submit">Publish Course</button>
//     </form>
//   );
// }


// "use client"
// import { useState } from 'react';
// import { ethers } from 'ethers';
// import { NextUIProvider } from '@nextui-org/react';
// import { publishCourse } from '../../utils/contract';
// import { uploadToPinata } from '../../utils/upload';

// export default function PublishCourse() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);
//   const [content, setContent] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Upload image to Pinata
//       const imageUri = await uploadToPinata(image, `${title}-image`);

//       // Upload content to Pinata
//       const contentUri = await uploadToPinata(content, `${title}-content`);

//       // Create and upload metadata
//       const metadata = {
//         title,
//         description,
//         image: imageUri,
//         content: contentUri
//       };
//       const metadataUri = await uploadToPinata(
//         new Blob([JSON.stringify(metadata)], { type: 'application/json' }),
//         `${title}-metadata`
//       );

//       // Publish the course on the blockchain
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       await publishCourse(signer, ethers.utils.parseEther(price), metadataUri);

//       alert('Course published successfully!');
//     } catch (error) {
//       console.error('Error publishing course:', error);
//       alert('Failed to publish course');
//     }
//   };

//   // ... rest of your component code
//   return (
//     <NextUIProvider>
//     <div>
//     <form >
//       <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Course Title" />
//       <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Course Description" />
//       <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price in ETH" />
//       <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" />
//       <input type="file" onChange={(e) => setContent(e.target.files[0])} />
//       <button type="submit">Publish Course</button>
//     </form>
//     {/* <ProductCard title={'sdf'} subtitle={"undefined"} url={'/'} image={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fphoto%2520editing%2F&psig=AOvVaw0UgVlc23i8aAKXf6UoqfTc&ust=1724801897123000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD9l_Ppk4gDFQAAAAAdAAAAABAR"}/> */}
//     </div>
//     </NextUIProvider>   
//   );
//}



//main
// "use client"

// import { useState } from 'react';
// import { ethers } from 'ethers';
// import { NextUIProvider } from '@nextui-org/react';
// import React from 'react';
// import { publishCourse } from '../../utils/contract';
// import { uploadToPinata } from '../../utils/upload';
// import { eduChain } from '@/utils/eduChainConfig';

// export default function PublishCourse() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState<File | null>(null);
//   const [content, setContent] = useState<File | null>(null);

//   const switchToEduChain = async () => {
//     if (!window.ethereum) throw new Error("No crypto wallet found");
    
//     try {
//       // Try to switch to the EDU Chain
//       await window.ethereum.request({
//         method: 'wallet_switchEthereumChain',
//         params: [{ chainId: `0x${eduChain.id.toString(16)}` }],
//       });
//     } catch (switchError: any) {
//       // This error code indicates that the chain has not been added to MetaMask.
//       if (switchError.code === 4902) {
//         try {
//           await window.ethereum.request({
//             method: 'wallet_addEthereumChain',
//             params: [{
//               chainId: `0x${eduChain.id.toString(16)}`,
//               chainName: eduChain.name,
//               nativeCurrency: eduChain.nativeCurrency,
//               rpcUrls: eduChain.rpcUrls.default.http,
//               blockExplorerUrls: ['https://opencampus-codex.blockscout.com/']
//             }]
//           });
//         } catch (addError) {
//           throw new Error("Failed to add EDU Chain to your wallet");
//         }
//       } else {
//         throw new Error("Failed to switch to EDU Chain");
//       }
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!image || !content) {
//       alert('Please select both image and content files.');
//       return;
//     }

//     if (!ethers) {
//       alert('Ethers library not loaded yet. Please try again.');
//       return;
//     }

//     try {
//       if (!window.ethereum) {
//         throw new Error("No crypto wallet found. Please install it.");
//       }
  
//       // Request account access
//       await window.ethereum.request({ method: 'eth_requestAccounts' });
  
//       // Switch to EDU Chain
//       await switchToEduChain();

//       // Upload image to Pinata
//       const imageUri = await uploadToPinata(image, `${title}-image`);

//       // Upload content to Pinata
//       const contentUri = await uploadToPinata(content, `${title}-content`);

//       // Create metadata
//       const metadata = {
//         title,
//         description,
//         image: imageUri,
//         content: contentUri
//       };

//       // Upload metadata to Pinata
//       const metadataUri = await uploadToPinata(
//         new Blob([JSON.stringify(metadata)], { type: 'application/json' }),
//         `${title}-metadata`
//       );

//       // Now publish the course on the blockchain
//       // const provider =  new ethers.providers.Web3Provider(window.ethereum);
//       const provider =  new ethers.BrowserProvider(window.ethereum);
//       const signer =  provider.getSigner();
//       await publishCourse(await signer, ethers.parseEther(price), metadataUri);

//       alert('Course published successfully!');
//       // alert(`Course published successfully! Course ID: ${publishCourse.price}`);
//     } catch (error) {
//       console.error('Error publishing course:', error);
//       alert('Failed to publish course: ' + (error as Error).message);
//     }
//   };

//   return (
//     <NextUIProvider>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Course Title" required />
//           <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Course Description" required />
//           <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price in ETH" required />
//           <input type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} accept="image/*" required />
//           <input type="file" onChange={(e) => setContent(e.target.files?.[0] || null)} required />
//           <button type="submit">Publish Course</button>
//         </form>
//       </div>
//     </NextUIProvider>
//   );
// }


// // import React from "react";
// // import CourseMarketplace from "@/components/courses/index";
// // import { Accordion } from "@/components/ui/accordion";
// // import { Accordions } from "@/components/Accordion";
// // import { cn, NextUIProvider } from "@nextui-org/react";
// // import { Link } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Footer } from "react-day-picker";
// // import PublishCourse from "@/components/publishcourse";

// // export default function PublishPage() {
// //   return (

// //     <main className="min-h-screen p-16">
// //       <h1 className="text-4xl font-bold mb-8">Available Courses</h1>
// //       {/* CourseMarketplace Component */}
// //       {/* <PublishCourse /> */}
// //       {/* <Accordions /> */}
// //      <div className="m-10">
// //      <Footer />
// //    </div>
// //     </main>
// //   );
// // }


// "use client"
// import React, { useState, useEffect } from 'react';
// import { ethers } from 'ethers';
// import { getContract } from '../../utils/contract';
// import { Card, CardBody, CardFooter, Image, Button, NextUIProvider, cn, Link, } from '@nextui-org/react';

// interface Course {
//   id: number;
//   creator: string;
//   price: string;
//   isActive: boolean;
//   contentURI: string;
//   title: string;
//   description: string;
//   image: string;
// }

// const CourseMarketplace: React.FC = () => {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       if (typeof window.ethereum !== 'undefined') {
//         const provider = new ethers.BrowserProvider(window.ethereum);
//         const contract = getContract(provider);

//         const coursesCount = await contract.nextCourseId();
//         const fetchedCourses: Course[] = [];

//         for (let i = 1; i < coursesCount.toNumber(); i++) {
//           const course = await contract.courses(i);
//           if (course.isActive) {
//             // Fetch metadata from IPFS
//             const response = await fetch(course.contentURI.replace('ipfs://', 'https://ipfs.io/ipfs/'));
//             const metadata = await response.json();

//             fetchedCourses.push({
//               id: i,
//               creator: course.creator,
//               price: ethers.formatEther(course.price),
//               isActive: course.isActive,
//               contentURI: course.contentURI,
//               title: metadata.title,
//               description: metadata.description,
//               image: metadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/'),
//             });
//           }
//         }

//         setCourses(fetchedCourses);
//       }
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const purchaseCourse = async (courseId: number, price: string) => {
//     try {
//       if (typeof window.ethereum !== 'undefined') {
//         const provider = new ethers.BrowserProvider(window.ethereum);
//         const signer = await provider.getSigner();
//         const contract = getContract(signer);

//         const tx = await contract.purchaseCourse(courseId, {
//           value: ethers.parseEther(price)
//         });

//         await tx.wait();

//         alert('Course purchased successfully!');
//         // Optionally, update the UI or refetch courses here
//       }
//     } catch (error) {
//       console.error('Error purchasing course:', error);
//       alert('Failed to purchase course: ' + (error as Error).message);
//     }
//   };

//   if (loading) {
//     return <div>Loading courses...</div>;
//   }

//   return (
//     <NextUIProvider>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//       {courses.map((course) => (
//         <Card key={course.id} className="max-w-sm">
//           <CardBody>
//             <Image
//               src={course.image}
//               alt={course.title}
//               className="w-full h-48 object-cover rounded-lg"
//             />
//             <text className="mt-2">{course.title}</text>
//             <text className="text-sm text-gray-500 mt-1">Creator: {course.creator}</text>
//             <text className="mt-2">{course.description}</text>
//             <text className="font-bold mt-2">Price: {course.price} ETH</text>
//           </CardBody>
//           <CardFooter>
//             <Button 
//               onClick={() => purchaseCourse(course.id, course.price)}
//               color="primary"
//               className="w-full"
//             >
//               Purchase
//             </Button>
//           </CardFooter>
//         </Card>
//       ))}
//     </div>
//     </NextUIProvider>
//   );
// };

// export default CourseMarketplace;



// "use client";  GOLD

// import { useUser } from "@clerk/nextjs";
// import SignInButton from "../../components/SignInButton";
// import { Button } from "../../components/ui/button";
// import { signIn } from "next-auth/react";
// import { NextUIProvider } from "@nextui-org/react";
// import Image from "next/image";
// import { HeroSection } from "@/components/hero";
// import Featured from "@/components/Featured";
// import Product from "@/components/Products";
// import { Accordions } from "@/components/Accordion";
// import Supported from "@/components/Supported";
// import Footer from "@/components/Footer";
// import { useEffect } from "react";
// import ProductCard from "@/components/Products/ProductDetails";
// import Panel from "@/components/Panel";
// import { Shell } from "@/components/shell/shell";
// import CourseSideBar from "@/components/UnitSide";
// import PublishCourse from "@/components/publishcourse";
// import FunctionsVisual from "@/components/Products/FunctionsVisual";
// import CoursesPage from "@/components/purchasecourse";
// import CourseMarketplace from "@/components/Coursemarketplacenew";

// // const apiKey = process.env.GOOGLE_CLIENT_ID;

// export default function Home() {  
//   return (
//     <NextUIProvider>
//       <main className=" min-h-screen  grid place-items-center space-y-10 md:space-y-20 p-16">
//          <h1>Courses</h1>
//          <CourseMarketplace/>
//       </main>
//       <div className="m-10">
//         <Footer />
//       </div>
//     </NextUIProvider>
//   );
// } GOLD

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
          {/* <CourseMarketplace/> */}
        </div>
      </main>
    </NextUIProvider>
  );
}



// import { ethers } from 'ethers';
// import { getContract } from '../../utils/contract';
// import CourseCard from '@/components/CourseCard';
// import { NextUIProvider } from '@nextui-org/react';
// // import CourseCard from '../../components/CourseCard';

// async function getCourses() {
//   const provider = new ethers.JsonRpcProvider('https://rpc.open-campus-codex.gelato.digital');
//   const contract = getContract(provider);
//   const coursesCount = await contract.nextCourseId();
//   const courses = [];

//   for (let i = 1; i < coursesCount.toNumber(); i++) {
//     const course = await contract.courses(i);
//     if (course.isActive) {
//       const response = await fetch(course.contentURI.replace('ipfs://', 'https://ipfs.io/ipfs/'));
//       const metadata = await response.json();
//       courses.push({
//         id: i,
//         creator: course.creator,
//         price: ethers.formatEther(course.price),
//         isActive: course.isActive,
//         contentURI: course.contentURI,
//         title: metadata.title,
//         description: metadata.description,
//         image: metadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/'),
//       });
//     }
//   }

//   return courses;
// }

// export default async function CoursesPage() {
//   const courses = await getCourses();

//   return (
//     <NextUIProvider>
//     <main className="min-h-screen p-4">
//       <h1 className="text-2xl font-bold mb-4">All Courses</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {courses.map((course) => (
//           <CourseCard key={course.id} course={course} />
//         ))}
//       </div>
//     </main>
//      </NextUIProvider>
//   );
// }