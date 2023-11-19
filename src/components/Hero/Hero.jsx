import React from 'react'

import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
      <img
        className='hero__image'
        src={require('./images/hero.jpg')}
        alt='Hero'
      />
      <div className='hero__description'>
        <p>Здравствуйте!</p>
        <p className='hero__paragraph hero__paragraph-first'>
          Меня зовут Анастасия Малько - я Fashion Stylist из Минска.
        </p>
        <p className='hero__paragraph'>
          Профессионально занимаюсь стилизацией последние несколько лет.
          Окончила FASHION ACADEMY PSFA.
        </p>
        <p className='hero__paragraph'>Мода и стиль - моя страсть.</p>
      </div>
    </div>
  )
}

export default Hero
