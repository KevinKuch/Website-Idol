import Image from 'next/image'
import Container from './component/Container'
import Navbar from './component/navbar/Navbar'
import Intro from './component/intro/Intro'
import ListIdol from './component/section/ListIdol'

export default function Home() {
  return (
    <main>
      <Container>
        <nav className='relative'>
          <Navbar />
          <Intro />
          <ListIdol />
        </nav>
      </Container>
    </main>
  )
}
