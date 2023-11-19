import React from 'react'

import './PriceBlock.scss'

const PriceBlock = () => {
  return (
    <div className='price-block' id='pricelist'>
      <div className='price-block__info'>
        <h2 className='price-block__title'>Прайс-лист</h2>
        <span className='price-block__subtitle'>
          <span>ПЕРСОНАЛЬНЫЕ КЛИЕНТЫ</span>
        </span>
        <ul className='price-block__list'>
          <span>Консультация по стилю</span>
          <span>от 100 BYN/час</span>
          <span>Образ на фотосессию / мероприятие</span>
          <span>от 150 BYN/ 1 лук</span>
          <span>Разбор гардероба</span>
          <span>от 330 BYN</span>
          <span>Шоппинг</span>
          <span>от 330 BYN/ 2 часа</span>
          <span>Составление из гардероба комплектов на сезон</span>
          <span>от 500 BYN</span>
          <span>Разработка концепции имиджа клиента</span>
          <span>от 800 BYN</span>
          <span>Полное преображение</span>
          <span>от 1500 BYN</span>
        </ul>
      </div>
      <img
        className='price-block__image'
        src={require('./images/price-picture.jpg')}
        alt='Price block'
      />
    </div>
  )
}

export default PriceBlock
