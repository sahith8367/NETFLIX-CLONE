import React from 'react'
import Styles from './Home.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../components/Titlecards/Titlecards';

const Home = () => {
  return (
    <div className={Styles.home}> 
        <Navbar/>
        <div className={Styles.hero}>
          <img src={hero_banner} alt="" className={Styles.banner_img}/>
          <div className={Styles.hero_caption}>
            <img src={hero_title} alt="" className={Styles.caption_img}/>
            
            <p>Discovering his ties to a secret ancient order , a young man living in modern istanbul embarkis on a quest to save the city from an immortal enemy .</p>
            <div className={Styles.hero_btns}>
              <button className={Styles.btn}>
                <img src={play_icon} alt="" />Play
              </button>
              <button className={`${Styles.btn} ${Styles.dark_btn}`}>
                <img src={info_icon} alt="" /> More Info
              </button>
            </div>
            <Titlecards/>
          </div>
        </div>
        <div className={Styles.more_cards}>
          <Titlecards title={"Blockbuster Movies"}/>
          <Titlecards title={"Only on Netflix"}/>
          <Titlecards title={"Upcomming"}/>
          <Titlecards title={"Top Movies For You"}/>
        </div>

        <Footer/>
    </div>
  )
}

export default Home