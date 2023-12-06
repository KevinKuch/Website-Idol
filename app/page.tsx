import Image from 'next/image'
import Container from './component/Container'
import Navbar from './component/navbar/Navbar'

export default function Home() {
  return (
    <main>
      <Container>
        <nav className='relative'>
          <Navbar />
        </nav>
      </Container>
    </main>
  )
}
