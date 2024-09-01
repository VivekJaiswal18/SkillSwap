
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


"use client";

import { useUser } from "@clerk/nextjs";
import SignInButton from "../../components/SignInButton";
import { Button } from "../../components/ui/button";
import { signIn } from "next-auth/react";
import { Link, NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import { HeroSection } from "@/components/hero";
import Featured from "@/components/Featured";
import Product from "@/components/Products";
import { Accordions } from "@/components/Accordion";
import Supported from "@/components/Supported";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import ProductCard from "@/components/Products/ProductDetails";
import Panel from "@/components/Panel";
import { Shell } from "@/components/shell/shell";
// import CourseSideBar from "@/components/UnitSide";
import PublishCourse from "@/components/publishcourse";

// const apiKey = process.env.GOOGLE_CLIENT_ID;

export default function Home() {
  // const user = useUser();
  
  return (
    <NextUIProvider>
      <div className="fixed top-0 right-0 m-5">
      <Link href="/courses">
      <button className="border m-5 p-4 rounded-lg  mt-20 " type="submit">Published Courses</button>
      </Link>
      </div>
      <main className=" min-h-screen  grid place-items-center space-y-10 md:space-y-20 p-16">
         {/* <button className="border m-5 rounded-lg p-4" type="submit">Published Courses</button> */}
         <h1 className="items-start text-3xl font-bold mt-5">Publish a Course</h1>
         <PublishCourse/>
      </main>
      <div className="m-10">
        <Footer />
      </div>
    </NextUIProvider>
  );
}
