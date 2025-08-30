import React, { useState } from 'react'
import Styles from './Login.module.css'
import Logo from '../../assets/logo.png'

const Login = () => {

  const [signState , setSignState] = useState("Sign In");

  
  return (
    <div className={Styles.login}>
      <img src={Logo} className={Styles.login_logo}alt="" />
      <div className={Styles.login_form}>
        <h1>{signState}</h1>
        <form action="">
          {signState==="Sign Up"?<input type="text" placeholder='Your Name'/>:<></>}
          
          <input type="email" placeholder='Your Email'/>
          <input type="password" placeholder='Password'/>
          <button>{signState}</button>
          <div className={Styles.form_help}>
            <div className={Styles.remember}>
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className={Styles.form_switch}>
          {signState==='Sign In'?<p>New to NetFlix ? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:
          <p>Alrady have account ? <span onClick={()=>{setSignState("Sign In")}}>Sign in Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login