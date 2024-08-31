"use client"; //told

import { useState } from 'react';
import { ethers } from 'ethers';
import { Card, CardFooter, CardHeader, cn, Input, NextUIProvider } from '@nextui-org/react';
import React from 'react';
import { publishCourse } from '../../utils/contract';
import { uploadToPinata } from '../../utils/upload';
import { eduChain } from '@/utils/eduChainConfig';
import { Label } from 'flowbite-react';
import { register } from 'module';
import { Icons } from '../icons';
import { buttonVariants } from '../ui/button';
import { CardTitle, CardDescription, CardContent } from '../ui/card';

export default function PublishCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState<File | null>(null);

  const switchToEduChain = async () => {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    
    try {
      // Try to switch to the EDU Chain
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${eduChain.id.toString(16)}` }],
      });
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: `0x${eduChain.id.toString(16)}`,
              chainName: eduChain.name,
              nativeCurrency: eduChain.nativeCurrency,
              rpcUrls: eduChain.rpcUrls.default.http,
              blockExplorerUrls: ['https://opencampus-codex.blockscout.com/']
            }]
          });
        } catch (addError) {
          throw new Error("Failed to add EDU Chain to your wallet");
        }
      } else {
        throw new Error("Failed to switch to EDU Chain");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image || !content) {
      alert('Please select both image and content files.');
      return;
    }

    if (!ethers) {
      alert('Ethers library not loaded yet. Please try again.');
      return;
    }

    try {
      if (!window.ethereum) {
        throw new Error("No crypto wallet found. Please install it.");
      }
  
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
  
      // Switch to EDU Chain
      await switchToEduChain();

      // Upload image to Pinata
      const imageUri = await uploadToPinata(image, `${title}-image`, description);

      // Upload content to Pinata
      const contentUri = await uploadToPinata(content, `${title}-content`, description);

      // Create metadata
      const metadata = {
        title,
        description,
        image: imageUri,
        content: contentUri
      };

      const metadataFile = new File(
        [JSON.stringify(metadata)],
        `${title}-metadata.json`, // Providing a name for the file
        { type: 'application/json' }
      );

      // Upload metadata to Pinata
      const metadataUri = await uploadToPinata(
        metadataFile,
        `${title}-metadata`,
         description
      );

      // Now publish the course on the blockchain
      // const provider =  new ethers.providers.Web3Provider(window.ethereum);
      const provider =  new ethers.BrowserProvider(window.ethereum);
      const signer =  provider.getSigner();
      await publishCourse(await signer, ethers.parseEther(price), metadataUri);

      alert('Course published successfully! \nYou can check your listing in courses route');
    
      setTitle('')
      setDescription('')
      setPrice('')
      setImage(null)
      setContent(null)
    } catch (error) {
      console.error('Error publishing course:', error);
      alert('Failed to publish course: ' + (error as Error).message);
    }
  };

  return (
    <NextUIProvider>
      <div>

        <form onSubmit={handleSubmit}>
          <div className='flex-col m-3 items-center justify-center'>
          <input className="flex m-5 h-14 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[400px]" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Course Title" required />
          <textarea className="flex m-5 h-14 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[400px]" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Course Description" required />
          <input className="flex m-5 h-14 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[400px]" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price in EDU" required />
          <input className="flex m-5 h-14 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[400px]" type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} accept="image/*" required />
          <input className="flex m-5 h-14 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[400px]" type="file" onChange={(e) => setContent(e.target.files?.[0] || null)} required />
          <button className="border m-5 rounded-lg p-4" type="submit">Publish Course</button>
          </div>
        </form>
      </div>
    </NextUIProvider>
  );
}