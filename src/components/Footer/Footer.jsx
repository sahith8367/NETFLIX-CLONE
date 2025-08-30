import React from 'react'
import Styles from './Footer.module.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.icons}>
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Descrioption</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>leagal Notice</li>
        <li>Cookie Perferences</li>
        <li>corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className={Styles.copyright_text}>&copy; 1997-2023 Netflix , Inc.</p>
    </div>
  )
}

export default Footer