import Image from 'next/image'
// import Sidebar from './components/sidebar'
// import HomePage from './homepage'
import {ContextApiProvider} from './../context/contextApi'

import Header from './components/header'
import Feed from './components/Feed'
import SearchResult from './components/SearchResult' 
import VideoDetails from './components/VideoDetails'


export default function Home() {
  return (
    <ContextApiProvider>
    <div className=''>
      {/* <h1 className='font-bold underline '>Is everything working</h1> */}
      <Header />
      {/* <div className='app_container'>
        <Sidebar />
        <Container fluid className="app_main">
          <HomePage />
        </Container>
      </div> */}
    </div>
    </ContextApiProvider>
  )
}
