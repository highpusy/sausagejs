import React from 'react'
import styles from './s.otherprojects.module.scss'
import Image from 'next/image'
import img1 from '../../imgs/s.otherprojects.img1.jpg'
import img2 from '../../imgs/s.otherprojects.img2.jpg'

export const SectionOtherProjects = () => {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    OTHER PROJECTS
                </h1>
                <p className={styles.text}>
                    A SAMPLE OF POSTERS AND CARDS I ENJOY <br /> 
                    HAVIN GAYSEX WITH MUSCULAR MEN CONCEPTUALIZED,<br /> 
                    DESIGNED, AND CREATED BY ME
                </p>
            </div>
            <div className={styles.imgs}>
                <Image className={styles.img1} src={img1} />
                <Image className={styles.img2} src={img2} />
            </div>
        </div>
    )
}