import React, { useEffect, useRef } from 'react'
import Styles from './Navbar.module.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'


const Navbar = () => {
    const  navref = useRef();

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY >=80){
                navref.current.classList.add(Styles.nav_dark);
            }else{
                navref.current.classList.remove(Styles.nav_dark)
            }
        })
    },[])

  return (
    <div ref={navref} className={Styles.navbar}>
        <div className={Styles.nav_left}>
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browser by Languages</li>
            </ul>
        </div>
        <div className={Styles.nav_right}>
            <img src={search_icon} alt=""  className={Styles.icons}/>
            <p>Children</p>
            <img src={bell_icon} alt=""  className={Styles.icons}/>
            <div className={Styles.navbar_profile}>
                <img src={profile_img} alt=""  className={Styles.profile}/>
                <img src={caret_icon} alt="" />
                <div className={Styles.dropdown}>
                    <p>sign out of netflix </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar

