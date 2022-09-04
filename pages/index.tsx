import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useState } from 'react';

const Home: NextPage = () => {
  const [inputCode, setInputCode] = useState('');
  const router = useRouter();
  const createNewDocument = async () => {

    const newChannel = await fetch("/api/createChannel", {
      method: "GET"
    });

    const newChannelJson = await newChannel.json();

    router.push(`/editor/${newChannelJson.id}`);
  }
  return (
    <div className="w-screen h-screen bg-white flex flex-col space-y-6 p-2 justify-center items-center">
      <h1 className="font-sans text-6xl font-bold text-black">HopDown</h1>
      <button onClick={createNewDocument} className="w-60 h-16 bg-blue-500 rounded-lg text-white font-sans text-xl font-bold">Create a document</button>
      <div className="flex">
        <input value={inputCode} onChange={e => setInputCode(e.currentTarget.value)} className="w-52 h-16 bg-white border-l-4 border-t-4 border-b-4 rounded-l-lg border-blue-500 pl-2 focus:outline-none font-sans font-bold text-xl" placeholder="Document Code"></input>
        <button onClick={() => router.push(`/editor/${inputCode}`)} className="w-20 h-16 bg-blue-500 text-white rounded-r-lg font-sans text-xl font-bold">Join</button>
      </div>
    </div>
  )
}

export default Home
