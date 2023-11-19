import React from 'react'

import './PriceBlock2.scss'

const PriceBlock2 = () => {
  return (
    <div className='price-block'>
      <img
        className='price-block__image'
        src={require('./images/price-picture.jpeg')}
        alt='Price block'
      />
      <div className='price-block__info'>
        <ul className='price-block__list'>
          <span>Консультация брендам</span>
          <span>от 200 BYN/час</span>
          <span>Мудборд съемки</span>
          <span>от 235 BYN</span>
          <span>Концепция fashion-витрин для ТЦ / шоу румов</span>
          <span>от 5000 BYN</span>
          <span>Оформление / стилизация манекенов</span>
          <span>от 130 BYN/ манекен</span>
          <span>Стилизация Кампейна / Лукбука</span>
          <span>от 1000 BYN</span>
          <span>Стилизация показа коллекции</span>
          <span>от 800 BYN</span>
          <span>Apt-direction / концепция съемки</span>
          <span>от 500 BYN</span>
          <span>Продюсирование съемки</span>
          <span>от 800 BYN</span>
          <span>Разработка коллекции</span>
          <span>от 3300 BYN и выше</span>
        </ul>
      </div>
    </div>
  )
}

export default PriceBlock2
