import PriceBlock from './PriceBlock/PriceBlock'
import Pictures from './Pictures/Pictures'
import Header from './Header/Header'
import Title from './Title/Title'
import Hero from './Hero/Hero'

import '../static/fonts/fonts.scss'
import './App.scss'
import PhotoList from './PhotoList/PhotoList'
import PriceBlock2 from './PriceBlock2/PriceBlock2'
import PhotoList2 from './PhotoList2/PhotoList2'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className='app'>
      <div className='app__header-wrapper'>
        <div className='app__image-background'>
          <div className='app__content app__content-top'>
            <Header />
            <Title />
            <Hero />
            <h2 className='app__subtitle'>Гардероб - это образ жизни</h2>
          </div>
        </div>
      </div>
      <div className='app__pictures'>
        <Pictures />
      </div>
      <div className='app__price-block'>
        <PriceBlock />
        <div className='app__photo-list-wrapper'>
          <PhotoList />
        </div>
        <div className='app__price-block2-wrapper'>
          <PriceBlock2 />
        </div>
        <div className='app__photo-list2-wrapper'>
          <PhotoList2 />
        </div>
        <div className='app__footer-wrapper'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
