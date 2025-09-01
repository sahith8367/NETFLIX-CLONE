import React from 'react'
import Styles from './Player.module.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {
  return (
    <div className={Styles.player}>
      <img src={back_arrow_icon} alt="" />
      <iframe  width='90%'  frameborder="0"></iframe>
    </div>
  )
}

export default Player