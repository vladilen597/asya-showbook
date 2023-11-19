import React from 'react'
import { ReactComponent as ArrowLeft } from './images/arrow-left.svg'
import { ReactComponent as ArrowRight } from './images/arrow-right.svg'

import './SwitchList.scss'

const SwitchList = ({ setNextAlbum, setPreviousAlbum }) => {
  return (
    <div className='switch-list'>
      <button onClick={setPreviousAlbum} className='switch-list__button'>
        <ArrowLeft />
        Предыдущее
      </button>
      <button onClick={setNextAlbum} className='switch-list__button'>
        Следующее
        <ArrowRight />
      </button>
    </div>
  )
}

export default SwitchList
