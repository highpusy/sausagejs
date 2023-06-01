import React from 'react'
import styles from './s.directions.module.scss'
import Image from 'next/image';
import img1 from '../../imgs/s.directions.img1.jpg'
import img2 from '../../imgs/s.directions.img2.jpg'
import img3 from '../../imgs/s.directions.img3.jpg'
import img4 from '../../imgs/s.directions.img4.jpg'
import img5 from '../../imgs/s.directions.img5.jpg'

export const SectionDirections = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                НАПРАВЛЕНИЯ
            </div>

            <div className={`${styles.content1} ${styles.content}`}>
                <div className={`${styles.block} ${styles.block1}`}>
                    <Image className={styles.block_img} src={img1} />
                    <p className={styles.block_title}>Frontend (React)</p>
                    <p className={styles.block_text}>РАЗРАБАТЫВАЙ КРУТЫЕ САЙТЫ И ВЕБ-ПРИЛОЖЕНИЯ ПОД ЛЮБЫЕ НУЖДЫ.</p>
                </div>
                <div className={`${styles.block} ${styles.block2}`}>
                    <Image className={styles.block_img} src={img2} />
                    <p className={styles.block_title}>Backend (Node.js)</p>
                    <p className={styles.block_text}>РАЗРАБАТЫВАЙ ВЫСОКОНАГРУЖЕННЫЕ СИСТЕМЫ, ОТВЕЧАЮЩИЕ СОВРЕМЕННЫМ ТРЕБОВАНИЯМ.</p>
                </div>

                <div className={`${styles.block} ${styles.block3}`}>
                    <Image className={styles.block_img} src={img3} />
                    <p className={styles.block_title}>Automation QA (JavaScript)</p>
                    <p className={styles.block_text}>ТЕСТИТРУЙ ЛЮБЫЕ ПРИЛОЖЕНИЯ И СЕРВЕРА, ДЕЛАЯ ИХ УДОБНЕЕ И БЕЗОПАСТНЕЕ.</p>
                </div>
            </div>

            <div className={`${styles.content2} ${styles.content}`}>
            <div className={`${styles.block} ${styles.block4}`}>
                    <Image className={styles.block_img} src={img4} />
                    <p className={styles.block_title}>Mobile (React-Native)</p>
                    <p className={styles.block_text}>МОБИЛЬНАЯ РАЗРАБОТКА НА КРОСС-<br />ПЛАТФОРМЕННОЙ ТЕХНЛОГИИ</p>
                </div>
                <div className={`${styles.block} ${styles.block5}`}>
                    <Image className={styles.block_img} src={img5} />
                    <p className={styles.block_title}>Тестовое собеседование +<br /> Чек-листы</p>
                    <p className={styles.block_text}>ПРОВЕРЬ СВОИ ЗНАНИЯ НА ТЕСТОВОМ <br />СОБЕСЕДОВАНИИ. УБЕДИСЬ ЧТО ТЫ ГОТОВ!</p>
                </div>
            </div>
        </div>
    )
}