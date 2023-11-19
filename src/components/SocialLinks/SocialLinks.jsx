import React from 'react'
import { ReactComponent as InstagramIcon } from './images/instagram.svg'
import { ReactComponent as BehanceIcon } from './images/behance.svg'
import { ReactComponent as TelegramIcon } from './images/telegram.svg'

import './SocialLinks.scss'

const SocialLinks = () => {
  return (
    <ul className='social-links'>
      <li>
        <a
          className='social-links__link'
          href='https://www.instagram.com/asya_malko1989/'
        >
          <InstagramIcon />
        </a>
      </li>
      <li>
        <a
          className='social-links__link'
          href='https://www.behance.net/3f81a5f1'
        >
          <BehanceIcon />
        </a>
      </li>
      <li>
        <a className='social-links__link' href='https://t.me/ASYAmalko'>
          <TelegramIcon />
        </a>
      </li>
    </ul>
  )
}

export default SocialLinks
