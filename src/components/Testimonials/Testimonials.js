import React from 'react'
import styles from './styles.module.css'

const Testimonials = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className={styles.client_heading}>Our Happy Clients</div>
        
        <div className={styles.testimonial_message}>
        Choosing Spice Route Caters was the best decision for our event! 
        The culinary artistry and attention to detail brought a symphony of flavors to our table, 
        creating an unforgettable dining experience. 
        <div style={{color: 'gray'}}>- Nagendra Singh</div>
        </div>

        <div className={styles.testimonial_message}>
        Their services has not only met but exceeded our expectations, 
        leaving a lasting impression on our guests.
        <div style={{color: 'gray'}}>- Roshan Chauhan</div>
        </div>

        <div className={styles.testimonial_message}>
        If you're looking for a catering partner that seamlessly blends
         culinary expertise with impeccable service, 
         look no further than Spice Route Caters.
        <div style={{color: 'gray'}}>- Vivek Garg</div>
        </div>

    </div> 
  )
}

export default Testimonials