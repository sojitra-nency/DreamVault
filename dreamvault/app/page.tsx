import Image from 'next/image'
import Navbar from './components/Navbar'
import Explore from './Explore/Explore'
export default function Home() {
  return (
    <div className=''>
      <div className='sticky top-0'>
        <Navbar />
      </div>
      <Explore />
    </div>
  )
}
