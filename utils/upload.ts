// import { create } from 'ipfs-http-client';

// // Configure IPFS (you might want to use environment variables for the URL)
// const ipfs = create({ url: 'https://ipfs.infura.io:5001/api/v0' });

// export async function uploadToIPFS(file) {
//   try {
//     const added = await ipfs.add(file);
//     return added.path;
//   } catch (error) {
//     console.error('Error uploading file to IPFS:', error);
//     throw error;
//   }
// }

import axios from 'axios';

const pinataApiKey = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const pinataSecretApiKey = process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY;

export async function uploadToPinata(file: File, name: string, description: string) {
  const formData = new FormData();
  formData.append('file', file);
  
  const metadata = JSON.stringify({
    name: name,
  });
  formData.append('pinataMetadata', metadata);
  
  try {
    const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
      maxBodyLength: Infinity,
      headers: {
        'Content-Type':'multipart/form-data',
        'pinata_api_key': pinataApiKey,
        'pinata_secret_api_key': pinataSecretApiKey
      }
    });

    const metadataJson = JSON.stringify({
      title: name,
      description: description,
      image: `ipfs://${res.data.IpfsHash}`,
      content: `ipfs://${res.data.IpfsHash}` // You might want to upload content separately if it's different from the image
    });

    const metadataRes = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", metadataJson, {
      headers: {
        'Content-Type': 'application/json',
        'pinata_api_key': pinataApiKey,
        'pinata_secret_api_key': pinataSecretApiKey
      }
    });

    return `ipfs://${res.data.IpfsHash}`;
  } catch (error) {
    console.error('Error uploading to Pinata:', error);
    throw error;
  }
}