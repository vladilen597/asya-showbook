import React from 'react'
import { ReactComponent as ArrowLeft } from './images/arrow-left.svg'
import { ReactComponent as ArrowRight } from './images/arrow-right.svg'

import './SwitchList.scss'

const SwitchList = ({ setAlbum }) => {
  return (
    <div className='switch-list'>
      <button
        onClick={() => setAlbum('compaining')}
        className='switch-list__button'
      >
        <ArrowLeft />
        Предыдущее
      </button>
      <button
        onClick={() => setAlbum('editorial')}
        className='switch-list__button'
      >
        Следующее
        <ArrowRight />
      </button>
    </div>
  )
}

export default SwitchList
