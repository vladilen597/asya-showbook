import React from 'react'

import './Links.scss'

const Links = ({ setAlbum }) => {
  return (
    <ul className='links' id='pictures'>
      <li className='links__item links__item-bold'>МОИ работы</li>
      <li className='links__item'>
        <button
          onClick={() => setAlbum('compaining')}
          className='links__link-button'
        >
          Compaining
        </button>
      </li>
      <li className='links__item'>
        <button
          onClick={() => setAlbum('editorial')}
          className='links__link-button'
        >
          Editorial
        </button>
      </li>
      <li className='links__item'>
        <button
          onClick={() => setAlbum('lookbook')}
          className='links__link-button'
        >
          Lookbook
        </button>
      </li>
    </ul>
  )
}

export default Links
