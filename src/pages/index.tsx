import Image from 'next/image'
// import Sidebar from './components/sidebar'
import Header from './components/header'
// import HomePage from './homepage'


export default function Home() {
  return (
    <div>
      {/* <h1 className='font-bold underline '>Is everything working</h1> */}
      <Header />
      {/* <div className='app_container'>
        <Sidebar />
        <Container fluid className="app_main">
          <HomePage />
        </Container>
      </div> */}
    </div>
  )
}
