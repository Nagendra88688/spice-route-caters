import React from 'react'
import styles from './styles.module.css'

const Connect = ({heading = 'Connect With Us'}) => {
  return (
    <div>
        <div className={styles.connect_heading}>{heading}</div>
        <div className={styles.icon_container}>
          <div className={styles.single_icon}>
            <img alt='social' src={require('./icons/gmail.jpg')} className={styles.social_icons}/>
            spiceroute699@gmail.com 
          </div>
          
          <div className={styles.single_icon}>
          <img alt='social' src={require('./icons/call.jpg')} className={styles.social_icons}/>

            +91 89589 44897 
          </div>
        </div>

        <div className={styles.icon_container}>
          <div className={styles.single_icon}>
          <img alt='social' src={require('./icons/instagram.png')} className={styles.social_icons}/>
            <button 
            onClick={()=>window.open('https://www.instagram.com/spiceroute699?igsh=MzRlODBiNWFlZA==')}
            className={styles.social_button}
            >spiceroute699</button>
          </div>
          
          <div className={styles.single_icon}>
          <img alt='social' src={require('./icons/facebook.jpg')} className={styles.social_icons}/>
            <button 
            onClick={()=>window.open('https://www.facebook.com/spiceroute15?mibextid=rS40aB7S9Ucbxw6v')}
            className={styles.social_button}
            >spiceroute15</button>
          </div>
        </div>

        <div className={styles.icon_container}>
          <div className={styles.single_icon}>
          <img alt='social' src={require('./icons/location.jpg')} className={styles.social_icons}/>
            Kotdwara, Uttarakhand, India, 246149 
          </div>
        </div>
    </div>
  )
}

export default Connect