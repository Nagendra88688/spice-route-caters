import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const TOTAL_IMAGES_COUNT = 6;

const ImageCarousel = () => {
    const [current, setCurrent] = useState(1);

    const IMAGE_URL_MAPPING = {
        1: "./images/image1.jpg",
        2: "./images/image2.jpg",
        3: "./images/image3.jpg",
        4: "./images/image4.jpg",
        5: "./images/image5.jpg",
        6: "./images/image6.jpg",
    }

    useEffect(()=> {
        const timerId = setInterval(()=>{
            if(current === TOTAL_IMAGES_COUNT){
                setCurrent(1);
            }else {
                setCurrent(current+1);
            }
        },2000);

        return () => {
            clearInterval(timerId);
        }
    },[current]);


  return (
    <div className={styles.container}>
        <div className={styles.fade}>
        <img alt='banner'  src={require(`${IMAGE_URL_MAPPING[current]}`)} className={styles.banner_image} />
        </div>
    </div>
  )
}

export default ImageCarousel