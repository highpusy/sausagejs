import React from 'react'
import styles from './s.hero.module.scss'

export const SectionHero = () => {
    return ( 
        <div className={styles.main_background}>
            <div className={styles.main}>
                <div className={styles.title}> Sausage JS</div>
                <div className={styles.title2}> EDUCATION</div>
                <div className={styles.title3}> Твой проводник в мире IT</div>
            </div>
        </div>
    )
}
