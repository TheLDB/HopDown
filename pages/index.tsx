import type { NextPage } from 'next'
import Buttons from '../components/Buttons'
import Toolbar from '../components/Toolbar'

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <Toolbar />
      <Buttons />
    </div>
  )
}

export default Home
