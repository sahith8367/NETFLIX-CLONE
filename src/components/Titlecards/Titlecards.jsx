import React from 'react'
import Styles from './Titlecards.module.css'
import cards_data from '../../assets/cards/Cards_data'

const Titlecards = (props) => {

  return (
    <div className={Styles.title_cards}>
      <h1>{props.title?props.title:"Popular on Netflix"}</h1>
      <div className={Styles.card_list}>
        {cards_data.map((card , i)=>{
          return <div className={Styles.card} key={i}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Titlecards