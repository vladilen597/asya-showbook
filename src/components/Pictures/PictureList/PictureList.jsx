import React from 'react'
import { Fade } from 'react-reveal'

import './PictureList.scss'

const PictureList = ({ currentAlbum }) => {
  return currentAlbum === 'compaining' ? (
    <Fade left spy={currentAlbum} duration={500}>
      <div className='picture-list'>
        <Fade top distance='10px' duration={500}>
          <img
            className='picture-list__image picture-list__first'
            src={require('./images/picture1.jpg')}
            alt='Photoshot 1'
          />
        </Fade>
        <Fade top distance='10px' duration={500}>
          <img
            className='picture-list__image picture-list__second'
            src={require('./images/picture2.jpg')}
            alt='Photoshot 2'
          />
        </Fade>
        <Fade top distance='10px' duration={500}>
          <img
            className='picture-list__image picture-list__third'
            src={require('./images/picture3.jpg')}
            alt='Photoshot 3'
          />
        </Fade>
        <Fade top distance='10px' duration={500}>
          <img
            className='picture-list__image picture-list__forth'
            src={require('./images/picture4.jpg')}
            alt='Photoshot 4'
          />
        </Fade>
        <Fade top distance='10px' duration={500}>
          <img
            className='picture-list__image picture-list__fifth'
            src={require('./images/picture5.jpg')}
            alt='Photoshot 5'
          />
        </Fade>
        <Fade top distance='10px' duration={500}>
          <img
            className='picture-list__image picture-list__sixth'
            src={require('./images/picture6.jpg')}
            alt='Photoshot 6'
          />
        </Fade>
        <Fade top distance='10px' duration={500}>
          <img
            className='picture-list__image picture-list__seventh'
            src={require('./images/picture7.jpg')}
            alt='Photoshot 7'
          />
        </Fade>
        <Fade top distance='10px' duration={500}>
          <img
            className='picture-list__image picture-list__eigth'
            src={require('./images/picture8.jpg')}
            alt='Photoshot 8'
          />
        </Fade>
      </div>
    </Fade>
  ) : currentAlbum === 'editorial' ? (
    <Fade right spy={currentAlbum} duration={500}>
      <div className='picture-list-compaining'>
        <Fade top distance='10px' duration={500}>
          <img
            className='picture-list__image picture-list-compaining__first'
            src={require('./images/compaining/picture1.jpeg')}
            alt='Photoshot 1'
          />
        </Fade>
        <Fade top distance='10px' duration={500}>
          <img
            className='picture-list__image picture-list-compaining__second'
            src={require('./images/compaining/picture2.jpeg')}
            alt='Photoshot 2'
          />
        </Fade>
        <Fade top distance='10px' duration={500}>
          <img
            className='picture-list__image picture-list-compaining__third'
            src={require('./images/compaining/picture3.jpeg')}
            alt='Photoshot 3'
          />
        </Fade>
        <Fade top distance='10px' duration={500}>
          <img
            className='picture-list__image picture-list-compaining__forth'
            src={require('./images/compaining/picture4.jpeg')}
            alt='Photoshot 4'
          />
        </Fade>
        <Fade top distance='10px' duration={500}>
          <img
            className='picture-list__image picture-list-compaining__fifth'
            src={require('./images/compaining/picture5.jpeg')}
            alt='Photoshot 5'
          />
        </Fade>
      </div>
    </Fade>
  ) : (
    <Fade right spy={currentAlbum} duration={500}>
      <div className='picture-list-lookbook'>
        <Fade top distance='10px' duration={500}>
          <img
            className='picture-list__image picture-list-lookbook__first'
            src={require('./images/lookbook/picture1.jpeg')}
            alt='Photoshot 1'
          />
        </Fade>
        <Fade top distance='10px' duration={500}>
          <img
            className='picture-list__image picture-list-lookbook__second'
            src={require('./images/lookbook/picture2.jpeg')}
            alt='Photoshot 2'
          />
        </Fade>
        <Fade top distance='10px' duration={500}>
          <img
            className='picture-list__image picture-list-lookbook__third'
            src={require('./images/lookbook/picture3.jpeg')}
            alt='Photoshot 3'
          />
        </Fade>
        <Fade top distance='10px' duration={500}>
          <img
            className='picture-list__image picture-list-lookbook__forth'
            src={require('./images/lookbook/picture4.jpeg')}
            alt='Photoshot 4'
          />
        </Fade>
      </div>
    </Fade>
  )
}

export default PictureList
