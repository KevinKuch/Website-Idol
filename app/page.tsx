import Image from 'next/image'
import Container from './component/Container'
import Navbar from './component/navbar/Navbar'
import Intro from './component/intro/Intro'

export default function Home() {
  return (
    <main>
      <Container>
        <nav className='relative'>
          <Navbar />
          <Intro />
        </nav>
      </Container>
    </main>
  )
}
