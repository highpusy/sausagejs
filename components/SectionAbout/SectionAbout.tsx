import React from 'react'
import styles from './s.about.module.scss'
import Image from 'next/image';
import img1 from '../../imgs/s.about.img1.jpg'
import img2 from '../../imgs/s.about.img2.jpg'

export const SectionAbout = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <div className={styles.title_text}>
                    НЕМНОГО О ШКОЛЕ
                </div>
                <Image className={styles.title_img} src={img1} />
            </div>
            <div className={styles.content}>
                <Image className={styles.content_img} src={img2} />
                <div className={styles.content_text}>
                    Sausage JS - это школа программирования, где мы научим тебя востребованным сегодня знаниям в области 
                    JavaScript разработки. 
                    С нами ты точно станешь крутым IT-специалистом!
                </div>
            </div>
        </div>
    )
}