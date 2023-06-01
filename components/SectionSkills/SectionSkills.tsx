import React from 'react'
import styles from './s.skills.module.scss'

export const SectionSkills = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h1 className={styles.title_text}>SKILLS &<br /> EXPERTISE</h1>
            </div>
            <div className={styles.content}>
                <h1 className={styles.content_title}>
                    Graphic Design
                </h1>
                <p className={styles.content_text}>
                    ⎼ Logo Design <br />
                    ⎼ Brand Identity <br />
                    ⎼ Poster Design <br />
                    ⎼ Environmental Design <br />
                </p>
                <h1 className={styles.content_title}>
                    Illustration
                </h1>
                <p className={styles.content_text}>
                    ⎼ Digital Illustration <br />
                    ⎼ Street Art and Murals
                </p>
            </div>
        </div>
    )
}