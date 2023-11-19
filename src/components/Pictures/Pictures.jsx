import React, { useRef, useState } from 'react'
import Links from './Links/Links'
import PictureList from './PictureList/PictureList'
import SwitchList from './SwitchList/SwitchList'

import './Pictures.scss'

const Pictures = () => {
  const [currentAlbum, setCurrentAlbum] = useState('compaining')
  const picturesRef = useRef(null)

  const handleChangeAlbum = (album) => {
    picturesRef.current?.scrollIntoView({ behavior: 'smooth' })
    setCurrentAlbum(album)
  }

  return (
    <div ref={picturesRef} className='pictures'>
      <Links setAlbum={handleChangeAlbum} />
      <div className='pictures__list-wrapper'>
        <PictureList currentAlbum={currentAlbum} />
      </div>
      <div className='pictures__switch-list'>
        <SwitchList setAlbum={handleChangeAlbum} />
      </div>
    </div>
  )
}

export default Pictures
