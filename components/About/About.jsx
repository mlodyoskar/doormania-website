import Image from 'next/image'
import styles from './About.module.scss'

const About = ({ aboutData: { aboutpage } }) => {
  const { firstParagraph, secondParagraph, firstImage, secondImage } = aboutpage
  return (
    <section className={styles.container}>
      <h1 className={styles.pageHeader}>O nas</h1>
      <div className={styles.content}>
        <div className={styles.column}>
          <p className={styles.text}>{firstParagraph}</p>
          <div className={styles.imageContainer}>
            <Image layout="fill" src={firstImage.url} />
          </div>
        </div>
        <div className={styles.column}>
          <p className={styles.text}>{secondParagraph}</p>
          <div className={styles.imageContainer}>
            <Image layout="fill" src={secondImage.url} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
