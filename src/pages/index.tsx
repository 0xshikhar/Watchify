import Image from 'next/image'
import { Container } from 'react-bootstrap'
import 

export default function Home() {
  return (
    <div>
      <Header />
      <div className='app_container'>
        <Sidebar />
        <Container fluid className="app_main">
          <HomePage />
        </Container>
      </div>
    </div>
  )
}
