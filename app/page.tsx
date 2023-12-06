import Image from 'next/image'
import Container from './component/Container'
import Navbar from './component/navbar/Navbar'
import Intro from './component/intro/Intro'
import ListIdol from './component/section/ListIdol'
import Schedule from './component/schedule/Schedule'
import Footer from './component/footer/Footer'

export default function Home() {
  return (
    <main>
        <div className='relative'>
          <Intro />
          <ListIdol />
          <hr className='w-full mt-16'/>
          <Schedule />
        </div>
    </main>
  )
}
