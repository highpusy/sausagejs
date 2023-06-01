import React from 'react'
import styles from './s.whywe.module.scss'
import Image from 'next/image';
import img1 from '../../imgs/s.whywe.img1.jpg'

export const SectionWhyWe = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    ПОЧЕМУ МЫ?
                </h1>
                <div className={`${styles.content1} ${styles.content}`}>
                    <div className={styles.block}>
                        <h1 className={styles.block_title}>Индивидуальный подход</h1>
                        <ul>
                            <li className={styles.block_text}>
                                ДЛЯ БОЛЕЕ КАЧЕСТВЕННОГО УСВОЕНИЯ МАТЕРИАЛА 
                                НЕОБХОДИМ ИНДИВИДУАЛЬНЫХ ПОДХОД К КАЖДОМУ СТУДЕНТУ. 
                                И ОН У НАС ЕСТЬ!
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.content2} ${styles.content}`}>
                    <div className={styles.block}>
                        <h1 className={styles.block_title}>Гибкое обучение</h1>
                        <ul>
                            <li className={styles.block_text}>
                                ВОЗМОЖНОСТЬ ПРОХОЖДЕНИЯ ОБУЧЕНИЯ В 
                                ГИБКОМ ФОРМАТЕ, И ТОМ ТЕМПЕ КОТОРЫЙ ТЕБЕ УДОБЕН.
                            </li>
                        </ul>
                    </div>
                    <div className={styles.block}>
                        <h1 className={styles.block_title}>Гибкое обучение</h1>
                        <ul>
                            <li className={styles.block_text}>
                                ВОЗМОЖНОСТЬ ПРОХОЖДЕНИЯ ОБУЧЕНИЯ В 
                                ГИБКОМ ФОРМАТЕ, И ТОМ ТЕМПЕ КОТОРЫЙ ТЕБЕ УДОБЕН.
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles.block} ${styles.block_img} `}>
                        <Image className={styles.img} src={img1} />
                    </div>
                </div>
            </div>
        </div>
    )
}