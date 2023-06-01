import React from 'react'
import styles from './s.links.module.scss'
import Image from 'next/image'
import img1 from '../../imgs/s.links.img1.jpg'

export const SectionLinks = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        Sausage JS
                    </div>
                    <div className={styles.text}>
                        ОСТАЛИСЬ ВОПРОСЫ? <br />
                        ПИШИ
                    </div>
                    <div className={styles.links}>
                        instargam: @suavage.js <br />
                        telegram: @sauvage.js <br />
                        sauvage.js@gmail.com <br />
                    </div>
                </div>
                <div className={styles.block_img}>
                    <Image className={styles.img} src={img1} />
                </div>
            </div>
        </div>
    )
}