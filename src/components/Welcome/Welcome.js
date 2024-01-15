import React from 'react'
import styles from './styles.module.css';

const Welcome = () => {
  return (
    <div className={styles.welcome_container}>
        <div className={styles.sub_container}>
          <div className={styles.welcome_heading}>WELCOME TO SPICE ROUTE CATERS</div>
          <div className={styles.welcome_text}>
           Welcome to Spice Route Caters, 
           <div>where culinary excellence meets your every occasion.</div>
           Our passion for creating unforgettable dining experiences is evident in every dish we craft. 
           At Spice Route Caters, we blend the finest ingredients with a touch of innovation to bring you a symphony of flavors that will tantalize your taste buds. 
           From intimate gatherings to grand celebrations, our dedicated team ensures meticulous attention to detail, leaving you free to savor every moment. 
          </div>
          <div className={styles.author}>
            - Soban Singh
          </div>
        </div>
        
        <div className={styles.sub_container}>
             <img 
               alt='welcome' 
               src={require('../ImageCarousel/images/image2.jpg')}
               className={styles.welcome_image}
               />
        </div>
    </div>
  )
}

export default Welcome