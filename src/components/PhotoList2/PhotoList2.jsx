import React from 'react'
import { Fade } from 'react-reveal'

import './PhotoList2.scss'

const PhotoList2 = () => {
  return (
    <ul className='photo-list'>
      <li className='photo-list__item'>
        <Fade top distance='20px' duration={500} delay={300}>
          <img
            className='photo-list__image'
            src={require('./images/picture1.jpg')}
            alt='Item 1'
          />
        </Fade>
      </li>
      <li className='photo-list__item'>
        <Fade top distance='20px' duration={500} delay={200}>
          <img
            className='photo-list__image'
            src={require('./images/picture2.png')}
            alt='Item 2'
          />
        </Fade>
      </li>
      <li className='photo-list__item'>
        <Fade top distance='20px' duration={500} delay={100}>
          <img
            className='photo-list__image'
            src={require('./images/picture3.jpg')}
            alt='Item 3'
          />
        </Fade>
      </li>
      <li className='photo-list__item'>
        <Fade top distance='20px' duration={500}>
          <img
            className='photo-list__image'
            src={require('./images/picture4.jpg')}
            alt='Item 4'
          />
        </Fade>
      </li>
    </ul>
  )
}

export default PhotoList2
