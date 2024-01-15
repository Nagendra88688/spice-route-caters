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
            spiceroute699
          </div>
          
          <div className={styles.single_icon}>
          <img alt='social' src={require('./icons/facebook.jpg')} className={styles.social_icons}/>
            spiceroute15
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