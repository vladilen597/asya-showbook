import React from 'react'

import './Header.scss'
import SocialLinks from '../SocialLinks/SocialLinks'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
  return (
    <header className='header'>
      <ul className='header__links'>
        <li className='header__list-item'>
          <AnchorLink offset='150' className='header__link' href='#pictures'>
            МОИ работы
          </AnchorLink>
        </li>
        <li className='header__list-item'>
          <AnchorLink className='header__link' href='#pricelist'>
            Прайс- лист
          </AnchorLink>
        </li>
      </ul>
      <SocialLinks />
    </header>
  )
}

export default Header
