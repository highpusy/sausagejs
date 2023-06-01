import React from 'react'
import styles from './s.slogan.module.scss'
import Image from 'next/image'
import img1 from '../../imgs/s.slogan.img1.jpg'
import img2 from '../../imgs/s.slogan.img2.jpg'

export const SectionSlogan = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1 className={styles.title_text}>МЫ</h1>
                </div>
                <div className={styles.title}>
                    <h1 className={`${styles.title_text} ${styles.title_text__italic}`}><i>ГОТОВИМ</i></h1>
                    <Image className={styles.title_img1} src={img1} />
                </div>
                <div className={styles.title}>
                    <Image className={styles.title_img2} src={img2} />
                    <h1 className={styles.title_text}>СПЕЦОВ</h1>
                </div>
            </div>
        </div>
    )
}