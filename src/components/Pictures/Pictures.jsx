import React, { useRef, useState } from 'react'
import Links from './Links/Links'
import PictureList from './PictureList/PictureList'
import SwitchList from './SwitchList/SwitchList'

import './Pictures.scss'

const albums = ['compaining', 'editorial', 'lookbook']

const Pictures = () => {
  const [currentAlbum, setCurrentAlbum] = useState('compaining')
  const picturesRef = useRef(null)

  const handleChangeAlbum = (album) => {
    picturesRef.current?.scrollIntoView({ behavior: 'smooth' })
    setCurrentAlbum(album)
  }

  const handleSwitchNextAlbum = () => {
    picturesRef.current?.scrollIntoView({ behavior: 'smooth' })
    const currentIndexAlbum = albums.indexOf(currentAlbum)
    if (albums.length - 1 !== currentIndexAlbum) {
      setCurrentAlbum(albums[currentIndexAlbum + 1])
    } else {
      setCurrentAlbum(albums[0])
    }
  }

  const handleSwitchPreviousAlbum = () => {
    picturesRef.current?.scrollIntoView({ behavior: 'smooth' })
    const currentIndexAlbum = albums.indexOf(currentAlbum)
    console.log(currentIndexAlbum)
    if (currentIndexAlbum !== 0) {
      setCurrentAlbum(albums[currentIndexAlbum - 1])
    } else {
      setCurrentAlbum(albums[2])
    }
  }

  return (
    <div ref={picturesRef} className='pictures'>
      <Links setAlbum={handleChangeAlbum} />
      <div className='pictures__list-wrapper'>
        <PictureList currentAlbum={currentAlbum} />
      </div>
      <div className='pictures__switch-list'>
        <SwitchList
          setNextAlbum={handleSwitchNextAlbum}
          setPreviousAlbum={handleSwitchPreviousAlbum}
        />
      </div>
    </div>
  )
}

export default Pictures
