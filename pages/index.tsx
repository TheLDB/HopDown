import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Canvas from '../components/Canvas';
import Preloader from '../components/Preloader';

const Home: NextPage = () => {
  const [preloading, setPreloading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloading(false);
    }, 1000)
  }, [])
  return (
    <div>
      {preloading ? (
        <Preloader />
      ) : (
        <div className="w-screen h-screen bg-gray-100">
          <Canvas />
        </div>
      )}
    </div>
    // {loading ? }
    // <div className="w-screen h-screen bg-gray-100">
    //   <Toolbar />
    //   <Buttons />
    // </div>
  )
}

export default Home
